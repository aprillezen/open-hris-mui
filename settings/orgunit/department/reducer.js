import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILED} from './actionTypes'

const initialstate = {
	isFetching: false,
	isFailed: false,
	message: '',
	data: [],	
}

export const departmentlistreducer = (state = initialstate, action)=>{
	switch(action.type){
		case LOAD_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed:action.isFailed,
				message: ''
			})
		case LOAD_LIST_SUCCESS:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,
				data: action.data,
				message: ''
			})
		case LOAD_LIST_FAILED:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,			
				message: action.message
			})
		default:
			return state

	}
}

const formInitialstate = {
	editMode: false,
	isSaving: false,
	hasError: false,
	message: '',
	data: {
		"id": '',
		"description":''
	}
}

const fieldvalues=(data, field, value)=>{
	var newdata = Object.assign({}, data)
	newdata.description = value
	return newdata

}


export const departmentFormreducer = (state = formInitialstate, action)=>{
	switch(action.type){
		case LOAD_ADD_FORM:
			return Object.assign({}, state,{
				editMode: action.editMode,
				title : action.title,
				isFetching: action.isFetching,
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message,
				data: action.data				
			})
		case SAVE_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				data: action.data
			})
		case SAVE_FAILED_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message
			})
		case SAVE_SUCCESS_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				data: action.data
			})

		case LOAD_EDIT_FORM:
			return Object.assign({}, state,{
				editMode: action.editMode,
				title : action.title,
				isFetching: action.isFetching,
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message	
			})

		case LOAD_EDIT_SUCCESS_DATA:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				isFetching: action.isFetching,
				data   : action.data
			})

		case LOAD_EDIT_FAILED_DATA:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				isFetching: action.isFetching,
				data   : action.data
			})

		case FORM_VALUE_CHANGED:
			return Object.assign({}, state,{
				data : fieldvalues(action.data, action.field, action.value)
			})
		
		default:
			return state
	}
}


