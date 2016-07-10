import React, { PropTypes } from 'react'

class MsgAlert extends React.Component{
 
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

MsgAlert.propTypes = {
	mType : PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	hasError: React.PropTypes.bool.isRequired,	
}
MsgAlert.defaultProps = { hasError: false }
export default MsgAlert