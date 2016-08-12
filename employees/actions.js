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
		 EMP_FORM_VALUE_CHANGED} from './actionTypes'


export function loadEmployeeList(){
	return{
		type: EMP_LOAD_LIST,
		isFetching: true
	}
}

export function loadSucessEmployeeList(data){
	return{
		type: EMP_LOAD_SUCCESS_LIST,
		isFetching: false,				
		data
	}
}

export function loadFailedEmployeeList(message){
	return{
		type: EMP_LOAD_FAILED_LIST,		
		isFetchFailed: true,
		hasError: true,		
		message
	}
}

export function load(){
     const fakedata =  [
				  {
				    "id": 0,
				    "employeeid": "00001",
				    "fullname": "Kaissieh Louella Abion"				    
				  },
				  {
				     "id": 1,
				     "employeeid": "00002",
				     "fullname": "Aprille Abion"
				  },
				   {
				     "id": 2,
				     "employeeid": "00003",
				     "fullname": "Shiela Abion"
				  }
		]
	return dispatch=>{
		dispatch(loadEmployeeList())
		return setTimeout(()=>{
			dispatch(loadSucessEmployeeList(fakedata))	
			//dispatch(loadFailedEmployeeList("test error"))
		}, 2000)
		// fetch('http://52.77.70.200:8081/department')
		// .then(response=>response.json()
		// 	.then(ret=>({ ret, response }))
		//  ).then(({ ret, response })=>{		 	
		//  	if (parseInt(ret.status)==1){
		// 		dispatch(loadListSuccess(ret.data))	
		//  	}else{
		//  		dispatch(loadListFailed(data.message))
		//  	}		 	
		//  })
		// .catch(error => { 
		// 	dispatch(loadListFailed('Database error'))			
		// })
	}
}

export function loadEmployeeForm(editMode, title, data){	
	return{
		type: EMP_LOAD_FORM,
		editMode: editMode,		
		title: title,
		data
	}
}

export function valueChangeEmployeeForm(data, field, value){
	return{
		type: EMP_FORM_VALUE_CHANGED,
		data,
		field,
		value
	}
}
export function civilStatus_ValueChanged(value){
	return{
		type: EMP_FORM_CIVIL_CHANGED,		
		value
	}
}
export function gender_ValueChanged(value){
	return{
		type: EMP_FORM_GENDER_CHANGED,		
		value
	}
}

export function saveDB(){
	return dispatch=>{
		dispatch(savingEmployeeForm())
		return setTimeout(()=>{
			dispatch(saveSuccessEmployeeForm())	
			//dispatch(loadFailedEmployeeList("test error"))
		}, 2000)
		// fetch('http://52.77.70.200:8081/department')
		// .then(response=>response.json()
		// 	.then(ret=>({ ret, response }))
		//  ).then(({ ret, response })=>{		 	
		//  	if (parseInt(ret.status)==1){
		// 		dispatch(loadListSuccess(ret.data))	
		//  	}else{
		//  		dispatch(loadListFailed(data.message))
		//  	}		 	
		//  })
		// .catch(error => { 
		// 	dispatch(loadListFailed('Database error'))			
		// })
	}
}

export function savingEmployeeForm(){
	return{
		type: EMP_SAVE_FORM,
		isSaving: true,		
		hasError: false,
		saveSuccess: false,
		saveError: false
	}
}

export function saveFailedEmployeeForm(message){
	return{
		type: EMP_SAVE_FAILED_FORM,
		isSaving: false,		
		hasError: true,				
		saveSuccess: false,
		saveError: true,
		message
	}
}

export function saveSuccessEmployeeForm(){
	return{
		type: EMP_SAVE_SUCCESS_FORM,
		isSaving: false,		
		hasError: false,
		saveSuccess: true,
		saveError: false		
	}
}

