import {LOAD_FORM,LOAD_SUCCESS_FORM,LOAD_FAILED_FORM,SAVE_FORM,SAVE_FAILED_FORM,SAVE_SUCCESS_FORM,FORM_VALUE_CHANGED} from './actionTypes'

export function loadForm(){
	return{
		type: LOAD_FORM,
		isFetching: true,
		isFailed: false,
		hasError: false
	}
}

export function loadSucessForm(profile){
	return{
		type: LOAD_SUCCESS_FORM,
		isFetching: false,
		isFailed: false,
		hasError: false,
		profile
	}
}

export function loadFailedForm(message){
	return{
		type: LOAD_FAILED_FORM,
		isFetching: false,
		isFailed: true,
		hasError: true,
		message
	}
}

export function saveForm(){
	return{
		type: SAVE_FORM,
		isSaving: true,
		isFailed: false,
		hasError: false
	}
}

export function saveSuccessForm(profile){
	return{
		type: SAVE_SUCCESS_FORM,
		isSaving: false,
		isFailed: false,
		hasError: false,
		profile
	}
}

export function saveFailedForm(message){
	return{
		type: SAVE_FAILED_FORM,
		isSaving: false,
		isFailed: true,
		hasError: true,
		message
	}
}

export function valueChangeForm(data, field, value){
	return{
		type: FORM_VALUE_CHANGED,
		data,
		field,
		value
	}
}

export function save(profile){

	let data = {
		    method: 'POST',
		    headers: { 
		    	 'Accept': 'application/json',
	        	 'Content-Type': 'application/json',
		    },
		    body: JSON.stringify({
		    	id : 1,
		    	companyname: profile.companyname,
		    	address: profile.address,
		    	contactno: profile.contactno,
		    	emailadd: profile.emailadd
		    })
  		}	

	return dispatch=>{
		dispatch(saveForm())
		fetch('http://localhost:3000/profile/update', data)
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{
		 	if (parseInt(ret.status)==1){
				dispatch(saveSuccessForm(profile))	
		 	}else{
		 		dispatch(saveFailedForm(ret.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(saveFailedForm('Database error'))			
		})
	}
}

export function load(){
	return dispatch=>{
		dispatch(loadForm())	
		fetch('http://localhost:3000/profile')
		.then(response=>response.json()
			.then(ret=>({ ret, response }))
		 ).then(({ ret, response })=>{
		 	if (parseInt(ret.status)==1){
				dispatch(loadSucessForm(ret.data))	
		 	}else{
		 		dispatch(loadFailedForm(data.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(loadFailedForm('Database error'))			
		})
	}
}