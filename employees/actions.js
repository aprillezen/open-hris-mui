import * as ACT from './actionTypes'
import moment from 'moment'


// ********************************************************************************
// EMPLOYEE LIST
// ********************************************************************************
export function loadEmployeeList(){
	return{
		type: ACT.EMP_LOAD_LIST,
		isFetching: true
	}
}
export function loadSucessEmployeeList(data){
	return{
		type: ACT.EMP_LOAD_SUCCESS_LIST,
		isFetching: false,				
		data
	}
}
export function loadFailedEmployeeList(message){
	return{
		type: ACT.EMP_LOAD_FAILED_LIST,		
		isFetchFailed: true,
		hasError: true,		
		message
	}
}

export function listCheckedChanged(id){
	return{
		type: ACT.EMP_LIST_CHECKED_CHANGED,
		id
	}
}
export function load(){     
	return dispatch=>{
		dispatch(loadEmployeeList())		
		fetch('http://localhost:8081/employee')
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){
				dispatch(loadSucessEmployeeList(ret.data))	
		 	}else{
		 		dispatch(loadFailedEmployeeList(data.message))
		 	}		 	
		 })
		.catch(error => { 
			dispatch(loadFailedEmployeeList('Database error'))			
		})
	}
}

export function loadDeleteDialog(id, msg){
	return{
		type: ACT.EMP_LOAD_DELETE_DIALOG,
		isDeleteDialogOpen: true,
		isDeleting: false,
		deleteHasError: false,
		deleteErrorMsg: '',
		deleteSuccess: false,
		id,
		msg		
	}
}

export function cancelDelete(){
	return{
		type: ACT.EMP_CANCEL_DELETE,
		isDeleteDialogOpen: false,
		isDeleting: false,
		deleteHasError: false,
		deleteSuccess: false,
		deleteErrorMsg:'',
		deleteId: 0
	}
}

export function deleteAttempt(){
	return{
		type: ACT.EMP_DELETE_ATTEMPT,
		isDeleting: true,
		deleteHasError: false,
		deleteSuccess: false,
		deleteErrorMsg:''
		
	}
}
export function deleteFailed(message){
	return{
		type: ACT.EMP_DELETE_FAILED,
		isDeleting: false,
		deleteHasError: true,	
		deleteSuccess: false,
		message
	}
}

export function deleteSuccess(id){
	return{
		type: ACT.EMP_DELETE_SUCCESS,
		isDeleteDialogOpen: false,
		isDeleting: false,
		deleteHasError: false,
		deleteSuccess: true,
		deleteErrorMsg:'',
		deleteSuccess: true,
		id
	}
}

export function deleteEmployee(id){
	return dispatch=>{
		dispatch(deleteAttempt())		
		fetch('http://localhost:8081/employee/delete/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){
				dispatch(deleteSuccess(id))	
		 	}else{
		 		dispatch(deleteFailed(data.message))
		 	}		 	
		 })
		.catch(error => { 
			dispatch(deleteFailed('Database error'))			
		})
	}
}


// ********************************************************************************
// EMPLOYEE ADD
// ********************************************************************************
export function loadEmployeeForm(){	
	return{
		type: ACT.EMP_LOAD_FORM
	}
}
export function valueChangeEmployeeForm(data, field, value){
	return{
		type: ACT.EMP_FORM_VALUE_CHANGED,
		data,
		field,
		value
	}
}
export function civilStatus_ValueChanged(value){
	return{
		type: ACT.EMP_FORM_CIVIL_CHANGED,		
		value
	}
}
export function gender_ValueChanged(value){
	return{
		type: ACT.EMP_FORM_GENDER_CHANGED,		
		value
	}
}
export function birthdate_ValueChanged(value){	
	return{
		type: ACT.EMP_FORM_BIRTHDATE_CHANGED,		
		value
	}
}
export function saveDB(data, editMode){

	data.birthdate =  data.birthdate.format('YYYY/MM/DD HH:mm:ss')	
	let url = 'http://localhost:8081/employee/add'
	let dataForm = {
		    method: 'POST',
		    headers: { 
		    	 'Accept': 'application/json',
	        	 'Content-Type': 'application/json',
		    },
		    body: JSON.stringify(data)
  		}	
  	data.birthdate = moment(data.birthdate,'MM/DD/YYYY')
	return dispatch=>{
		dispatch(savingEmployeeForm())	
		fetch(url, dataForm)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){			 		
		 		data.id = ret.data.id		 						
		 		dispatch(saveSuccessEmployeeForm(data))				
		 	}else{
		 		dispatch(saveFailedEmployeeForm(ret.message))		 			 		
		 	}
		 	
		 })
		.catch(error => { 					
			dispatch(saveFailedEmployeeForm(error))			
		})
		
	}
}
export function savingEmployeeForm(){
	return{
		type: ACT.EMP_SAVE_FORM,
		isSaving: true,		
		hasError: false,
		saveSuccess: false		
	}
}
export function saveFailedEmployeeForm(message){
	return{
		type: ACT.EMP_SAVE_FAILED_FORM,
		isSaving: false,		
		hasError: true,				
		saveSuccess: false,		
		message
	}
}
export function saveSuccessEmployeeForm(data){
	return{
		type: ACT.EMP_SAVE_SUCCESS_FORM,
		isSaving: false,		
		hasError: false,
		saveSuccess: true,		
		data	
	}
}
// ********************************************************************************
// EMPLOYEE GENERAL
// ********************************************************************************
export function loadEmployeeGeneralView(){
	return{
		type: ACT.EMP_PROFILE_GENERAL_LOAD_VIEW,
		isFetching: true
	}
}
export function loadSuccessEmployeeGeneralView(data){
	return{
		type: ACT.EMP_PROFILE_GENERAL_SUCCESS_LOAD_VIEW,
		isFetching: false,
		data
	}
}
export function loadFailedEmployeeGeneralView(message){
	return{
		type: ACT.EMP_PROFILE_GENERAL_FAILED_LOAD_VIEW,
		isFetching: false,
		isFetchFailed: true,
		hasError: true,
		message
	}
}
export function loadEmployeeGeneral(id){	
	return dispatch=>{
		dispatch(loadEmployeeGeneralView())	
		fetch('http://localhost:8081/employee/edit/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){
		 		var tmpdata = ret.data
		 		tmpdata.birthdate = moment(tmpdata.birthdate)
				dispatch(loadSuccessEmployeeGeneralView(tmpdata))	
		 	}else{
		 		dispatch(loadFailedEmployeeGeneralView(data.message))
		 	}		 	
		 })
		.catch(error => { 
			dispatch(loadFailedEmployeeGeneralView('Database error'))			
		})
	}
}
export function loadEmployeeGeneralEdit(){
	return{
		type: ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_PI,
		isGeneralEdit: true,
		isGeneralEditCI: false
	}
}
export function loadEmployeeGeneralEditCancel(){
	return{
		type: ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_CANCEL_PI,
		isGeneralEdit: false
	}
}
export function loadEmployeeGeneralEditCI(){
	return{
		type: ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_CI,
		isGeneralEditCI: true,
		isGeneralEdit: false
	}
}
export function loadEmployeeGeneralEditCICancel(){
	return{
		type: ACT.EMP_PROFILE_GENERAL_LOAD_EDIT_CI_CANCEL,
		isGeneralEditCI: false
	}
}
export function valueChangeEmployeeGeneralEdit(field, value){
	return{
		type: ACT.EMP_PROFILE_GENERAL_VALUE_CHANGED,		
		field,
		value
	}
}
export function civilStatus_ValueChangedGeneralEdit(value){
	return{
		type: ACT.EMP_PROFILE_GENERAL_CIVIL_CHANGED,		
		value
	}
}
export function gender_ValueChangedGeneralEdit(value){
	return{
		type: ACT.EMP_PROFILE_GENERAL_GENDER_CHANGED,		
		value
	}
}
export function birthdate_ValueChangedGeneralEdit(value){	
	return{
		type: ACT.EMP_PROFILE_GENERAL_BIRTHDATE_CHANGED,		
		value
	}
}
export function savingEmployeeGeneral_PI(){
	return{
		type: ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_PI,
		isSaving: true,		
		errorMessage: '',
		updateSuccess: false,
		updateError: false
	}
}
export function saveSuccessEmployeeGeneral_PI(data){
	return{
		type: ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_SUCCESS_PI,
		isSaving: false,		
		errorMessage: '',
		updateSuccess: true,
		updateError: false,
		data
	}
}
export function saveFailedEmployeeGeneral_PI(message){
	return{
		type: ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_FAILED_PI,
		isSaving: false,				
		updateSuccess: false,
		updateError: true,
		message
	}
}
export function updateEmployeeGeneral_PI(data){	
	data.birthdate =  data.birthdate.format('YYYY/MM/DD HH:mm:ss')	
	let url = 'http://localhost:8081/employee/update'
	let dataForm = {
		    method: 'POST',
		    headers: { 
		    	 'Accept': 'application/json',
	        	 'Content-Type': 'application/json',
		    },
		    body: JSON.stringify(data)
  		}	  	
   	data.birthdate = moment(data.birthdate,'YYYY/MM/DD')     	
	return dispatch=>{
		dispatch(savingEmployeeGeneral_PI())
		// return setTimeout(()=>{			
		// 	dispatch(saveSuccessEmployeeGeneral_PI(data))
		// 	//dispatch(saveFailedEmployeeGeneral_PI("test error"))
		// }, 2000)
		fetch(url, dataForm)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){			 		
		 		dispatch(saveSuccessEmployeeGeneral_PI(data))	 				 				
		 	}else{
		 		dispatch(saveFailedEmployeeGeneral_PI(ret.message))		 			 		
		 	}		 	
		 })
		.catch(error => { 					
			dispatch(saveFailedEmployeeGeneral_PI(error))			
		})		
	}
}
export function savingEmployeeGeneral_CI(){
	return{
		type: ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_CI,
		isSaving: true,		
		errorMessage: '',
		updateSuccess: false,
		updateError: false
	}
}
export function saveSuccessEmployeeGeneral_CI(data){
	return{
		type: ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_SUCCESS_CI,
		isSaving: false,		
		errorMessage: '',
		updateSuccess: true,
		updateError: false,
		data
	}
}
export function saveFailedEmployeeGeneral_CI(message){
	return{
		type: ACT.EMP_PROFILE_GENERAL_EDIT_SAVE_FAILED_CI,
		isSaving: false,				
		updateSuccess: false,
		updateError: true,
		message
	}
}
export function updateEmployeeGeneral_CI(data){	
	data.birthdate =  data.birthdate.format('YYYY/MM/DD HH:mm:ss')	
	let url = 'http://localhost:8081/employee/update'
	let dataForm = {
		    method: 'POST',
		    headers: { 
		    	 'Accept': 'application/json',
	        	 'Content-Type': 'application/json',
		    },
		    body: JSON.stringify(data)
  		}	  	
   	data.birthdate = moment(data.birthdate,'YYYY/MM/DD')     	
	return dispatch=>{
		dispatch(savingEmployeeGeneral_CI())
		// return setTimeout(()=>{			
		// 	dispatch(saveSuccessEmployeeGeneral_CI(data))
		// 	//dispatch(saveFailedEmployeeGeneral_CI("test error"))
		// }, 2000)
		fetch(url, dataForm)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){			 		
		 		dispatch(saveSuccessEmployeeGeneral_CI(data))	 				 				
		 	}else{
		 		dispatch(saveFailedEmployeeGeneral_CI(ret.message))		 			 		
		 	}		 	
		 })
		.catch(error => { 					
			dispatch(saveFailedEmployeeGeneral_CI(error))			
		})		
	}
}


// ********************************************************************************
// EMPLOYEE EMPLOYMENT
// ********************************************************************************
export function loadEmployeeEmploymentView(){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_LOAD_VIEW,
		isFetching: true
	}
}
export function loadSuccessEmployeeEmploymentView(data){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_SUCCESS_LOAD_VIEW,
		isFetching: false,
		withdata: true,
		data
	}
}
export function loadSuccessEmployeeEmploymentNoDataView(data){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_SUCCESS_NO_DATA_LOAD_VIEW,
		isFetching: false,
		withdata: false,
		data
	}
}
export function loadFailedEmployeeEmploymentView(message){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_FAILED_LOAD_VIEW,
		isFetching: false,
		isFetchFailed: true,
		hasError: true,
		message
	}
}

export function loadEmployeeEmployment(id){
	let nodata = {
					"id":id,
					"startdate": '-not set-',
					"jobtitle": '-not set-',
					"joblevel": '-not set-',
					"category": '-not set-',
					"schedule": '-not set-',
					"empstatus": '-not set-',
					"separationdate": '-not set-',
					"paymentmode": '-not set-',
					"branch": '-not set-',
					"department": '-not set-',					
					"sssno": '-not set-',
					"philhealthno": '-not set-',
					"pagibigno": '-not set-',
					"tin": '-not set-',
					"taxstatus": '-not set-'
				   }
	return dispatch=>{
		dispatch(loadEmployeeEmploymentView())
		// return setTimeout(()=>{
		// 	dispatch(loadSuccessEmployeeEmploymentView(fakedata))	
		// 	//dispatch(loadFailedEmployeeGeneralView("test error"))
		// }, 1000)

		fetch('http://localhost:8081/employee/employment/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){		 		
				dispatch(loadSuccessEmployeeEmploymentView(ret.data))	
		 	}else{
		 		dispatch(loadSuccessEmployeeEmploymentNoDataView(nodata))
		 	}		 	
		 })
		.catch(error => { 
			dispatch(loadFailedEmployeeEmploymentView('Database error'))			
		})
	}
}

export function loadEmploymentForm(id){	
	let fakedata = {
					"id": id,
					"startdate": null,
					"jobtitle": '',
					"joblevel": '',
					"category": 0,
					"schedule": '',
					"empstatus": null,
					"separationdate": null,
					"paymentmode": 0,
					"branch":'',
					"department":'',								
					"sssno":'',
					"philhealthno":'',
					"pagibigno":'',
					"tin":'',
					"taxstatus":''	
				   }
	return dispatch=>{
		dispatch(loadEmployeeEmploymentEdit())
		fetch('http://localhost:8081/employee/employment/edit/'+id)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 		 	
		 	if (ret.data.withdata){
		 		ret.data.employment.startdate= moment(ret.data.employment.startdate)
		 		if (!_.isEmpty(ret.data.employment.separationdate)){
					ret.data.employment.separationdate= moment(ret.data.employment.separationdate)
		 		}
		 	}else{
		 		ret.data.employment = fakedata	
		 	} 	
		 	dispatch(loadEmployeeEmploymentEditSuccess(ret.data))		 		 	
		 })
		.catch(error => { 
			dispatch(loadEmployeeEmploymentEditFailed('Database error'))			
		})	
	}
}


export function loadEmployeeEmploymentEdit(){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT,
		isFetching: true,
		isLoadEdit: true
	}
}
export function loadEmployeeEmploymentEditSuccess(data){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT_SUCCESS,
		isFetching: false,
		data
	}
}
export function loadEmployeeEmploymentEditFailed(message){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT_FAILED,
		isFetching: false,
		isFetchFailed: true,
		hasError: true,
		message
	}
}
export function loadEmployeeEmploymentEditCancel(){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_LOAD_EDIT_CANCEL,
		isLoadEdit: false
	}
}

export function employmentDateChanged(field, value){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_DATE_CHANGED,
		field,
		value
	}
}
export function employmentValueChanged(field, value){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_VALUE_CHANGED,		
		field,
		value
	}
}
export function employmentSaveFailed(message){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_SAVE_FAILED,
		hasError: true,		
		isSaving: false,
		updateSuccess: false,		
		message
	}
}
export function employmentSaving(){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_SAVING,
		isSaving: true,		
		hasError: false,
		updateSuccess: false
	}
}

export function employmentSaveSuccess(){
	return{
		type: ACT.EMP_PROFILE_EMPLOYMENT_SAVE_SUCCESS,
		isSaving: false,		
		hasError: false,
		updateSuccess: true
	}
}

export function saveEmployment(data, withdata){		
	let tmpData = Object.assign({}, data)

	tmpData.startdate =  tmpData.startdate.format('YYYY/MM/DD HH:mm:ss')		
	if (typeof tmpData.jobtitle=='object'){
		tmpData.jobtitle = tmpData.jobtitle.value	
	}
	if (typeof tmpData.joblevel=='object'){
		tmpData.joblevel = tmpData.joblevel.value	
	}
	if (typeof tmpData.schedule=='object'){
		tmpData.schedule = tmpData.schedule.value	
	}
	if (typeof tmpData.empstatus=='object'){
		tmpData.empstatus = tmpData.empstatus.value	
	}
	if (typeof tmpData.branch=='object'){
		tmpData.branch = tmpData.branch.value	
	}
	if (typeof tmpData.department=='object'){
		tmpData.department = tmpData.department.value	
	}
	if (typeof tmpData.taxstatus=='object'){
		tmpData.taxstatus = tmpData.taxstatus.value	
	}
	if (!_.isEmpty(tmpData.separationdate)){
		tmpData.separationdate = tmpData.separationdate.format('YYYY/MM/DD HH:mm:ss')
	}
	//console.log(tmpData)	
	let url = 'http://localhost:8081/employee/employment/add'
	if (withdata){
		url = 'http://localhost:8081/employee/employment/update'
	}
	let dataForm = {
					    method: 'POST',
					    headers: { 
					    	 'Accept': 'application/json',
					    	 'Content-Type': 'application/json',
					    },
					    body: JSON.stringify(tmpData)
					}	  	 
	return dispatch=>{
		dispatch(employmentSaving())		
		fetch(url, dataForm)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){			 		
		 		dispatch(employmentSaveSuccess())	 				 				
		 	}else{
		 		dispatch(employmentSaveFailed(ret.message))		 			 		
		 	}		 	
		 })
		.catch(error => { 					
			dispatch(employmentSaveFailed(error))			
		})		
	}
}

