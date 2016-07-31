import React, { PropTypes } from 'react'

class SaveButton extends React.Component{
	render(){
		if (this.props.isSaving){
			return(
				<button type="submit" className="btn btn-success" disabled="disabled">
					<i className="fa fa-spinner fa-spin fa-1x fa-fw"></i> <strong>Saving...</strong>
				</button>
			)
		}else{
			return <button type="submit" className="btn btn-success"><strong>Save Profile</strong></button>
		}
	}
}
SaveButton.propTypes = {
	isSaving: React.PropTypes.bool.isRequired,	
}
SaveButton.defaultProps = { isSaving: false }
export default SaveButton