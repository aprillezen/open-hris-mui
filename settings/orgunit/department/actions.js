import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILED} from './actionTypes'
import { LOAD_EDIT_FORM, LOAD_EDIT_SUCCESS_DATA, LOAD_EDIT_FAILED_DATA, FORM_VALUE_CHANGED } from './actionTypes'

export function loadList(){
	return{
		type: LOAD_LIST,
		isFetching: true,
		isFailed: false
	}
}

export function loadListSuccess(data){
	return{
		type: LOAD_LIST_SUCCESS,
		isFetching:false,
		isFailed: false,
		data
	}
}

export function loadListFailed(message){
	return{
		type: LOAD_LIST_FAILED,
		isFetching: false,
		isFailed: true,
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
			//dispatch(loadListFailed(data.message))
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


export function loadAddForm(data, title){
	return{
		type: LOAD_ADD_FORM,
		editMode: false,
		title: title,
		isFetching: false,
		isSaving: false,
		hasError: false,
		message: '',
		data
	}
}

export function saveForm(data){
	return{
		type: SAVE_FORM,
		isSaving: true,
		hasError: false,
		data
	}
}

export function saveSuccessForm(data){
	return{
		type: SAVE_SUCCESS_FORM,
		isSaving: false,
		hasError: false,
		data
	}
}

export function saveFailedForm(message){
	return{
		type: SAVE_FAILED_FORM,
		isSaving: false,
		hasError: true,
		message
	}
}

export function valueChangeForm(data, field, value){
	return{
		type: FORM_VALUE_CHANGED,
		data,
		field,
		value
	}
}

export function loadEditForm(title){
	return{
		type: LOAD_EDIT_FORM,
		editMode: true,
		title: title,
		isFetching: true,
		isSaving: false,
		hasError: false,
		message: '',
	}
}

export function loadEditSuccessForm(data){
	return{
		type: LOAD_EDIT_SUCCESS_DATA,
		isSaving: false,
		isFetching: false,
		hasError: false,
		data
	}
}

export function loadEditFailedForm(message){
	return{
		type: LOAD_EDIT_FAILED_DATA,
		isSaving: false,
		isFetching: false,
		hasError: true,
		message
	}
}