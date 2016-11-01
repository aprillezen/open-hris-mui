import * as ACT from './actionTypes'
import _ from 'lodash'
import moment from 'moment'

// ********************************************************************************
// EMPLOYEE LISTS
// ********************************************************************************
const initialState = {
	isFetching: true,
	isFetchFailed: false,
	hasError: false,
	errorMessage: '',
	data: [],
	isDeleteDialogOpen: false,
	isDeleting: false,
	deleteHasError: false,			
	deleteSuccess: false,
	editDisabled: true,
	deleteDisabled: true,
}

const deleteData=(data, id)=>{	
	var newdata = Object.assign([], data)		
	var index = newdata.findIndex((d)=>d.id==id)
	newdata.splice(index,1)
	return newdata
}

const checkedData = (data, id, value)=>{
	var newdata = Object.assign([], data)
	var b = value==true?1:0	
	newdata[id].selected= b
	return newdata
}

const checkedUcheckedAll=(data, value)=>{
	var newdata = data.map((obj)=>{			
		obj.selected = value==true?1:0	 
		return obj
	})	
	return newdata
}

const editIsEnable= (data)=>{
	var newdata = data.filter((obj)=>{							
		if (obj.selected == true){			
			return obj
		}
	})			
	return newdata.length==1?false:true
}

const deleteIsEnable= (data)=>{
	var newdata = data.filter((obj)=>{							
		if (obj.selected == true){			
			return obj
		}
	})			
	return newdata.length>=1?false:true
}

export const emp_list_reducer = (state = initialState, action)=>{
	switch(action.type){
		case ACT.EMP_LOAD_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				errorMessage: '',				
				hasError: false,
				isDeleteDialogOpen: false,
				isDeleting: false,
				deleteHasError: false,												
				deleteSuccess: false
			})
		case ACT.EMP_LOAD_SUCCESS_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				errorMessage: '',				
				hasError: false,
				data: action.data,
				editDisabled: true,
				deleteDisabled: true

			})
		case ACT.EMP_LOAD_FAILED_LIST:
			return Object.assign({}, state,{
				isFetching:false,
				isFetchFailed: action.isFetchFailed,
				errorMessage: action.message,				
				hasError: action.hasError
			})
		case ACT.EMP_LOAD_DELETE_DIALOG:
			return Object.assign({}, state,{
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,				
				deleteSuccess: false				
			})
		case ACT.EMP_CANCEL_DELETE:
			return Object.assign({}, state,{
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,				
				deleteSuccess: false				
			})
		case ACT.EMP_DELETE_ATTEMPT:
			return Object.assign({}, state,{
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess
			})
		case ACT.EMP_DELETE_FAILED:
			return Object.assign({}, state,{				
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,
				deleteSuccess: action.deleteSuccess				
			})
		case ACT.EMP_DELETE_SUCCESS:
			return Object.assign({}, state,{				
				isDeleteDialogOpen: action.isDeleteDialogOpen,
				isDeleting: action.isDeleting,
				deleteHasError: action.deleteHasError,								
				deleteSuccess: action.deleteSuccess,
				updateSuccess: action.updateSuccess,				
				data: deleteData(state.data, action.id)				
			})
		case ACT.EMP_LIST_CHECKED_CHANGED:
			return Object.assign({}, state,{					
				data: checkedData(state.data, action.id, action.value),
				editDisabled: editIsEnable(state.data),
				deleteDisabled: deleteIsEnable(state.data)
			})
		case ACT.EMP_LIST_CHECKED_UNCHECKED_ALL:
			return Object.assign({}, state,{	
				editDisabled: true,		
				deleteDisabled: action.value==true?false:true,
				data: checkedUcheckedAll(state.data, action.value)
			})
		default:
			return state

	}	
}

// ********************************************************************************
// EMPLOYEE ADD
// ********************************************************************************
const dataForm_initvalue = {
								"id":0,
								"employeeId":'',
								"fname":'',
								"lname":'',
								"mname":'',
								"birthdate": null,
								"civilstat": 0,
								"gender":'0',
								"address":'',
								"city":'',
								"province":'',
								"zipcode":'',
								"homephone":'',
								"mobilephone":'',
								"emailadd":'',
								"selected": false
							}
const employee_initialState = {								
								data: dataForm_initvalue,									
								hasError: false,
								errorMessage:'',														
								isSaving: false,																		
								saveSuccess: false								
							 }

export const emp_add_form_reducer = (state = employee_initialState, action)=>{	
	switch(action.type){
		case ACT.EMP_LOAD_FORM:
			return Object.assign({}, state,{				
				data: dataForm_initvalue,					
				hasError: false,
				errorMessage:'',														
				isSaving: false				
			})	
		case ACT.EMP_FORM_VALUE_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,				
				errorMessage: '',
				data : fieldvalues(action.data, action.field, action.value)
			})
		case ACT.EMP_FORM_CIVIL_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,				
				errorMessage: '',
				data : civilstatus(state.data, action.value)
			})
		case ACT.EMP_FORM_GENDER_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,				
				errorMessage: '',
				data : genderstatus(state.data, action.value)
			})
		case ACT.EMP_FORM_BIRTHDATE_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,				
				errorMessage: '',
				data : birthdatestatus(state.data, action.value)
			})
		case ACT.EMP_SAVE_FORM:			
			return Object.assign({}, state,{
				isSaving: action.isSaving,				
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,				
				errorMessage: ''
			})
		case ACT.EMP_SAVE_FAILED_FORM:			
			return Object.assign({}, state,{
				isSaving: action.isSaving,				
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,				
				errorMessage: action.message
			})
		case ACT.EMP_SAVE_SUCCESS_FORM:			
			return Object.assign({}, state,{
				isSaving: action.isSaving,				
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,				
				errorMessage: '',
				data: action.data
			})
		default:
			return state

	}	
}
const birthdatestatus = (dataForm, value)=>{
	return Object.assign({}, dataForm, {
		birthdate: value
	})
}
const genderstatus = (dataForm, value)=>{
	return Object.assign({}, dataForm, {
		gender: value
	})
}
const civilstatus = (dataForm, value)=>{
	return Object.assign({}, dataForm, {
		civilstat: value
	})
}
const fieldvalues=(data, field, value)=>{
	var newdata = Object.assign({}, data)
	switch(field){
		case "employeeId": newdata.employeeId = value
			break
		case "fname": newdata.fname = value
			break
		case "lname": newdata.lname = value
			break
		case "mname": newdata.mname = value
			break				
		case "address": newdata.address = value
			break
		case "city": newdata.city = value
			break
		case "province": newdata.province = value
			break
		case "zipcode": newdata.zipcode = value
			break
		case "homephone": newdata.homephone = value
			break
		case "mobilephone": newdata.mobilephone = value
			break
		case "emailadd":newdata.emailadd = value
			break
		case "civilstat":newdata.civilstat = value
			break
		default:
			break
	}
	return newdata
}


// ********************************************************************************
// EMPLOYEE GENERAL
// ********************************************************************************
const dataForm_general_initvalue = {
								"id":0,
								"employeeId":'',
								"fname":'',
								"lname":'',
								"mname":'',
								"birthdate": null,
								"civilstat": 0,
								"gender":'0',
								"address":'',
								"city":'',
								"province":'',
								"zipcode":'',
								"homephone":'',
								"mobilephone":'',
								"emailadd":''						
							}
const emp_general_initialState = {
								data: dataForm_general_initvalue,									
								isFetching: false,
								isFetchFailed: false,
								hasError: false,
								editMode: false,								
								errorMessage:'',
								isSaving: false,
								updateSuccess: false,
								updateError: false

							 }

export const emp_general_reducer = (state = emp_general_initialState, action)=>{	
	switch(action.type){
		case ACT.EMP_PROFILE_GENERAL_LOAD_VIEW:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				hasError:false,
				editMode: false,				
				isSaving: false,
				errorMessage:'',
				updateSuccess: false,
				updateError: false
			})	
		case ACT.EMP_PROFILE_GENERAL_SUCCESS_LOAD_VIEW:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				hasError:false,
				isSaving: false,
				errorMessage:'',
				data: action.data
			})	
		case ACT.EMP_PROFILE_GENERAL_FAILED_LOAD_VIEW:
			return Object.assign({}, state,{
				isFetching: false,
				isSaving: false,
				isFetchFailed: action.isFetchFailed,
				hasError: action.hasError,
				errorMessage: action.message
			})	
		case ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_PI:
			return Object.assign({}, state,{
				editMode: action.editMode,				
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,
				updateError: false,
				saveSuccess: false,
				saveError: false
			})	
		case ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_CANCEL_PI:
			return Object.assign({}, state,{
				editMode: action.editMode,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,
				updateError: false			
			})			
		case ACT.EMP_PROFILE_GENERAL_VALUE_CHANGED:			 	
			return Object.assign({}, state,{						
				hasError: false,			
				errorMessage: '',				
				updateSuccess: false,
				updateError: false,
				data : fieldvalues(state.data, action.field, action.value)
			})	
		case ACT.EMP_PROFILE_GENERAL_GENDER_CHANGED:			
			return Object.assign({}, state,{						
				hasError: false,				
				errorMessage: '',
				updateSuccess: false,
				updateError: false,
				data : genderstatus(state.data, action.value)
			})
		case ACT.EMP_PROFILE_GENERAL_BIRTHDATE_CHANGED:			
			return Object.assign({}, state,{						
				hasError: false,				
				errorMessage: '',
				updateSuccess: false,
				updateError: false,
				data: birthdatestatus(state.data, action.value)
			})
		case ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_PI:			
			return Object.assign({}, state,{						
				isSaving: action.isSaving,		
				errorMessage: action.errorMessage,
				updateSuccess: action.updateSuccess,
				updateError: action.updateError
			})
		case ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_SUCCESS_PI:					
			return Object.assign({}, state,{						
				isSaving: action.isSaving,		
				errorMessage: action.errorMessage,
				updateSuccess: action.updateSuccess,
				updateError: action.updateError,
				editMode: false,
				data: action.data
			})
		case ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_FAILED_PI:			
			return Object.assign({}, state,{						
				isSaving: action.isSaving,		
				errorMessage: action.message,
				updateSuccess: action.updateSuccess,
				updateError: action.updateError
			})		
		default:
			return state

	}	
}


// ********************************************************************************
// EMPLOYEE EMPLOYMENT
// ********************************************************************************
const dataForm_employment_initvalue = {
								"id":0,
								"startdate": null,
								"jobtitle": '',
								"joblevel": 0,								
								"category":0,
								"schedule":0,
								"empstatus":0,
								"separationdate": null,
								"paymentmode":0,
								"branch":'',
								"department":'',								
								"sssno":'',
								"philhealthno":'',
								"pagibigno":'',
								"tin":'',
								"taxstatus":''				
							}
const emp_employment_initialState = {
								data: dataForm_employment_initvalue,	
								dataForm: dataForm_employment_initvalue,								
								isFetching: false,
								isFetchFailed: false,
								hasError: false,
								errorMessage:'',
								isSaving: false,
								editMode: false,
								updateSuccess: false,								
								jobtitles: [],
								branches: [],
								department: [],								
								taxstatus: [],
								withdata: false
							 }

const employmentDateValues=(data, field, value)=>{	
	var newdata = Object.assign({}, data)
	switch(field){
		case "startdate": newdata.startdate = value
			break
		case "separationdate": newdata.separationdate = value
			break		
		default:
			break
	}
	return newdata
}
const employmentFieldValues=(data, field, value)=>{	
	var newdata = Object.assign({}, data)	
	switch(field){
		case "jobtitle": newdata.jobtitle = value
			break
		case "joblevel": newdata.joblevel = value
			break
		case "category": newdata.category = value
			break
		case "schedule": newdata.schedule = value
			break	
		case "empstatus": newdata.empstatus = value
			break
		case "paymentmode": newdata.paymentmode = value
			break	
		case "branch": newdata.branch = value
			break
		case "department": newdata.department = value
			break		
		case "sssno": newdata.sssno = value
			break
		case "philhealthno": newdata.philhealthno = value
			break		
		case "pagibigno": newdata.pagibigno = value
			break
		case "tin": newdata.tin = value
			break	
		case "taxstatus": newdata.taxstatus = value
			break		
		default:
			break
	}
	return newdata
}
export const emp_employment_reducer = (state = emp_employment_initialState, action)=>{	
	switch(action.type){
		case ACT.EMP_PROFILE_EMPLOYMENT_LOAD_VIEW:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				hasError:false,				
				isSaving: false,
				errorMessage:'',
				updateSuccess: false,				
				editMode: false
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_SUCCESS_LOAD_VIEW:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				withdata: action.withdata,
				isFetchFailed: false,
				hasError:false,
				isSaving: false,
				errorMessage:'',
				data: action.data
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_SUCCESS_NO_DATA_LOAD_VIEW:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				withdata: action.withdata,
				isFetchFailed: false,
				hasError:false,
				isSaving: false,
				errorMessage:'',				
				data: action.data
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_FAILED_LOAD_VIEW:
			return Object.assign({}, state,{
				isFetching: false,
				isSaving: false,
				isFetchFailed: action.isFetchFailed,
				hasError: action.hasError,
				errorMessage: action.message
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				editMode: action.editMode,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,							
				hasError: false
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT_SUCCESS:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				editMode: true,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,								
				dataForm: action.data.employment,
				withdata: action.data.withdata,		
				jobtitles: action.data.jobtitles,
				branches: action.data.branches,
				department: action.data.department,				
				taxstatus: action.data.taxstatus
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT_FAILED:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				editMode: action.editMode,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,				
				hasError: action.hasError
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT_CANCEL:
			return Object.assign({}, state,{
				editMode: action.editMode,
				isSaving: false,		
				errorMessage: action.errorMessage,
				updateSuccess: false,
				hasError: false
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_DATE_CHANGED:			
			return Object.assign({}, state,{
				errorMessage: '',				
				hasError: false,
				dataForm: employmentDateValues(state.dataForm, action.field, action.value)
			})		
		case ACT.EMP_PROFILE_EMPLOYMENT_VALUE_CHANGED:			
			return Object.assign({}, state,{
				errorMessage: '',	
				hasError: false,
				dataForm: employmentFieldValues(state.dataForm, action.field, action.value)
			})		
		case ACT.EMP_PROFILE_EMPLOYMENT_SAVE_FAILED:
			return Object.assign({}, state,{
				hasError: action.hasError,		
				isSaving: action.isSaving,
				updateSuccess: action.updateSuccess,		
				errorMessage: action.message
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_SAVING:
			return Object.assign({}, state,{
				isSaving: action.isSaving,		
				hasError: action.hasError,
				updateSuccess: action.updateSuccess,
				errorMessage: ''
			})		
		case ACT.EMP_PROFILE_EMPLOYMENT_SAVE_SUCCESS:
			return Object.assign({}, state,{
				isSaving: action.isSaving,		
				hasError: action.hasError,
				updateSuccess: action.updateSuccess,
				editMode: false,
				errorMessage: ''
			})		
		default:
			return state

	}	
}
