import React, {Component} from 'react'
import moment from 'moment'
import _ from 'lodash'

class rowDetails extends Component{

	render(){		

		if (this.props.visible){
			return(
				<div className="rowDetails">
					<div className="col-md-12">
						<div className="form-horizontal">														 
							 <div className="form-group form-group-view">
							 	<label className="col-sm-3 control-label field_label">Description</label>					    
							    <div className="col-sm-5">								    	
							    	<label className="field_value">{this.props.data.description}</label>
							    </div>								 									  
							 </div>								
						</div>
					</div>
				</div>
			)
		}else{
			return <div></div>
		}
		
	}
}

rowDetails.propTypes = {
	visible: React.PropTypes.bool.isRequired,
	data: React.PropTypes.object.isRequired
}

export default rowDetails

