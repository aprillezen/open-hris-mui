import * as ACT from './actionTypes'
import moment from 'moment'

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

export function load(){
     const fakedata =  [
				  {
				    "id": 0,
				    "employeeId": "00001",
				    "fname": "Kaissieh Louella",
				    "lname": "Abion"				    
				  },
				  {
				     "id": 1,
				     "employeeId": "00002",
				     "fname": "Shiela",
				     "lname": "Abion"	
				  },
				   {
				     "id": 2,
				     "employeeId": "00003",
				     "fname": "Aprille",
				     "lname": "Abion"	
				  }
		]
	return dispatch=>{
		dispatch(loadEmployeeList())
		// return setTimeout(()=>{
		// 	dispatch(loadSucessEmployeeList(fakedata))	
		// 	//dispatch(loadFailedEmployeeList("test error"))
		// }, 2000)

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

export function loadEmployeeForm(editMode, title, data){	
	return{
		type: ACT.EMP_LOAD_FORM,
		editMode: editMode,		
		title: title,
		data
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
		// return setTimeout(()=>{			
		// 	dispatch(saveSuccessEmployeeForm(data))
		// 	//dispatch(loadFailedEmployeeList("test error"))
		// }, 2000)
		fetch(url, dataForm)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{		 	
		 	if (parseInt(ret.status)==1){			 		
		 		if (editMode==true) {
		 			//dispatch(saveEditSuccessDeptForm(data))				 			
		 		}else{		 		 			
		 			dispatch(saveSuccessEmployeeForm(data))		
		 		}				
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
		saveSuccess: false,
		saveError: false
	}
}

export function saveFailedEmployeeForm(message){
	return{
		type: ACT.EMP_SAVE_FAILED_FORM,
		isSaving: false,		
		hasError: true,				
		saveSuccess: false,
		saveError: true,
		message
	}
}

export function saveSuccessEmployeeForm(data){
	return{
		type: ACT.EMP_SAVE_SUCCESS_FORM,
		isSaving: false,		
		hasError: false,
		saveSuccess: true,
		saveError: false,
		data	
	}
}

