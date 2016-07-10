import React, {PropTypes} from 'react'
import _ from 'lodash'
import MsgAlert from './Alerts'
import { gologin } from '../actions'


class LoginForm extends React.Component{
	
	onSubmit(e){	
	     e.preventDefault()
	    var user = { username: this.refs.username.value, password : this.refs.pwd.value}	    
	    console.log(user)
	    this.props.dispatch(gologin(user));
	 // console.log(creds)
	 // var err="Invalid username/password!"

		// if (_.isEmpty(this.state.username)){
		// 	this.setState({ hasError: true, errorMsg: err });	
		// 	return
		// }else if (_.isEmpty(this.state.pwd)){
		// 	this.setState({ hasError: true, errorMsg: err });	
		// 	return
		// }	
     	
  //    	this.setState({hasError:false})     	 
  //    	this.context.router.replace("/dashboard")
  
   	console.log(this.props)

	}

	
	closeAlert(){
		
	}

	render(){		

		//const { fields: { username, password, validation_message }, handleSubmit, submitting } = this.props;

		return(			
			<div className="container">
			    <div className="row">
			        <div className="col-sm-6 col-md-4 col-md-offset-4">
			            <h1 className="text-center login-title">Academbox</h1>
			            <div className="account-wall">
			                <img className="profile-img" src="images/logo.gif" />			                  			 				
			                <form className="form-signin" onSubmit={this.onSubmit.bind(this)}>				                	
				                <input ref="username" type="text" className="form-control" placeholder="Email" autoFocus="autoFocus" />
				                <input ref="pwd" type="password" className="form-control" placeholder="Password" />
				                <button className="btn-lg btn-block btn-save" type="submit">
				                    Sign in</button>
				                <label className="checkbox pull-left">
				                    <input type="checkbox" value="remember-me" />
				                    Remember me
				                </label>
				                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
			                </form>
			            </div>
			            
			        </div>
			    </div>
			</div>


			)
	}
}

LoginForm.contextTypes = {
	router: PropTypes.object.isRequired,
}


export default LoginForm