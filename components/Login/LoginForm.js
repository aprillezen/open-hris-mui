import React, {PropTypes} from 'react'
import _ from 'lodash'
import LoginAlert from '../Alert'
import LoginButton from './LoginButton'



class LoginForm extends React.Component{
	
	onSubmit(e){	
	    e.preventDefault()
	   
		if (_.isEmpty(this.refs.username.value)){
			this.props.failedLogin("Please enter your username!")	
			return
		}else if (_.isEmpty(this.refs.pwd.value)){
			this.props.failedLogin("Please enter your password")	
			return
		}	
  		this.props.trylogin(this.refs.username.value,this.refs.pwd.value);
  		this.refs.pwd.value=''
	}

	render(){		

		const { isAuthenticated, isFetching, hasError, message } = this.props

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
				                <LoginButton isLogging={isFetching} />
				                <label className="checkbox pull-left">
				                    <input type="checkbox" value="remember-me" />
				                    Remember me
				                </label>
				                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
			                </form>
			                <LoginAlert hasError={hasError} message={message}/>
			            </div>
			            
			        </div>
			    </div>
			</div>
		)
	}
}

export default LoginForm