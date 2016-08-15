import * as ACT from './actionTypes'

export function loadList(){	
	return{
		type: ACT.DEPT_LOAD_LIST,
		isFetching: true,
		isFetchFailed: false,		
		message: '',
		hasError: false,
		saveSuccess: false,
		isDialogOpen: false,
		editMode: false,
		isSaving: false,		
		title: '',
		saveError: false,	
		saveEditSuccess: false,
		isDeleteDialogOpen: false,
		isDeleting: false,
		deleteHasError: false,
		deleteErrorMsg:'',
		deletemsg:'',
		deleteSuccess: false,
		deleteId:0
	}
}

export function loadListSuccess(data){
	return{
		type: ACT.DEPT_LOAD_LIST_SUCCESS,
		isFetching:false,
		isFetchFailed: false,	
		message: '',
		hasError: false,		
		data
	}
}

export function loadListFailed(message){
	return{
		type: ACT.DEPT_LOAD_LIST_FAILED,
		isFetching: false,
		isFetchFailed: true,
		hasError: false,
		message
	}
}


export function fetchDepartment(){	
	return dispatch=>{
		dispatch(loadList())
		// return setTimeout(()=>{
		// 	dispatch(loadListSuccess(fakedata))	
		// 	//dispatch(loadListFailed("test error"))
		// }, 1000)
		fetch('http://52.77.70.200:8081/department')
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


export function loadAddDeptForm(dataForm, title){	
	return{
		type: ACT.DEPT_LOAD_ADD_FORM,
		isDialogOpen: true,
		editMode: false,
		title: title,		
		isSaving: false,
		hasError: false,	
		saveError: false,	
		saveSuccess: false,
		message: '',
		deleteSuccess: false,
		saveEditSuccess: false,
		dataForm
	}
}

export function saveDeptForm(){
	return{
		type: ACT.DEPT_SAVE_FORM,
		isSaving: true,
		saveError: false,
		saveSuccess: false
	}
}

export function saveDepartment(data,editMode){
	let dataForm = {
		    method: 'POST',
		    headers: { 
		    	 'Accept': 'application/json',
	        	 'Content-Type': 'application/json',
		    },
		    body: JSON.stringify({
		    	id : data.id,
		    	description: data.description	   
		    })
  		}	

  	let url = 'http://52.77.70.200:8081/department/add'
  	if (editMode==true){
  		url='http://52.77.70.200:8081/department/update'
  	}
	return dispatch=>{
		dispatch(saveDeptForm())		
		fetch(url, dataForm)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){			 		
		 		if (editMode==true) {
		 			dispatch(saveEditSuccessDeptForm(data))				 			
		 		}else{		 			
		 			dispatch(saveSuccessDeptForm(ret.data))		
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

export function saveSuccessDeptForm(data){
	return{
		type: ACT.DEPT_SAVE_SUCCESS_FORM,
		isDialogOpen: false,
		isSaving: false,
		hasError: false,
		message:'',
		saveError: false,
		saveSuccess: true,
		saveEditSuccess: false,
		editMode: false,
		data
	}
}

export function saveFailedForm(message){
	return{
		type: ACT.DEPT_SAVE_FAILED_FORM,
		isDialogOpen: true,
		isSaving: false,
		hasError: true,
		saveError: true,
		saveSuccess: false,
		message
	}
}

export function valueChangeForm(value){
	return{
		type: ACT.DEPT_FORM_VALUE_CHANGED,	
		hasError: false,	
		saveError: false,
		message: '',
		value
	}
}

export function cancelForm(data){
	return{
		type: ACT.DEPT_CANCEL_FORM,
		isDialogOpen: false,
		editMode: false,	
		isSaving: false,
		hasError: false,
		dataForm: data,
		saveError: false
	}
}


export function loadEditForm(dataForm, title){
	return{
		type: ACT.DEPT_LOAD_EDIT_FORM,
		isDialogOpen: true,
		editMode: true,
		title: title,		
		isSaving: false,
		hasError: false,	
		saveError: false,	
		saveSuccess: false,
		saveEditSuccess: false,
		deleteSuccess: false,
		message: '',
		dataForm
	}
}

export function saveEditSuccessDeptForm(data){
	return{
		type: ACT.DEPT_SAVE_EDIT_SUCCESS_FORM,
		isDialogOpen: false,
		isSaving: false,
		hasError: false,
		message:'',
		saveError: false,
		saveSuccess: false,
		saveEditSuccess: true,
		deleteSuccess: false,
		editMode: false,
		data
	}
}

export function loadDeleteDialog(id, deletemsg){
	return{
		type: ACT.DEPT_LOAD_DELETE_DIALOG,
		isDeleteDialogOpen: true,
		isDeleting: false,
		deleteHasError: false,
		deleteErrorMsg:'',
		deleteSuccess: false,
		deleteId: id,
		saveSuccess: false,
		saveEditSuccess: false,
		deletemsg
	}
}
export function deleteAttempt(){
	return{
		type: ACT.DEPT_DELETE_ATTEMPT,
		isDeleting: true,
		deleteHasError: false,
		deleteSuccess: false,
		deleteErrorMsg:''
		
	}
}
export function deleteFailed(message){
	return{
		type: ACT.DEPT_DELETE_FAILED,
		isDeleting: false,
		deleteHasError: true,	
		deleteSuccess: false,
		message
	}
}

export function cancelDelete(){
	return{
		type: ACT.DEPT_CANCEL_DELETE,
		isDeleteDialogOpen: false,
		isDeleting: false,
		deleteHasError: false,
		deleteSuccess: false,
		deleteErrorMsg:'',
		deleteId: 0
	}
}

export function deleteSuccess(id){
	return{
		type: ACT.DEPT_DELETE_SUCCESS,
		isDeleteDialogOpen: false,
		isDeleting: false,
		deleteHasError: false,
		deleteSuccess: true,
		deleteErrorMsg:'',
		deleteSuccess: true,
		saveEditSuccess: false,
		saveSuccess: false,
		deleteId: id
	}
}

export function deleteDepartment(id){
	return dispatch=>{
		dispatch(deleteAttempt())		
		fetch('http://52.77.70.200:8081/department/delete/'+id)
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


