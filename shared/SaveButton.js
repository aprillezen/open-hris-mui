import React, { PropTypes } from 'react'

class SaveButton extends React.Component{
	render(){
		if (this.props.isSaving){
			return(
				<button type="submit" className={this.props.sStyle} disabled="disabled">
					<i className="fa fa-spinner fa-spin fa-1x fa-fw"></i> <strong>Saving...</strong>
				</button>
			)
		}else{
			return <button type="submit" className={this.props.sStyle}><strong>{this.props.caption}</strong></button>
		}
	}
}
SaveButton.propTypes = {
	caption: React.PropTypes.string,
	isSaving: React.PropTypes.bool.isRequired,	
	sStyle: React.PropTypes.string
}
SaveButton.defaultProps = { isSaving: false, sStyle:'btn btn-success' }
export default SaveButton