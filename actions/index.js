import fetch from 'isomorphic-fetch'

export const LOGIN_ATTEMPT="LOGIN_ATTEMPT";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_FAILED="LOGIN_FAILED";



export function loginAttempt(user){
	return{
		type: LOGIN_ATTEMPT,
		isFetching: true,
		isAuthenticated: false,
		user
	}
}
export function loginSuccess(user){		
	return{		
		type: LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		user
	}

}	
export function loginFailed(message){
	return{		
		type: LOGIN_FAILED,
		isFetching: false,
		isAuthenticated: false,	
		message	
	}
}	

export function validate(creds){
	return dispatch=>{

		
	}
}

export function gologin(user){

	let config = {
	    method: 'POST',
	    headers: { 
	    	 'Accept': 'application/json',
        	 'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
	    	username: user.username,
	    	password: user.password,
	    })
  	}	

  	let t = JSON.stringify({
	    	username: user.username,
	    	password: user.password,
	    	})
  	console.log(t);

	return dispatch=>{
		dispatch(loginAttempt(user))	
		return fetch('http://localhost:3000/login', config)
			.then(response=>response.json()
				.then(data=>({ data, response }))
			 ).then(({ data, response })=>{
			 	console.log(data);
			 })
			.catch(error => { 
				dispatch(loginFailed('Database error'))
				console.log('request failed', error) 
			})
	}
}


//https://www.youtube.com/watch?v=DVEsNYS1Cgo