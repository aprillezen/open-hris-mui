import { DEPT_LOAD_LIST, DEPT_LOAD_LIST_SUCCESS, DEPT_LOAD_LIST_FAILED} from './actionTypes'
import { DEPT_LOAD_ADD_FORM, DEPT_SAVE_FORM, DEPT_SAVE_FAILED_FORM, DEPT_SAVE_SUCCESS_FORM, DEPT_CANCEL_FORM} from './actionTypes'
import { DEPT_LOAD_EDIT_FORM, DEPT_LOAD_EDIT_SUCCESS_DATA, DEPT_LOAD_EDIT_FAILED_DATA, DEPT_FORM_VALUE_CHANGED } from './actionTypes'

const dataForm_initvalue = { "id": '', "description":''}
const initialstate = {
	isFetching: false,
	isFetchFailed: false,
	hasError: false,
	message:'',
	data:[],
	isDialogOpen: false,
	editMode: false,
	isSaving: false,		
	title: false,
	saveError: false,
	saveSuccess: false,
	dataForm: dataForm_initvalue
}

const departmentlistreducer = (state = initialstate, action)=>{			
	switch(action.type){
		case DEPT_LOAD_LIST:					
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message,
				saveSuccess: action.saveSuccess

			})
		case DEPT_LOAD_LIST_SUCCESS:
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message,
				data: action.data
			})
		case DEPT_LOAD_LIST_FAILED:
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message,
				hasError: action.hasError
			})
		case DEPT_LOAD_ADD_FORM:		
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				editMode: action.editMode,
				title: action.title,		
				isSaving: action.isSaving,
				hasError: action.hasError,		
				dataForm: action.dataForm,
				saveError: action.saveError,
				saveSuccess: action.saveSuccess	
			})
		case DEPT_SAVE_FORM:
			return Object.assign({}, state,{												
				isSaving: action.isSaving,
				saveError: action.saveError,
				saveSuccess: action.saveSuccess
			})
		case DEPT_SAVE_FAILED_FORM:
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message,
				saveError: action.saveError,
				saveSuccess: action.saveSuccess
			})
		case DEPT_SAVE_SUCCESS_FORM:			
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				isSaving: action.isSaving,								
				saveError: action.saveError,
				dataForm: dataForm_initvalue,
				saveSuccess: action.saveSuccess,
				data: [ ...state.data, action.data]
			})
		case DEPT_CANCEL_FORM:
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				editMode: action.editMode,				
				isSaving: action.isSaving,
				hasError: action.hasError,		
				dataForm: action.dataForm				
			})
		case DEPT_LOAD_EDIT_FORM:
			return Object.assign({}, state)
		case DEPT_LOAD_EDIT_SUCCESS_DATA:
			return Object.assign({}, state)
		case DEPT_LOAD_EDIT_FAILED_DATA:
			return Object.assign({}, state)
		case DEPT_FORM_VALUE_CHANGED:
			return Object.assign({}, state,{	
				hasError: action.hasError,	
				message: action.message,			
				saveError: action.saveError,								
				dataForm: fieldvalues(state.dataForm, action.value)
			})
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


