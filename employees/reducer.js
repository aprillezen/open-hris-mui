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
	data: []
}

export const emp_list_reducer = (state = initialState, action)=>{
	switch(action.type){
		case ACT.EMP_LOAD_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				errorMessage: '',				
				hasError: false
			})
		case ACT.EMP_LOAD_SUCCESS_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				errorMessage: '',				
				hasError: false,
				data: action.data

			})
		case ACT.EMP_LOAD_FAILED_LIST:
			return Object.assign({}, state,{
				isFetching:false,
				isFetchFailed: action.isFetchFailed,
				errorMessage: action.message,				
				hasError: action.hasError
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
								"civilstat":"0",
								"gender":'0',
								"address":'',
								"city":'',
								"province":'',
								"zipcode":'',
								"homephone":'',
								"mobilephone":'',
								"emailadd":''
							}
const employee_initialState = {
								editMode: false,
								dataForm: dataForm_initvalue,	
								title: '',
								hasError: false,
								errorMessage:'',														
								isSaving: false,										
								saveError: false,
								saveSuccess: false,
								saveEditSuccess: false,
								isDeleting: false,
								deleteHasError: false,
								deleteErrorMsg:'',
								deletemsg:'',
								deleteSuccess: false
							 }

const checkData = (data)=>{		
	if (_.isEmpty(data) || data=="undefined"){
		var newdata = Object.assign({}, dataForm_initvalue)
		return newdata
	}
	return data
}
export const emp_add_form_reducer = (state = employee_initialState, action)=>{	
	switch(action.type){
		case ACT.EMP_LOAD_FORM:
			return Object.assign({}, state,{
				editMode: action.editMode,
				dataForm: checkData(action.data),	
				title: action.title,
				hasError: false,
				errorMessage:'',														
				isSaving: false,										
				saveError: false,
				saveSuccess: false,
				saveEditSuccess: false,
				isDeleting: false,
				deleteHasError: false,
				deleteErrorMsg:'',
				deletemsg:'',
				deleteSuccess: false
			})	
		case ACT.EMP_FORM_VALUE_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,
				saveError: false,
				errorMessage: '',
				dataForm : fieldvalues(action.data, action.field, action.value)
			})
		case ACT.EMP_FORM_CIVIL_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,
				saveError: false,
				errorMessage: '',
				dataForm : civilstatus(state.dataForm, action.value)
			})
		case ACT.EMP_FORM_GENDER_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,
				saveError: false,
				errorMessage: '',
				dataForm : genderstatus(state.dataForm, action.value)
			})
		case ACT.EMP_FORM_BIRTHDATE_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,
				saveError: false,
				errorMessage: '',
				dataForm : birthdatestatus(state.dataForm, action.value)
			})
		case ACT.EMP_SAVE_FORM:			
			return Object.assign({}, state,{
				isSaving: action.isSaving,				
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				saveError: action.saveError,
				errorMessage: ''
			})
		case ACT.EMP_SAVE_FAILED_FORM:			
			return Object.assign({}, state,{
				isSaving: action.isSaving,				
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				saveError: action.saveError,
				errorMessage: action.message
			})
		case ACT.EMP_SAVE_SUCCESS_FORM:			
			return Object.assign({}, state,{
				isSaving: action.isSaving,				
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				saveError: action.saveError,
				errorMessage: '',
				dataForm: action.data
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
								"civilstat":"0",
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
								isGeneralEdit: false,
								isGeneralEditCI:false,
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
				isGeneralEdit: false,
				isGeneralEditCI:false,
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
				isGeneralEdit: action.isGeneralEdit,
				isGeneralEditCI: action.isGeneralEditCI,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,
				updateError: false,
				saveSuccess: false,
				saveError: false
			})	
		case ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_CANCEL_PI:
			return Object.assign({}, state,{
				isGeneralEdit: action.isGeneralEdit,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,
				updateError: false			
			})	
		case ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_CI:
			return Object.assign({}, state,{
				isGeneralEditCI: action.isGeneralEditCI,
				isGeneralEdit: action.isGeneralEdit,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,
				updateError: false,
				saveSuccess: false,
				saveError: false
			})	
		case ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_CI_CANCEL:
			return Object.assign({}, state,{
				isGeneralEditCI: action.isGeneralEditCI				
			})	
		case ACT.EMP_PROFILE_GENERAL_VALUE_CHANGED:			 	
			return Object.assign({}, state,{						
				hasError: false,			
				errorMessage: '',				
				updateSuccess: false,
				updateError: false,
				data : fieldvalues(state.data, action.field, action.value)
			})
		case ACT.EMP_PROFILE_GENERAL_CIVIL_CHANGED:			
			return Object.assign({}, state,{						
				hasError: false,				
				errorMessage: '',
				updateSuccess: false,
				updateError: false,
				data : civilstatus(state.data, action.value)
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
				isGeneralEdit: false,
				data: action.data
			})
		case ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_FAILED_PI:			
			return Object.assign({}, state,{						
				isSaving: action.isSaving,		
				errorMessage: action.message,
				updateSuccess: action.updateSuccess,
				updateError: action.updateError
			})
		case ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_CI:			
			return Object.assign({}, state,{						
				isSaving: action.isSaving,		
				errorMessage: action.errorMessage,
				updateSuccess: action.updateSuccess,
				updateError: action.updateError
			})
		case ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_SUCCESS_CI:					
			return Object.assign({}, state,{						
				isSaving: action.isSaving,		
				errorMessage: action.errorMessage,
				updateSuccess: action.updateSuccess,
				updateError: action.updateError,
				isGeneralEditCI: false,
				data: action.data
			})
		case ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_FAILED_CI:			
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
								"jobTitle":'',
								"joblevel":"0",								
								"category":'0',
								"schedule":'0',
								"empstatus":"0",
								"separationdate":'-',
								"paymentmode":'0',
								"branch":'',
								"department":'',
								"group":'',
								"sssno":'',
								"philhealthno":'',
								"pagibigno":'',
								"tin":'',
								"taxstatus":''				
							}
const emp_employment_initialState = {
								data: dataForm_employment_initvalue,									
								isFetching: false,
								isFetchFailed: false,
								hasError: false,
								errorMessage:'',
								isSaving: false,
								isLoadEdit: false,
								updateSuccess: false,
								updateError: false

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
				updateError: false
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_SUCCESS_LOAD_VIEW:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
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
				isLoadEdit: action.isLoadEdit,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,
				updateError: false,
				saveSuccess: false,
				saveError: false
			})	
		case ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT_CANCEL:
			return Object.assign({}, state,{
				isLoadEdit: action.isLoadEdit,
				isSaving: false,		
				errorMessage: '',
				updateSuccess: false,
				updateError: false,
				saveSuccess: false,
				saveError: false
			})			
		default:
			return state

	}	
}