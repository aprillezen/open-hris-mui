import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED} from '../actions'
const login = (state , action)=>{
	switch(action.type){
		case LOGIN_ATTEMPT:
			return Object.assign({}, state,{
				isFetching: true,
				isAuthenticated: false,
				user: actions.creds
			})

		case LOGIN_SUCCESS:
			return Object.assign({}, state,{
				isFetching: false,
				isAuthenticated: true,
				user: actions.user,
				errorMsg: ''
			})
		case LOGIN_FAILED:
			return Object.assign({}, state,{
				isFetching: false,
				isAuthenticated: false,				
				errorMsg: actions.message
			})
		default:
			return state
	}

}

export default login