import * as ACT from './actionTypes'

const initialstate = {
	isFetching: false,
	isFetchFailed: false,
	hasError: false,
	message:'',
	data:[],
	isDeleteDialogOpen: false,
	isDeleting: false,
	deleteHasError: false,
	deleteErrorMsg:'',
	deletemsg:'',
	deleteId:0,
	deleteSuccess: false,
}

const deleteData=(data, id)=>{	
	var newdata = Object.assign([], data)		
	var index = newdata.findIndex((d)=>d.id==id)
	newdata.splice(index,1)
	return newdata
}


export const jobTitleReducer = (state= initialstate, action)=>{
	switch(action.type){
		case ACT.JOB_LOAD_LIST:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				hasError: action.hasError,
				message: action.message,
				isDeleteDialogOpen: false,
				isDeleting: false,
				deleteHasError: false,
				deleteErrorMsg:'',
				deletemsg:'',
				deleteId:0,
				deleteSuccess: false
			})
		case ACT.JOB_LOAD_LIST_SUCCESS:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				hasError: action.hasError,
				message: action.message,
				data: action.data
			})
		case ACT.JOB_LOAD_LIST_FAILED:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				hasError: action.hasError,
				message: action.message
			})
		case ACT.JOB_LOAD_DELETE_DIALOG:
			return Object.assign({}, state,{
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteSuccess: false,
				deleteId: action.id,
				deletemsg: action.msg
			})
		case ACT.JOB_CANCEL_DELETE:
			return Object.assign({}, state,{
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteSuccess: false,
				deleteId: action.deleteId
			})
		case ACT.JOB_DELETE_ATTEMPT:
			return Object.assign({}, state,{
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.deleteErrorMsg			
			})
		case ACT.JOB_DELETE_FAILED:
			return Object.assign({}, state,{				
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.message			
			})
		case ACT.JOB_DELETE_SUCCESS:
			return Object.assign({}, state,{				
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess,
				deleteErrorMsg: action.deleteErrorMsg,
				deleteSuccess: action.deleteSuccess,
				updateSuccess: action.updateSuccess,
				saveAddSuccess: action.saveAddSuccess,
				data: deleteData(state.data, action.deleteId),
				deleteId: 0
			})		
		default:
			return state

	}
}

const dataForm_initvalue = { "id": '', "title":'', "jobdesc": '',"duties": ''}

const form_initialstate = {
	editMode: false,
	title: '',
	isFetching: false,
	isSaving: false,
	hasError: false,
	message: '',
	saveAddSuccess: false,
	updateSuccess: false,
	data: dataForm_initvalue
}

const fieldvalues=(data, field, value)=>{
	var newdata = Object.assign({}, data)
	switch(field){
		case "title": newdata.title = value
			break
		case "jobdesc": newdata.jobdesc = value
			break
		case "duties": newdata.duties = value
			break	
		default:
			break
	}
	return newdata

}


export const jobFormReducer = (state = form_initialstate, action)=>{
	switch(action.type){
		case ACT.JOB_LOAD_ADD_FORM:
			return Object.assign({}, state, {
				editMode: action.editMode,
				title: action.title,
				isFetching: action.isFetching,
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message,				
				saveAddSuccess: action.saveAddSuccess,
				updateSuccess: false,
				data: action.data				
			})
		case ACT.JOB_LOAD_FORM_SUCCESS:
			return Object.assign({}, state, {		
				isFetching: action.isFetching,
				data: action.data				
			})
		case ACT.JOB_LOAD_FORM_FAILED:
			return Object.assign({}, state, {		
				isFetching: action.isFetching,
				hasError: action.hasError,
				message: action.message
			})
		case ACT.JOB_FORM_VALUE_CHANGED:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message,
				data : fieldvalues(action.data, action.field, action.value)
			})	
		case ACT.JOB_SAVE_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,				
				saveAddSuccess: action.saveAddSuccess
			})
		case ACT.JOB_SAVE_FAILED_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message				
			})
		case ACT.JOB_SAVE_SUCCESS_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				data: action.data,
				saveAddSuccess: action.saveAddSuccess
			})
		case ACT.JOB_LOAD_EDIT_FORM:
			return Object.assign({}, state, {
				editMode: action.editMode,
				title: action.title,
				isFetching: action.isFetching,
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message,				
				updateSuccess: action.updateSuccess,
				saveAddSuccess: false
			})
		case ACT.JOB_UPDATE_SUCCESS_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				data: action.data,
				updateSuccess: action.updateSuccess,
				saveAddSuccess: action.saveAddSuccess
			})
		default:
			return state

	}

}

