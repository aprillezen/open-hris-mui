import { EMP_LOAD_LIST, 
		 EMP_LOAD_SUCCESS_LIST, 
		 EMP_LOAD_FAILED_LIST} from './actionTypes'

import { EMP_LOAD_FORM, 
		 EMP_LOAD_SUCCESS_FORM, 
		 EMP_LOAD_FAILED_FORM,
		 EMP_SAVE_FORM,
		 EMP_SAVE_FAILED_FORM,
		 EMP_SAVE_SUCCESS_FORM,
		 EMP_FORM_CIVIL_CHANGED,
		 EMP_FORM_GENDER_CHANGED,
		 EMP_FORM_BIRTHDATE_CHANGED,
		 EMP_FORM_VALUE_CHANGED} from './actionTypes'

import _ from 'lodash'
import moment from 'moment'

const initialState = {
	isFetching: true,
	isFetchFailed: false,
	hasError: false,
	errorMessage: '',
	data: []
}

export const emp_list_reducer = (state = initialState, action)=>{
	switch(action.type){
		case EMP_LOAD_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				errorMessage: '',				
				hasError: false
			})
		case EMP_LOAD_SUCCESS_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFetchFailed: false,
				errorMessage: '',				
				hasError: false,
				data: action.data

			})
		case EMP_LOAD_FAILED_LIST:
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

export const emp_form_reducer = (state = employee_initialState, action)=>{	
	switch(action.type){
		case EMP_LOAD_FORM:
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
		case EMP_FORM_VALUE_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,
				saveError: false,
				errorMessage: '',
				dataForm : fieldvalues(action.data, action.field, action.value)
			})
		case EMP_FORM_CIVIL_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,
				saveError: false,
				errorMessage: '',
				dataForm : civilstatus(state.dataForm, action.value)
			})
		case EMP_FORM_GENDER_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,
				saveError: false,
				errorMessage: '',
				dataForm : genderstatus(state.dataForm, action.value)
			})
		case EMP_FORM_BIRTHDATE_CHANGED:			
			return Object.assign({}, state,{
				isSaving: false,				
				hasError: false,
				saveSuccess: false,
				saveError: false,
				errorMessage: '',
				dataForm : birthdatestatus(state.dataForm, action.value)
			})
		case EMP_SAVE_FORM:			
			return Object.assign({}, state,{
				isSaving: action.isSaving,				
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				saveError: action.saveError,
				errorMessage: ''
			})
		case EMP_SAVE_FAILED_FORM:			
			return Object.assign({}, state,{
				isSaving: action.isSaving,				
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				saveError: action.saveError,
				errorMessage: action.message
			})
		case EMP_SAVE_SUCCESS_FORM:			
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