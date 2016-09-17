import * as ACT from './actionTypes'

// ********************************************************************************
// LISTS
// ********************************************************************************
export function loadList(){	
	return{
		type: ACT.LT_LOAD_LIST,
		isFetching: true,
		isFetchFailed: false,		
		message: '',
		hasError: false
	}
}

export function loadListSuccess(data){
	return{
		type: ACT.LT_LOAD_LIST_SUCCESS,
		isFetching:false,
		isFetchFailed: false,	
		message: '',
		hasError: false,		
		data
	}
}

export function loadListFailed(message){
	return{
		type: ACT.LT_LOAD_LIST_FAILED,
		isFetching: false,
		isFetchFailed: true,
		hasError: false,
		message
	}
}

export function fetchLeaveTypes(){	
	return dispatch=>{
		dispatch(loadList())		
		fetch('http://localhost:8081/lt')
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


// ********************************************************************************
//  FORM
// ********************************************************************************
export function loadAddForm(title){
	return{
		type: ACT.LT_LOAD_ADD_FORM,
		editMode: false,
		title: title,
		isFetching: true,
		isSaving: false,
		hasError: false,
		message: '',
		saveAddSuccess: false,
	}
}

export function loadFormSuccess(data, payaccounts){
	return{
		type: ACT.LT_LOAD_FORM_SUCCESS,	
		isFetching: false,
		data,
		payaccounts
	}
}

export function loadFormFailed(message){
	return{
		type: ACT.LT_LOAD_FORM_FAILED,	
		isFetching: false,
		hasError: true,
		message
	}
}

export function loaddAdd(data, title){

	return dispatch=>{
		dispatch(loadAddForm(title))		
		fetch('http://localhost:8081/paycode/list')
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{			 	 	
		 	if (parseInt(ret.status)==1){
		 		//console.log(ret.data)
				dispatch(loadFormSuccess(data, ret.data))	
				//dispatch(loadFormFailed("error"))
		 	}else{
		 		dispatch(loadFormFailed(ret.message))
		 	}		 	
		 })
		.catch(error => { 
			dispatch(loadFormFailed('Database error'))			
		})
	}
}

export function linkidvalueChangeForm(id){
	return{
		type: ACT.LT_FORM_LINKID_VALUE_CHANGED,
		id
	}
}

export function loadEditForm(title){
	return{
		type: ACT.LT_LOAD_EDIT_FORM,
		editMode: true,
		title: title,
		isFetching: true,
		isSaving: false,
		hasError: false,
		message: '',		
		updateSuccess: false
	}
}

export function loadEdit(id,title){
	return dispatch=>{
		dispatch(loadEditForm(title))		
		fetch('http://localhost:8081/lt/edit/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{			 	 	
		 	if (parseInt(ret.status)==1){		 		
				dispatch(loadFormSuccess(ret.data, ret.payaccount))	
		 	}else{
		 		dispatch(loadFormFailed(ret.message))
		 	}		 	
		 })
		.catch(error => { 
			dispatch(loadFormFailed('Database error'))			
		})
	}
}

export function saveForm(){
	return{
		type: ACT.LT_SAVE_FORM,
		isSaving: true,
		hasError: false,
		saveAddSuccess: false
	}
}

export function saveSuccessForm(data){
	return{
		type: ACT.LT_SAVE_SUCCESS_FORM,
		isSaving: false,
		hasError: false,
		saveAddSuccess: true,
		updateSuccess: false,
		data
	}
}

export function updateSuccessForm(data){
	return{
		type: ACT.LT_UPDATE_SUCCESS_FORM,
		isSaving: false,
		hasError: false,
		saveAddSuccess: false,
		updateSuccess: true,
		data
	}
}

export function saveFailedForm(message){
	return{
		type: ACT.LT_SAVE_FAILED_FORM,
		isSaving: false,
		hasError: true,		
		message
	}
}

export function valueChangeForm(data, field, value){
	return{
		type: ACT.LT_FORM_VALUE_CHANGED,
		isSaving: false,
		hasError: false,
		message: '',
		data,
		field,
		value
	}
}

export function saveLeaveType(data, editMode){
	
	let dataForm = {
		    method: 'POST',
		    headers: { 
		    	 'Accept': 'application/json',
	        	 'Content-Type': 'application/json',
		    },
		    body: JSON.stringify({
		    	id : data.id,
		    	leavecode : data.leavecode,
		    	description: data.description,
		    	linkId: data.linkId.value
		    })
  		}	
  	let url = 'http://localhost:8081/lt/add'
  	if (editMode==true){
  		url='http://localhost:8081/lt/update'
  	}
	return dispatch=>{
		dispatch(saveForm())		
		fetch(url, dataForm)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){			 		
		 		if (editMode==true) {		 			
		 			dispatch(updateSuccessForm(data))				 			
		 		}else{		 			
		 			data.id = ret.data.id		 					 				 			 
		 			dispatch(saveSuccessForm(data))		
		 		}				
		 	}else{
		 		dispatch(saveFailedForm(ret.message))		 			 		
		 	}
		 	
		 })
		.catch(error => { 					
			dispatch(saveFailedForm(error))			
		})
	}

}

export function loadDeleteDialog(id, msg){
	return{
		type: ACT.LT_LOAD_DELETE_DIALOG,
		isDeleteDialogOpen: true,
		isDeleting: false,
		deleteHasError: false,
		deleteErrorMsg: '',
		deleteSuccess: false,
		id,
		msg		
	}
}

export function cancelDelete(){
	return{
		type: ACT.LT_CANCEL_DELETE,
		isDeleteDialogOpen: false,
		isDeleting: false,
		deleteHasError: false,
		deleteSuccess: false,
		deleteErrorMsg:'',		
		deleteId: 0
	}
}

export function deleteAttempt(){
	return{
		type: ACT.LT_DELETE_ATTEMPT,
		isDeleting: true,
		deleteHasError: false,
		deleteSuccess: false,
		deleteErrorMsg:''
		
	}
}
export function deleteFailed(message){
	return{
		type: ACT.LT_DELETE_FAILED,
		isDeleting: false,
		deleteHasError: true,	
		deleteSuccess: false,
		message
	}
}

export function deleteSuccess(id){
	return{
		type: ACT.LT_DELETE_SUCCESS,
		isDeleteDialogOpen: false,
		isDeleting: false,
		deleteHasError: false,
		deleteSuccess: true,
		deleteErrorMsg:'',
		deleteSuccess: true,
		updateSuccess: false,
		saveAddSuccess: false,
		id
	}
}

export function deleteleaveType(id){
	return dispatch=>{
		dispatch(deleteAttempt())		
		fetch('http://localhost:8081/lt/delete/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){
				dispatch(deleteSuccess(id))	
		 	}else{
		 		dispatch(deleteFailed(data.message))
		 	}		 	
		 })
		.catch(error => { 
			dispatch(deleteFailed('Database error'))			
		})
	}
}



