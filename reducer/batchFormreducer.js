import { ADD_BATCH_FORM, SAVE_BATCH_FORM, SAVE_FAILED_BATCH_FORM } from '../actions/BatchActions'
import { SAVE_SUCCESS_BATCH_FORM, EDIT_SUCCESS_LOAD_BATCH, EDIT_FAILED_LOAD_BATCH, FORM_VALUE_CHANGED} from '../actions/BatchActions'
import { DELETE_ATTEMPT_BATCH, DELETE_FAILED_BATCH,INIT_DELETE_BATCH} from '../actions/BatchActions'

const initialstate = {
	isSaving: false,
	hasError: false,
	message: '',
	batch: {
		"id": '',
		"batchname":'',
		"yearfrom":'',
		"yearto":''
	}
}

const fieldvalues=(batch, field, value)=>{
	var newbatch = Object.assign({}, batch)
	switch(field){
		case "batchname":
			newbatch.batchname = value
			break
		case "yearfrom":
			newbatch.yearfrom = value
			break
		case "yearto":
			newbatch.yearto = value
		default:
			break
	}
	//console.log(newbatch)
	return newbatch

}

const batchFormreducer = (state = initialstate , action)=>{
	//console.log(state)
	switch(action.type){
		case ADD_BATCH_FORM:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message,
				batch: action.batch				
			})

		case EDIT_SUCCESS_LOAD_BATCH:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				isFetching: action.isFetching,
				batch   : action.batch
			})

		case EDIT_SUCCESS_LOAD_BATCH:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				isFetching: action.isFetching,
				batch   : action.batch
			})

		case FORM_VALUE_CHANGED:
			return Object.assign({}, state,{
				batch : fieldvalues(action.batch, action.field, action.value)
			})

		case SAVE_BATCH_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				batch: action.batch
			})
		case SAVE_FAILED_BATCH_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message
			})
		case SAVE_SUCCESS_BATCH_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				batch: action.batch
			})
		case INIT_DELETE_BATCH:
			return Object.assign({}, state,{
				isDeleting: false,
				hasError: false,
				message: ''				
			})
		case DELETE_ATTEMPT_BATCH:
			return Object.assign({}, state,{
				isDeleting: action.isDeleting,
				hasError: action.hasError,
				message: action.message				
			})
		case DELETE_FAILED_BATCH:
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

