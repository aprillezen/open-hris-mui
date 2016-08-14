import React, {Component} from 'react'
import moment from 'moment'

class General_CI extends Component{

	render(){

		const { data } = this.props
		
		return(
				<div className="col-md-12">
					<div className="form-horizontal">
						<h3>Contact Information</h3>		
						 <hr/>					 
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label">Address</label>						    
						    <div className="col-sm-5">								    	
						    	<label className="field_value">{data.address}</label>
						    </div>	
						    <div className="col-sm-3">								    	
						    	<button type="button" className="btn btn-default pull-right" onClick={this.props.onEdit}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button>
						    </div>								   
						 </div>
						 <div className="form-group">	
						    <label className="col-sm-3 control-label">City</label>							    								   						    
						    <div className="col-sm-6">								    	
						    	<label className="field_value">{data.city}</label>
						    </div>								   
						 </div>
						<div className="form-group">	
						    <label className="col-sm-3 control-label">Province</label>							    								   						    
						    <div className="col-sm-6">								    	
						    	<label className="field_value">{data.province}</label>
						    </div>								   
						 </div>
						 <div className="form-group">	
						    <label className="col-sm-3 control-label">Zip</label>							    								   						    
						    <div className="col-sm-3">								    	
						    	<label className="field_value">{data.zipcode}</label>
						    </div>								   
						 </div>
						 <div className="form-group">	
						    <label className="col-sm-3 control-label">Home Phone</label>							    								   						    
						    <div className="col-sm-5">								    	
						    	<label className="field_value">{data.homephone}</label>
						    </div>								   
						 </div>
						 <div className="form-group">	
						    <label className="col-sm-3 control-label">Mobile Phone</label>							    								   						    
						    <div className="col-sm-5">								    	
						    	<label className="field_value">{data.mobilephone}</label>
						    </div>								   
						 </div>
						 <div className="form-group">	
						    <label className="col-sm-3 control-label">Email</label>							    								   						    
						    <div className="col-sm-6">								    	
						    	<label className="field_value">{data.emailadd}</label>
						    </div>								   
						 </div>						 			 						
					</div>
			    </div>

			)
	}
}

General_CI.propTypes = {
	data: React.PropTypes.object.isRequired,
	onEdit: React.PropTypes.func.isRequired
}

export default General_CI



