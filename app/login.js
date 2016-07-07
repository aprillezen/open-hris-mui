import React from 'react'
import _ from 'lodash'
import MsgAlert from '../components/cAlerts'


class AppLogin extends React.Component{
	constructor(){
		super()
		this.state = {
			username: '',
			pwd:'',
			hasError:false,
			errorMsg:''
		}

	}

	onSubmit(e){
	    e.preventDefault()
	    var err="Invalid username/password!"

		if (_.isEmpty(this.state.username)){
			this.setState({ hasError: true, errorMsg: err });	
			return
		}else if (_.isEmpty(this.state.pwd)){
			this.setState({ hasError: true, errorMsg: err });	
			return
		}	
     	
     	this.setState({hasError:false})     	 
     	this.context.router.replace("/dashboard")

	}

	onChange(e){
		if (_.isEqual(e.target.name,"username")){
			this.setState({ hasError: false, errorMsg:'', username: e.target.value });
		}else if (_.isEqual(e.target.name,"pwd")){
			this.setState({ hasError: false, errorMsg:'', pwd: e.target.value });
		}			
	}   

	closeAlert(){
		this.setState({hasError:false})
	}

	render(){		
		return(			
			<div className="container">
			    <div className="row">
			        <div className="col-sm-6 col-md-4 col-md-offset-4">
			            <h1 className="text-center login-title">Academbox</h1>
			            <div className="account-wall">
			                <img className="profile-img" src="images/logo.gif" />			                  
			 				<MsgAlert mType="danger" hideAlert={this.closeAlert.bind(this)} hasError={this.state.hasError} message={this.state.errorMsg}></MsgAlert>
			                <form className="form-signin"  onSubmit={this.onSubmit.bind(this)}>	
				                <input name="username" type="text" className="form-control" placeholder="Email" onChange={this.onChange.bind(this)} value={this.state.username} autoFocus="autoFocus"/>
				                <input name="pwd" type="password" className="form-control" placeholder="Password" onChange={this.onChange.bind(this)} value={this.state.pwd} />
				                <button className="btn-lg btn-block btn-save" type="submit">
				                    Sign in</button>
				                <label className="checkbox pull-left">
				                    <input type="checkbox" value="remember-me" />
				                    Remember me
				                </label>
				                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
			                </form>
			            </div>
			            <a href="#" className="text-center new-account">Create an account </a>
			        </div>
			    </div>
			</div>


			)
	}
}

AppLogin.contextTypes = {
	router: React.PropTypes.object.isRequired
}
export default AppLogin