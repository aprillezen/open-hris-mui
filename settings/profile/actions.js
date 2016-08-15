import * as ACT from './actionTypes'

export function loadForm(){
	return{
		type: ACT.LOAD_FORM,
		isFetching: true,
		isFailed: false,
		hasError: false,
		saveSuccess: false
	}
}

export function loadSucessForm(profile){
	return{
		type: ACT.LOAD_SUCCESS_FORM,
		isFetching: false,
		isFailed: false,
		hasError: false,
		saveSuccess: false,
		profile
	}
}

export function loadFailedForm(message){
	return{
		type: ACT.LOAD_FAILED_FORM,
		isFetching: false,
		isFailed: true,
		hasError: true,
		saveSuccess: false,
		message
	}
}

export function saveForm(){
	return{
		type: ACT.SAVE_FORM,
		isSaving: true,
		isFailed: false,
		hasError: false,
		saveSuccess: false
	}
}

export function saveSuccessForm(profile){
	return{
		type: ACT.SAVE_SUCCESS_FORM,
		isSaving: false,
		isFailed: false,
		hasError: false,
		saveSuccess: true,
		profile
	}
}

export function saveFailedForm(message){
	return{
		type: ACT.SAVE_FAILED_FORM,
		isSaving: false,
		isFailed: true,
		hasError: true,
		saveSuccess: false,
		message
	}
}

export function valueChangeForm(data, field, value){
	return{
		type: ACT.FORM_VALUE_CHANGED,
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
		    	emailadd: profile.emailadd,
			    city: profile.city,
				province: profile.province,
				zip: profile.zip,
				tin: profile.tin,
				sssno: profile.sssno,
				philhealthno: profile.philhealthno,
				pagibigno: profile.pagibigno

		    })
  		}	

	return dispatch=>{
		dispatch(saveForm())
		fetch('http://52.77.70.200:8081/profile/update', data)
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
		fetch('http://52.77.70.200:8081/profile')
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