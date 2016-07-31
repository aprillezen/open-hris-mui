
export const LOGIN_ATTEMPT="LOGIN_ATTEMPT"
export const LOGIN_SUCCESS="LOGIN_SUCCESS"
export const LOGIN_FAILED="LOGIN_FAILED"

export const LOAD_LIST="LOAD_LIST"
export const LOAD_LIST_FAILED="LOAD_LIST_FAILED"
export const LOAD_LIST_SUCCESS="LOAD_LIST_SUCCESS"

export const LOAD_FILTER="LOAD_FILTER"
export const LOAD_FILTER_FAILED="LOAD_FILTER_FAILED"
export const LOAD_FILTER_SUCCESS="LOAD_FILTER_SUCCESS"
export const FILTER_VALUE_CHANGED="FILTER_VALUE_CHANGED"


export const LOAD_ADD_FORM="LOAD_ADD_FORM"
export const SAVE_FORM="SAVE_FORM"
export const SAVE_FAILED_FORM="SAVE_FAILED_FORM"
export const SAVE_SUCCESS_FORM="SAVE_SUCCESS_FORM"
export const LOAD_EDIT_FORM="LOAD_EDIT_FORM"
export const LOAD_EDIT_SUCCESS_DATA="LOAD_EDIT_SUCCESS_DATA"
export const LOAD_EDIT_FAILED_DATA="LOAD_EDIT_FAILED_DATA"
export const FORM_VALUE_CHANGED="FORM_VALUE_CHANGED"
export const LOAD_DELETE_DIALOG="LOAD_DELETE_DIALOG"
export const DELETE_ATTEMPT="DELETE_ATTEMPT"
export const DELETE_FAILED="DELETE_FAILED"

//************************************************
//  Actions for page loads
//************************************************
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

export function loadFilter(){
	return{
		type: LOAD_FILTER,
		isFetching: true,
		isFailed: false
	}
}

export function loadFilterSuccess(data){
	return{
		type: LOAD_FILTER_SUCCESS,
		isFetching:false,
		isFailed: false,
		data
	}
}

export function loadFilterFailed(message){
	return{
		type: LOAD_FILTER_FAILED,
		isFetching: false,
		isFailed: true,
		message
	}
}
export function filterValueChanged(id){
	return{
		type: FILTER_VALUE_CHANGED,
		id
	}
}
//************************************************
//  Actions for forms
//************************************************

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


export function loadDeleteDialog(){
	return{
		type: LOAD_DELETE_DIALOG,
		isDeleting: false,
		hasError: false,
		message:''
		
	}
}

export function deleteAttempt(){
	return{
		type: DELETE_ATTEMPT,
		isDeleting: true,
		hasError: false,
		message:''
		
	}
}

export function deleteFailed(message){
	return{
		type: DELETE_FAILED,
		isDeleting: false,
		hasError: true,
		message
	}
}


//https://www.youtube.com/watch?v=DVEsNYS1Cgo