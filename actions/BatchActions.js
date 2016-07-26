import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'

export const LOAD_BATCH="LOAD_BATCH";
export const LOAD_FAILED="LOAD_FAILED";
export const LOAD_SUCCESS="LOAD_SUCCESS";

export const ADD_BATCH_FORM="ADD_BATCH_FORM";
export const SAVE_BATCH_FORM="SAVE_BATCH_FORM";
export const SAVE_FAILED_BATCH_FORM="SAVE_FAILED_BATCH_FORM";
export const SAVE_SUCCESS_BATCH_FORM="SAVE_SUCCESS_BATCH_FORM";
export const EDIT_SUCCESS_LOAD_BATCH="EDIT_SUCCESS_LOAD_BATCH";
export const EDIT_FAILED_LOAD_BATCH="EDIT_FAILED_LOAD_BATCH";
export const FORM_VALUE_CHANGED="FORM_VALUE_CHANGED"
export const INIT_DELETE_BATCH="INIT_DELETE_BATCH"
export const DELETE_ATTEMPT_BATCH="DELETE_ATTEMPT_BATCH"
export const DELETE_FAILED_BATCH="DELETE_FAILED_BATCH"


export function initDeleteBatch(){
	return{
		type: INIT_DELETE_BATCH,
		isDeleting: false,
		hasError: false,
		message:''
		
	}
}
export function deleteAttemptBatch(){
	return{
		type: DELETE_ATTEMPT_BATCH,
		isDeleting: true,
		hasError: false,
		message:''
		
	}
}

export function deleteFailedBatch(message){
	return{
		type: DELETE_FAILED_BATCH,
		isDeleting: false,
		hasError: true,
		message
	}
}


export function addBatchForm(batch){
	return{
		type: ADD_BATCH_FORM,
		isFetching: true,
		isSaving: false,
		hasError: false,
		message: '',
		batch
	}
}

export function editSuccessLoadBatchForm(batch){
	return{
		type: EDIT_SUCCESS_LOAD_BATCH,
		isSaving: false,
		isFetching: false,
		hasError: false,
		batch
	}
}

export function valueChangeFormBatch(batch, field, value){
	return{
		type: FORM_VALUE_CHANGED,
		batch,
		field,
		value
	}
}

export function editFailedLoadBatchForm(message){
	return{
		type: EDIT_FAILED_LOAD_BATCH,
		isSaving: false,
		isFetching: false,
		hasError: true,
		message
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

export function deleteBatch(id){

	return dispatch=>{
		dispatch(deleteAttemptBatch())
		// setTimeout(()=>{
		// 	//dispatch(saveSuccessBatchForm(batch))
		// 	//dispatch(push('/settings/batch'))
		// 	dispatch(deleteFailedBatch('Delete failed'))
		// }, 2000)
		
		fetch('http://52.77.70.200:3000/batch/delete/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{	
		 	console.log(ret)	
		 	if (parseInt(ret.status)==1){
		 		dispatch(initBatch())	
		 	}else{
		 		dispatch(deleteFailedBatch(ret.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(deleteFailedBatch('Database error'))
			console.log('request failed', error) 
		})
	}
}

export function getBatch(id){

	return dispatch=>{
		//dispatch(loadBatchForm())
		// setTimeout(()=>{
		// 	//dispatch(saveSuccessBatchForm(batch))
		// 	//dispatch(push('/settings/batch'))
		// 	console.log('2')
		// }, 2000)http://52.77.70.200/

		
		fetch('http://52.77.70.200:3000/batch/edit/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{
		
		 	if (parseInt(ret.status)==1){
		 		//console.log('ye :' + ret.data.batchname)
		 		//console.log(parseInt(data.status))
				dispatch(editSuccessLoadBatchForm(ret.data))	
		 	}else{
		 		dispatch(editFailedLoadBatchForm(data.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(editFailedLoadBatchForm('Database error'))
			console.log('request failed', error) 
		})
	}
}

export function saveBatch(mode, batch){

	let config

  	var url ="http://52.77.70.200:3000/batch/update/"
  	if (mode=="add"){
  		url ="http://52.77.70.200:3000/batch/add/"
  		config = {
		    method: 'POST',
		    headers: { 
		    	 'Accept': 'application/json',
	        	 'Content-Type': 'application/json',
		    },
		    body: JSON.stringify({
		    	batchname: batch.batchname,
		    	yearfrom: batch.yearfrom,
		    	yearto: batch.yearto
		    })
  		}	
  	}else{
  		config = {
		    method: 'POST',
		    headers: { 
		    	 'Accept': 'application/json',
	        	 'Content-Type': 'application/json',
		    },
		    body: JSON.stringify({
		    	id : batch.id,
		    	batchname: batch.batchname,
		    	yearfrom: batch.yearfrom,
		    	yearto: batch.yearto
		    })
  		}	
  	}
	return dispatch=>{
		dispatch(saveBatchForm(batch))
		// return setTimeout(()=>{
		// 	dispatch(saveSuccessBatchForm(batch))
		// 	dispatch(push('/settings/batch'))
		// }, 2000)
		fetch(url, config)
		.then(response=>response.json()
			.then(data=>({ data, response }))
		 ).then(({ data, response })=>{
		 	//console.log(data)
		 	if (parseInt(data.status)==1){
		 		//console.log(parseInt(data.message))
				dispatch(push('/settings/batch'))
		 	}else{
		 		dispatch(saveFailedBatchForm(data.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(saveFailedBatchForm('Database error'))
			console.log('request failed', error) 
		})
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
		// return setTimeout(()=>{
		// 	dispatch(loadSuccess(data))			
		// }, 1000)
		fetch('http://52.77.70.200:3000/batch')
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{
		 	//console.log(data)
		 	if (parseInt(ret.status)==1){
		 		//console.log(parseInt(data.status))
				dispatch(loadSuccess(ret.data))	
		 	}else{
		 		dispatch(loadFailed(data.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(loadFailed('Database error'))
			console.log('request failed', error) 
		})
	}
}

//https://www.youtube.com/watch?v=DVEsNYS1Cgo