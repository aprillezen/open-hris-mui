import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'

const mapStateToProps=(state)=>{
	return{
		user: state.user
	}
}

const LoginContainer = connect(mapStateToProps)(LoginForm)

export default LoginContainer

