import React, {Component} from 'react'
import moment from 'moment'
import {HOLIDAY_TYPE} from '../../../../shared/Const'
import _ from 'lodash'

class rowDetails extends Component{

	render(){

		let holdate = moment(this.props.data.transdate).format('MM/DD/YYYY')
		let requiredwork = "-"
		if (!_.isEmpty(this.props.data.requiredworkdate)){
				requiredwork = moment(this.props.data.requiredworkdate).format('MM/DD/YYYY')
			}	

		if (this.props.visible){
			return(
				<div className="rowDetails">
					<div className="col-md-12">
						<div className="form-horizontal">							
							 <div className="form-group form-group-view">	
							 	<label className="col-sm-3 control-label">Date of Holiday</label>					    
							    <div className="col-sm-4">								    	
							    	<label className="field_value">{holdate}</label>
							    </div>							  							   
							 </div>	
							 <div className="form-group form-group-view">
							 	<label className="col-sm-3 control-label field_label">Description</label>					    
							    <div className="col-sm-5">								    	
							    	<label className="field_value">{this.props.data.description}</label>
							    </div>								 									  
							 </div>	
							 <div className="form-group form-group-view">
							 	<label className="col-sm-3 control-label field_label">Holiday Type</label>					    
							    <div className="col-sm-5">								    	
							    	<label className="field_value">{HOLIDAY_TYPE[this.props.data.holidaytype]}</label>
							    </div>								 									  
							 </div>	
							 <div className="form-group form-group-view">
							 	<label className="col-sm-3 control-label field_label">Required Work Date</label>					    
							    <div className="col-sm-5">								    	
							    	<label className="field_value">{requiredwork}</label>
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

