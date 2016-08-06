import { DEPT_LOAD_LIST, DEPT_LOAD_LIST_SUCCESS, DEPT_LOAD_LIST_FAILED} from './actionTypes'
import { DEPT_LOAD_ADD_FORM, DEPT_SAVE_FORM, DEPT_SAVE_FAILED_FORM, DEPT_SAVE_SUCCESS_FORM, DEPT_CANCEL_FORM } from './actionTypes'
import { DEPT_LOAD_EDIT_FORM, DEPT_LOAD_EDIT_SUCCESS_DATA, DEPT_LOAD_EDIT_FAILED_DATA, DEPT_FORM_VALUE_CHANGED } from './actionTypes'

export function loadList(){	
	return{
		type: DEPT_LOAD_LIST,
		isFetching: true,
		isFetchFailed: false,		
		message: '',
		hasError: false,
		saveSuccess: false
	}
}

export function loadListSuccess(data){
	return{
		type: DEPT_LOAD_LIST_SUCCESS,
		isFetching:false,
		isFetchFailed: false,	
		message: '',
		hasError: false,		
		data
	}
}

export function loadListFailed(message){
	return{
		type: DEPT_LOAD_LIST_FAILED,
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


export function loadAddDeptForm(dataForm, title){	
	return{
		type: DEPT_LOAD_ADD_FORM,
		isDialogOpen: true,
		editMode: false,
		title: title,		
		isSaving: false,
		hasError: false,	
		saveError: false,	
		saveSuccess: false,
		dataForm
	}
}

export function saveDeptForm(){
	return{
		type: DEPT_SAVE_FORM,
		isSaving: true,
		saveError: false,
		saveSuccess: false
	}
}

export function saveDepartment(data){
	
	return dispatch=>{
		dispatch(saveDeptForm())
		return setTimeout(()=>{
			dispatch(saveSuccessDeptForm(data))	
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

export function saveSuccessDeptForm(data){
	return{
		type: DEPT_SAVE_SUCCESS_FORM,
		isDialogOpen: false,
		isSaving: false,
		hasError: false,
		message:'',
		saveError: false,
		saveSuccess: true,
		data
	}
}

export function saveFailedForm(message){
	return{
		type: DEPT_SAVE_FAILED_FORM,
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
		type: DEPT_FORM_VALUE_CHANGED,	
		hasError: false,	
		message: '',
		value
	}
}

export function cancelForm(data){
	return{
		type: DEPT_CANCEL_FORM,
		isDialogOpen: false,
		editMode: false,	
		isSaving: false,
		hasError: false,
		dataForm: data,
		saveError: false
	}
}


export function loadEditForm(title){
	return{
		type: DEPT_LOAD_EDIT_FORM,
		isDialogOpen: true,
		editMode: true,
		title: title,
		isFetching: true,
		isSaving: false,
		hasError: false,
		message: '',
	}
}

export function loadEditSuccessForm(){
	return{
		type: DEPT_SAVE_SUCCESS_FORM,
		isDialogOpen: false,
		isSaving: false,
		isFetching: false,
		hasError: false,
		saveError: false
	}
}

export function loadEditFailedForm(message){
	return{
		type: DEPT_LOAD_EDIT_FAILED_DATA,
		isDialogOpen: false,
		isSaving: false,
		isFetching: false,
		hasError: true,
		message
	}
}