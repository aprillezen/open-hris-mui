import React, { PropTypes } from 'react'

class LoginButton extends React.Component{
	render(){
		if (this.props.isLogging){
			return(
				<button className="btn-lg btn-block btn-save" type="submit" disabled="disabled">
					<i className="fa fa-spinner fa-spin fa-1x fa-fw"></i> Signing...
				</button>
			)
		}else{
			return <button className="btn-lg btn-block btn-save" type="submit">Sign-In</button>
		}
	}
}
LoginButton.propTypes = {
	isLogging: React.PropTypes.bool.isRequired,	
}
LoginButton.defaultProps = { isLogging: false }
export default LoginButton