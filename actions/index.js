import { push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'

export const LOGIN_ATTEMPT="LOGIN_ATTEMPT";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_FAILED="LOGIN_FAILED";



export function loginAttempt(username){
	return{
		type: LOGIN_ATTEMPT,
		isFetching: true,
		isAuthenticated: false,
		username
	}
}
export function loginSuccess(username){		
	return{		
		type: LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		username
	}

}	
export function loginFailed(message){
	return{		
		type: LOGIN_FAILED,
		isFetching: false,
		isAuthenticated: false,	
		hasError: true,
		message	
	}
}	


export function gologin(username, password){

	let config = {
	    method: 'POST',
	    headers: { 
	    	 'Accept': 'application/json',
        	 'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
	    	username: username,
	    	password: password,
	    })
  	}	

	//console.log(config)
	return dispatch=>{
		dispatch(loginAttempt(username))	
		// return setTimeout(()=>{
		// 	dispatch(loginSuccess(username))
		// 	//console.log("siccess")
		// 	dispatch(push('/dashboard'))

		// }, 5000)t
		fetch('http://localhost:3000/login', config)
		.then(response=>response.json()
			.then(data=>({ data, response }))
		 ).then(({ data, response })=>{
		 	//console.log(data)
		 	if (parseInt(data.status)==1){
		 		//console.log(parseInt(data.status))
				dispatch(push('/dashboard'))
		 	}else{
		 		dispatch(loginFailed(data.message))
		 	}
		 	
		 })
		.catch(error => { 
			dispatch(loginFailed('Database error'))
			console.log('request failed', error) 
		})
		
	}
}


//https://www.youtube.com/watch?v=DVEsNYS1Cgo