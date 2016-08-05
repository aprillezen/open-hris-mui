import React, { PropTypes } from 'react'

class Alert extends React.Component{
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

Alert.propTypes = {
	message: PropTypes.string,
	hasError: React.PropTypes.bool.isRequired,	
}
Alert.defaultProps = { hasError: false }

export default Alert