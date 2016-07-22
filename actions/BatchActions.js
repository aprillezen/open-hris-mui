import { push } from 'react-router-redux'

export const LOAD_BATCH="LOAD_BATCH";
export const LOAD_FAILED="LOAD_FAILED";
export const LOAD_SUCCESS="LOAD_SUCCESS";
export const LOAD_BATCH_FORM="LOAD_BATCH_FORM";
export const SAVE_BATCH_FORM="SAVE_BATCH_FORM";
export const SAVE_FAILED_BATCH_FORM="SAVE_FAILED_BATCH_FORM";
export const SAVE_SUCCESS_BATCH_FORM="SAVE_SUCCESS_BATCH_FORM";

export function loadBatchForm(){
	return{
		type: LOAD_BATCH_FORM,
		isSaving: false		
	}
}

export function saveBatchForm(batch){
	return{
		type: SAVE_BATCH_FORM,
		isSaving: true,
		hasError: false,
		batch
	}
}

export function saveFailedBatchForm(message){
	return{
		type: SAVE_FAILED_BATCH_FORM,
		isSaving: false,
		hasError: true,
		message
	}
}

export function saveSuccessBatchForm(batch){
	return{
		type: SAVE_SUCCESS_BATCH_FORM,
		isSaving: false,
		hasError: false,
		batch
	}
}
export function createBatch(batch){

	let config = {
	    method: 'POST',
	    headers: { 
	    	 'Accept': 'application/json',
        	 'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
	    	id: batch.id,
	    	batchname: batch.batchname,
	    	yearfrom: batch.yearfrom,
	    	yearto: batch.yearto
	    })
  	}	
	
	//console.log(batch)

	return dispatch=>{
		dispatch(saveBatchForm(batch))
		return setTimeout(()=>{
			dispatch(saveSuccessBatchForm(batch))
			dispatch(push('/settings/batch'))
		}, 2000)
	}
}


export function loadBatch(){
	return{
		type: LOAD_BATCH,
		isFetching: true,
		isFailed: false
	}
}

export function loadSuccess(batches){
	return{
		type: LOAD_SUCCESS,
		isFetching:false,
		isFailed: false,
		batches
	}
}

export function loadFailed(message){
	return{
		type: LOAD_FAILED,
		isFetching: false,
		isFailed: true,
		message
	}
}

export function initBatch(){

	let data =  [
				  {
				    "id": 0,
				    "batchname": "Rizal",
				    "startdate": "06/10/2016",
				    "enddate": "06/10/2016",
				    "yearfrom": "2016",
				    "yearto": "2017"
				  },
				  {
				    "id": 1,
				    "batchname": "Bonifacio",
				    "startdate": "06/10/2015",
				    "enddate": "06/10/2015",
				    "yearfrom": "2015",
				    "yearto": "2016"
				  },
				  {
				    "id": 3,
				    "batchname": "Mabini",
				    "startdate": "06/10/2015",
				    "enddate": "06/10/2015",
				    "yearfrom": "2015",
				    "yearto": "2016"
				  },
				  {
				    "id": 4,
				    "batchname": "Parasogot",
				    "startdate": "06/10/2015",
				    "enddate": "06/10/2015",
				    "yearfrom": "2015",
				    "yearto": "2016"
				  }
				]
	return dispatch=>{
		dispatch(loadBatch())
		return setTimeout(()=>{
			dispatch(loadSuccess(data))			
		}, 1000)
	}
}

//https://www.youtube.com/watch?v=DVEsNYS1Cgo