import {LOAD_FORM,LOAD_SUCCESS_FORM,LOAD_FAILED_FORM,SAVE_FORM,SAVE_FAILED_FORM,SAVE_SUCCESS_FORM,FORM_VALUE_CHANGED} from './actionTypes'
import _ from 'lodash'


const initialstate = {
	isFetching: false,
	isFailed: false,
	message: '',
	hasError: false,
	isSaving: false,
	profile: {
			"id": '',
			"companyname":'',
			"address":'',
			"contactno":'',
			"emailadd":'',
			"city":'',
			"province":'',
			"zip":'',
			"tin":'',
			"sssno":'',
			"philhealthno":'',
			"pagibigno":''

	}
}

const checkProfile = (profile)=>{	
	var newdata = Object.assign({}, profile)
	if (_.isEmpty(profile)){
		newdata = initialstate.profile
	}
	return newdata
}

const fieldvalues=(data, field, value)=>{
	var newdata = Object.assign({}, data)
	switch(field){
		case "companyname":
			newdata.companyname = value
			break
		case "address":
			newdata.address = value
			break
		case "contactno":
			newdata.contactno = value
			break
		case "emailadd":
			newdata.emailadd = value
			break
		case "city":
			newdata.city = value
			break
		case "province":
			newdata.province = value
			break
		case "zip":
			newdata.zip = value
			break
		case "tin":
			newdata.tin = value
			break
		case "sssno":
			newdata.sssno = value
			break
		case "philhealthno":
			newdata.philhealthno = value
			break
		case "pagibigno":
			newdata.pagibigno = value
			break
		default:
			break
	}
	return newdata

}

const reducer = (state=initialstate, action) =>{
	
	switch(action.type){
		case LOAD_FORM:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFailed: action.isFailed,
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				message: ''
			})
		case LOAD_SUCCESS_FORM:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFailed: action.isFailed,
				hasError: action.hasError,
				message: '',
				saveSuccess: action.saveSuccess,
				profile: checkProfile(action.profile)
			})
		case LOAD_FAILED_FORM:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFailed: action.isFailed,
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				message: action.message
			})
		case SAVE_FORM:
			return Object.assign({}, state, {
				isSaving: action.isSaving,
				isFailed: action.isFailed,
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				message: ''
			})
		case SAVE_SUCCESS_FORM:
			return Object.assign({}, state, {
				isSaving: action.isSaving,
				isFailed: action.isFailed,
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				profile: action.profile
			})
		case SAVE_FAILED_FORM:
			return Object.assign({}, state, {
				isSaving: action.isSaving,
				isFailed: action.isFailed,
				hasError: action.hasError,
				saveSuccess: action.saveSuccess,
				message: action.message
			})
		case FORM_VALUE_CHANGED:
			return Object.assign({}, state,{
				profile : fieldvalues(action.data, action.field, action.value)
		})


		default:
			return state
	}
}

export default reducer