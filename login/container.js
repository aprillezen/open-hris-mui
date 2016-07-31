import { gologin, loginFailed } from './actions'
import LoginForm from './components/LoginForm'
import { connect } from 'react-redux'

const mapStateToProps=(state)=>{
	return{
		username: state.login.username,
		isFetching: state.login.isFetching,
		isAuthenticated: state.login.isAuthenticated,
		message: state.login.message,
		hasError: state.login.hasError
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		trylogin: (username,password) => {
      		dispatch(gologin(username,password))
    	},
    	failedLogin:(message)=>{
    		dispatch(loginFailed(message))
    	}
	}
}


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginContainer

