import * as ACT from './actionTypes'

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
	saveEditSuccess: false,
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
		case ACT.DEPT_LOAD_LIST:					
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message,
				saveSuccess: action.saveSuccess,
				hasError: false,
				isDialogOpen: false,
				editMode: false,
				isSaving: false,		
				title: '',
				saveError: false,	
				saveEditSuccess: false,
				isDeleteDialogOpen: false,
				isDeleting: false,
				deleteHasError: false,
				deleteErrorMsg:'',
				deletemsg:'',
				deleteSuccess: false,
				deleteId:0

			})
		case ACT.DEPT_LOAD_LIST_SUCCESS:
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message,
				data: action.data
			})
		case ACT.DEPT_LOAD_LIST_FAILED:
			return Object.assign({}, state,{								
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				message: action.message,
				hasError: action.hasError
			})
		case ACT.DEPT_LOAD_ADD_FORM:		
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				editMode: action.editMode,
				title: action.title,		
				isSaving: action.isSaving,
				hasError: action.hasError,		
				dataForm: action.dataForm,
				saveError: action.saveError,
				saveSuccess: action.saveSuccess,
				message: action.message,
				deleteSuccess: action.deleteSuccess,
				saveEditSuccess: action.saveEditSuccess
			})
		case ACT.DEPT_SAVE_FORM:
			return Object.assign({}, state,{												
				isSaving: action.isSaving,
				saveError: action.saveError,
				saveSuccess: action.saveSuccess
			})
		case ACT.DEPT_SAVE_FAILED_FORM:
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message,
				saveError: action.saveError,
				saveSuccess: action.saveSuccess
			})
		case ACT.DEPT_SAVE_SUCCESS_FORM:			
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				isSaving: action.isSaving,								
				saveError: action.saveError,
				dataForm: dataForm_initvalue,
				saveSuccess: action.saveSuccess,
				data: [ ...state.data, action.data],		
				saveEditSuccess: action.saveEditSuccess
			})
		case ACT.DEPT_CANCEL_FORM:
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				editMode: action.editMode,				
				isSaving: action.isSaving,
				hasError: action.hasError,		
				dataForm: action.dataForm				
			})
		case ACT.DEPT_LOAD_EDIT_FORM:
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				editMode: action.editMode,
				title: action.title,		
				isSaving: action.isSaving,
				hasError: action.hasError,	
				saveError: action.saveError,	
				saveSuccess: action.saveSuccess,
				saveEditSuccess: action.saveEditSuccess,
				deleteSuccess: action.deleteSuccess,
				message: action.message,
				dataForm: action.dataForm			
			})		
		case ACT.DEPT_FORM_VALUE_CHANGED:
			return Object.assign({}, state,{	
				hasError: action.hasError,	
				message: action.message,			
				saveError: action.saveError,								
				dataForm: fieldvalues(state.dataForm, action.value)
			})
		case ACT.DEPT_SAVE_EDIT_SUCCESS_FORM:			
			return Object.assign({}, state,{								
				isDialogOpen: action.isDialogOpen,
				isSaving: action.isSaving,								
				saveError: action.saveError,
				dataForm: dataForm_initvalue,
				saveSuccess: action.saveSuccess,
				data: updateData(state.data, action.data),
				saveEditSuccess: action.saveEditSuccess,
				deleteSuccess: action.deleteSuccess
			})
		case ACT.DEPT_LOAD_DELETE_DIALOG:			
			return Object.assign({}, state,{								
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteSuccess: action.deleteSuccess,
				deletemsg: action.deletemsg,
				deleteId: action.deleteId,
				saveSuccess: action.saveSuccess,
				saveEditSuccess: action.saveEditSuccess
			})
		case ACT.DEPT_DELETE_ATTEMPT:			
			return Object.assign({}, state,{												
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.deleteErrorMsg
			})
		case ACT.DEPT_DELETE_FAILED:			
			return Object.assign({}, state,{												
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.message
			})		
		case ACT.DEPT_CANCEL_DELETE:			
			return Object.assign({}, state,{	
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteId: action.deleteId
			})
		case ACT.DEPT_DELETE_SUCCESS:			
			return Object.assign({}, state,{	
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteId: action.deleteId,
				saveSuccess: action.saveSuccess,
				data: deleteData(state.data, action.deleteId),
				saveSuccess: action.saveSuccess,
				saveEditSuccess: action.saveEditSuccess,
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


