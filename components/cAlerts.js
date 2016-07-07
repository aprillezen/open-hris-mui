import React, { PropTypes } from 'react'

class MsgAlert extends React.Component{

   onClose(){
   	  this.props.hideAlert();
   }

	render(){
		if (this.props.hasError){
			return(

				<div className="alert alert-danger" role="alert">
				  <button type="button" className="close" aria-label="Close" onClick={this.onClose.bind(this)}><span aria-hidden="true">&times;</span></button>
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
	hideAlert: React.PropTypes.func.isRequired
}
MsgAlert.defaultProps = { hasError: false }
export default MsgAlert