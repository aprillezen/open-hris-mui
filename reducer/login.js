import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED} from '../actions'

const initialstate = {
	isFetching: false,
	isAuthenticated: false,
	hasError: false,
	username: '',
	message: ''
}


const loginreducer = (state = initialstate , action)=>{
	switch(action.type){
		case LOGIN_ATTEMPT:
			return Object.assign({}, state,{
				isFetching: true,
				isAuthenticated: false,
				username: action.username,
				hasError: false
			})

		case LOGIN_SUCCESS:
			return Object.assign({}, state,{
				isFetching: false,
				isAuthenticated: true,
				username: action.username,
				hasError: false
			})
		case LOGIN_FAILED:
			return Object.assign({}, state,{
				isFetching: false,
				isAuthenticated: false,		
				username: action.username,		
				message: action.message,
				hasError: true

			})
		default:
			return state
	}

}

export default loginreducer