import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILED} from './actionTypes'
import { LOAD_ADD_FORM, SAVE_FORM, SAVE_FAILED_FORM, SAVE_SUCCESS_FORM, CANCEL_FORM} from './actionTypes'
import { LOAD_EDIT_FORM, LOAD_EDIT_SUCCESS_DATA, LOAD_EDIT_FAILED_DATA, FORM_VALUE_CHANGED } from './actionTypes'

const initialstate = {
	isFetching: false,
	isFetchFailed: false,
	message:'',
	data:[],
	isDialogOpen: false,
	editMode: false,
	isSaving: false,
	hasError: false,	
	title: false,
	dataForm: { "id": '', "description":''}
}

const departmentlistreducer = (state = initialstate, action)=>{			
	switch(action.type){
		case LOAD_LIST:					
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message

			})
		case LOAD_LIST_SUCCESS:
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message,
				data: action.data
			})
		case LOAD_LIST_FAILED:
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message,
				hasError: action.hasError
			})
		case LOAD_ADD_FORM:		
			return Object.assign({}, state)
		case SAVE_FORM:
			return Object.assign({}, state)
		case SAVE_FAILED_FORM:
			return Object.assign({}, state)
		case SAVE_SUCCESS_FORM:
			return Object.assign({}, state)
		case CANCEL_FORM:
			return Object.assign({}, state)
		case LOAD_EDIT_FORM:
			return Object.assign({}, state)
		case LOAD_EDIT_SUCCESS_DATA:
			return Object.assign({}, state)
		case LOAD_EDIT_FAILED_DATA:
			return Object.assign({}, state)
		case FORM_VALUE_CHANGED:
			return Object.assign({}, state)
		default:
			return state

	}
}

const fieldvalues=(data, value)=>{
	var newdata = Object.assign({}, data)
	newdata.description = value
	return newdata

}

export default departmentlistreducer
