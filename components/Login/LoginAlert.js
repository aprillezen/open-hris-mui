import React, { PropTypes } from 'react'

class LoginAlert extends React.Component{
	render(){
		if (this.props.hasError){
			return(

				<div className="alert alert-danger" role="alert">				  
				  <strong>Error!</strong> { this.props.message }
				</div>
			)
		}else{
			return null
		}
	}
}

LoginAlert.propTypes = {
	message: PropTypes.string.isRequired,
	hasError: React.PropTypes.bool.isRequired,	
}
LoginAlert.defaultProps = { hasError: false }

export default LoginAlert