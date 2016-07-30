import { LOAD_ADD_FORM, SAVE_FORM, SAVE_FAILED_FORM, SAVE_SUCCESS_FORM } from '../actions'
import { LOAD_EDIT_FORM, LOAD_EDIT_SUCCESS_DATA, LOAD_EDIT_FAILED_DATA, FORM_VALUE_CHANGED } from '../actions'
import { LOAD_DELETE_DIALOG, DELETE_ATTEMPT,DELETE_FAILED} from '../actions'

const initialstate = {
	editMode: false,
	isSaving: false,
	hasError: false,
	message: '',
	data: {
		"id": '',
		"batchname":'',
		"yearfrom":'',
		"yearto":''
	}
}

const fieldvalues=(data, field, value)=>{
	var newdata = Object.assign({}, data)
	switch(field){
		case "batchname":
			newdata.batchname = value
			break
		case "yearfrom":
			newdata.yearfrom = value
			break
		case "yearto":
			newdata.yearto = value
		default:
			break
	}
	return newdata

}

const batchFormreducer = (state = initialstate , action)=>{
	//console.log(state)
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

		
		case LOAD_DELETE_DIALOG:
			return Object.assign({}, state,{
				isDeleting: false,
				hasError: false,
				message: ''				
			})
		case DELETE_ATTEMPT:
			return Object.assign({}, state,{
				isDeleting: action.isDeleting,
				hasError: action.hasError,
				message: action.message				
			})
		case DELETE_FAILED:
			return Object.assign({}, state,{
				isDeleting: action.isDeleting,
				hasError: action.hasError,
				message: action.message		
			})
		default:
			return state
	}

}

export default batchFormreducer

