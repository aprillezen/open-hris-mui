import { DEPT_LOAD_LIST, DEPT_LOAD_LIST_SUCCESS, DEPT_LOAD_LIST_FAILED} from './actionTypes'
import { DEPT_LOAD_ADD_FORM, DEPT_SAVE_FORM, DEPT_SAVE_FAILED_FORM, DEPT_SAVE_SUCCESS_FORM, DEPT_CANCEL_FORM} from './actionTypes'
import { DEPT_LOAD_EDIT_FORM, DEPT_SAVE_EDIT_SUCCESS_FORM, DEPT_FORM_VALUE_CHANGED } from './actionTypes'
import { DEPT_LOAD_DELETE_DIALOG, DEPT_DELETE_ATTEMPT,DEPT_DELETE_FAILED, DEPT_CANCEL_DELETE, DEPT_DELETE_SUCCESS} from './actionTypes'


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
	title: '',
	saveError: false,
	saveSuccess: false,
	isDeleteDialogOpen: false,
	isDeleting: false,
	deleteHasError: false,
	deleteErrorMsg:'',
	deletemsg:'',
	deleteSuccess: false,
	deleteId:0,
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
				message: action.message,
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
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				editMode: action.editMode,
				title: action.title,		
				isSaving: action.isSaving,
				hasError: action.hasError,	
				saveError: action.saveError,	
				saveSuccess: action.saveSuccess,
				message: action.message,
				dataForm: action.dataForm			
			})		
		case DEPT_FORM_VALUE_CHANGED:
			return Object.assign({}, state,{	
				hasError: action.hasError,	
				message: action.message,			
				saveError: action.saveError,								
				dataForm: fieldvalues(state.dataForm, action.value)
			})
		case DEPT_SAVE_EDIT_SUCCESS_FORM:			
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				isSaving: action.isSaving,								
				saveError: action.saveError,
				dataForm: dataForm_initvalue,
				saveSuccess: action.saveSuccess,
				data: updateData(state.data, action.data)
			})
		case DEPT_LOAD_DELETE_DIALOG:			
			return Object.assign({}, state,{								
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteSuccess: action.deleteSuccess,
				deletemsg: action.deletemsg,
				deleteId: action.deleteId
			})
		case DEPT_DELETE_ATTEMPT:			
			return Object.assign({}, state,{												
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.deleteErrorMsg
			})
		case DEPT_DELETE_FAILED:			
			return Object.assign({}, state,{												
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.message
			})		
		case DEPT_CANCEL_DELETE:			
			return Object.assign({}, state,{	
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteId: action.deleteId
			})
		case DEPT_DELETE_SUCCESS:			
			return Object.assign({}, state,{	
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteId: action.deleteId,
				data: deleteData(state.data, action.deleteId)
			})
		default:
			return state

	}
}

const deleteData=(data, id)=>{	
	var newdata = Object.assign([], data)		
	var index = newdata.findIndex((d)=>d.id==id)
	newdata.splice(index,1)
	return newdata
}

const updateData=(data, formData)=>{	
	var newdata = Object.assign([], data)		
	newdata.map(item=>{
		if (item.id==formData.id){
			item.description = formData.description
		}
	})
	return newdata
}

const fieldvalues=(data, value)=>{
	var newdata = Object.assign({}, data)
	newdata.description = value
	return newdata

}

export default departmentlistreducer


