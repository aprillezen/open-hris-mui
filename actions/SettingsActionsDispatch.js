import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import { saveForm, saveSuccessForm, saveFailedForm, loadList, loadListSuccess, loadListFailed, loadEditForm, loadEditSuccessForm, loadEditFailedForm,deleteAttempt, deleteFailed } from './index'

export function initBatch(){
	return dispatch=>{
		dispatch(loadList())
		fetch('http://52.77.70.200:8081/batch')
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{
		 	if (parseInt(ret.status)==1){
				dispatch(loadListSuccess(ret.data))	
		 	}else{
		 		dispatch(loadListFailed(data.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(loadListFailed('Database error'))			
		})
	}
}

export function saveBatch(mode, batch){

	let config

  	var url ="http://52.77.70.200:8081/batch/update/"
  	if (mode=="add"){
  		url ="http://52.77.70.200:8081/batch/add/"
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
		dispatch(saveForm(batch))
		// return setTimeout(()=>{
		// 	dispatch(saveSuccessBatchForm(batch))
		// 	dispatch(push('/settings/batch'))
		// }, 2000)
		fetch(url, config)
		.then(response=>response.json()
			.then(data=>({ data, response }))
		 ).then(({ data, response })=>{
		 	if (parseInt(data.status)==1){
		 		dispatch(saveSuccessForm(batch))
				dispatch(push('/settings/batch'))
		 	}else{
		 		dispatch(saveFailedForm(data.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(saveFailedForm('Database error'))
		})
	}
}

export function getBatch(id){
	return dispatch=>{
		dispatch(loadEditForm("Edit Batch"))
		fetch('http://52.77.70.200:8081/batch/edit/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{
		 	if (parseInt(ret.status)==1){
				dispatch(loadEditSuccessForm(ret.data))	
		 	}else{
		 		dispatch(loadEditFailedForm(data.message))
		 	}
		 })
		.catch(error => { 
			dispatch(loadEditFailedForm('Database error'))
		})
	}
}


export function deleteBatch(id){

	return dispatch=>{
		dispatch(deleteAttempt())
		// setTimeout(()=>{
		// 	//dispatch(saveSuccessBatchForm(batch))
		// 	//dispatch(push('/settings/batch'))
		// 	dispatch(deleteFailedBatch('Delete failed'))
		// }, 2000)
		
		fetch('http://52.77.70.200:8081/batch/delete/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{	
		 	if (parseInt(ret.status)==1){
		 		dispatch(initBatch())	
		 	}else{
		 		dispatch(deleteFailed(ret.message))
		 	}
		 })
		.catch(error => { 
			dispatch(deleteFailed('Database error'))
		})
	}
}

