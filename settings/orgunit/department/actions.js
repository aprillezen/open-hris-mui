import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILED} from './actionTypes'
import { LOAD_ADD_FORM, SAVE_FORM, SAVE_FAILED_FORM, SAVE_SUCCESS_FORM, CANCEL_FORM } from './actionTypes'
import { LOAD_EDIT_FORM, LOAD_EDIT_SUCCESS_DATA, LOAD_EDIT_FAILED_DATA, FORM_VALUE_CHANGED } from './actionTypes'

export function loadList(){	
	return{
		type: LOAD_LIST,
		isFetching: true,
		isFetchFailed: false,		
		message: '',
		hasError: false
	}
}

export function loadListSuccess(data){
	return{
		type: LOAD_LIST_SUCCESS,
		isFetching:false,
		isFetchFailed: false,	
		message: '',
		hasError: false,
		data
	}
}

export function loadListFailed(message){
	return{
		type: LOAD_LIST_FAILED,
		isFetching: false,
		isFetchFailed: true,
		hasError: false,
		message
	}
}


export function fetchDepartment(){
	let fakedata =  [
				  {
				    "id": 1,
				    "description": "Information Technology"
				  },
				  {
				    "id": 2,
				    "description": "Accounting"
				  },{
				    "id": 3,
				    "description": "Sales"
				  },
				  {
				    "id": 4,
				    "description": "Marketing"
				  }
		]
	return dispatch=>{
		dispatch(loadList())
		return setTimeout(()=>{
			dispatch(loadListSuccess(fakedata))	
			//dispatch(loadListFailed("test error"))
		}, 1000)
		// fetch('http://52.77.70.200:8081/batch')
		// .then(response=>response.json()
		// 	.then(ret=>({ ret, response }))
		//  ).then(({ ret, response })=>{
		//  	if (parseInt(ret.status)==1){
		// 		dispatch(loadListSuccess(ret.data))	
		//  	}else{
		//  		dispatch(loadListFailed(data.message))
		//  	}
		 	
		//  })
		// .catch(error => { 
		// 	dispatch(loadListFailed('Database error'))			
		// })
	}
}


export function loadAddForm(dataForm, title){	
	return{
		type: LOAD_ADD_FORM,
		isDialogOpen: true,
		editMode: false,
		title: title,		
		isSaving: false,
		hasError: false,		
		dataForm
	}
}

export function saveForm(){
	return{
		type: SAVE_FORM,
		isSaving: true,
		hasError: false		
	}
}

export function saveDepartment(dataForm){
	
	return dispatch=>{
		dispatch(saveForm())
		return setTimeout(()=>{
			dispatch(saveSuccessForm())	
			//dispatch(loadListFailed(data.message))
		}, 3000)
		// fetch('http://52.77.70.200:8081/batch')
		// .then(response=>response.json()
		// 	.then(ret=>({ ret, response }))
		//  ).then(({ ret, response })=>{
		//  	if (parseInt(ret.status)==1){
		// 		dispatch(loadListSuccess(ret.data))	
		//  	}else{
		//  		dispatch(loadListFailed(data.message))
		//  	}
		 	
		//  })
		// .catch(error => { 
		// 	dispatch(loadListFailed('Database error'))			
		// })
	}
}

export function saveSuccessForm(){
	return{
		type: SAVE_SUCCESS_FORM,
		isDialogOpen: false,
		isSaving: false,
		hasError: false,
		message:''
	}
}

export function saveFailedForm(message){
	return{
		type: SAVE_FAILED_FORM,
		isDialogOpen: true,
		isSaving: false,
		hasError: true,
		message
	}
}

export function valueChangeForm(value){
	return{
		type: FORM_VALUE_CHANGED,	
		hasError: false,	
		message: '',
		value
	}
}

export function cancelForm(){
	return{
		type: CANCEL_FORM,
		isDialogOpen: false		
	}
}


export function loadEditForm(title){
	return{
		type: LOAD_EDIT_FORM,
		isDialogOpen: true,
		editMode: true,
		title: title,
		isFetching: true,
		isSaving: false,
		hasError: false,
		message: '',
	}
}

export function loadEditSuccessForm(dataForm){
	return{
		type: LOAD_EDIT_SUCCESS,
		isDialogOpen: false,
		isSaving: false,
		isFetching: false,
		hasError: false,
		departdataFormment
	}
}

export function loadEditFailedForm(message){
	return{
		type: LOAD_EDIT_FAILED_DATA,
		isDialogOpen: false,
		isSaving: false,
		isFetching: false,
		hasError: true,
		message
	}
}