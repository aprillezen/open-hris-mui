import React, {Component} from 'react'
import moment from 'moment'

class General_View extends Component{

	render(){

		const { data } = this.props

		const civilStatus = [ "Single","Married","Widowed/Widower","Separated"]
		const gender = [ "Male","Female"]

		return(
				<div className="col-md-12">
					<div className="form-horizontal">
						 <h3>Personal Information</h3>	
						 <hr/>	
				 		<div className="form-group form-group-view">	
						 	<label className="col-sm-3 control-label">Employee Id</label>					    
						    <div className="col-sm-5">								    	
						    	<label className="field_value">{data.employeeId}</label>
						    </div>	
						    <div className="col-sm-3">								    	
						    	<button type="button" className="btn btn-default pull-right" onClick={this.props.onEdit}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button>
						    </div>								   
						 </div>	
						 <div className="form-group form-group-view">	
						 	<label className="col-sm-3 control-label">First Name</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.fname}</label>
						    </div>								   
						 </div>	
						  <div className="form-group form-group-view">	
						 	<label className="col-sm-3 control-label">Last Name</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.lname}</label>
						    </div>								   
						 </div>	
						 <div className="form-group form-group-view">	
						 	<label className="col-sm-3 control-label">Middle Name</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.mname}</label>
						    </div>								   
						 </div>		
						 <div className="form-group form-group-view">	
						 	<label className="col-sm-3 control-label">Birthdate</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{ moment(data.birthdate).format('MM/DD/YYYY')}</label>
						    </div>								   
						 </div>	
						 <div className="form-group form-group-view">	
						 	<label className="col-sm-3 control-label">Civil Status</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{civilStatus[parseInt(data.civilstat)]}</label>
						    </div>								   
						 </div>	
						 <div className="form-group form-group-view">	
						 	<label className="col-sm-3 control-label">Gender</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{gender[parseInt(data.gender)]}</label>
						    </div>								   
						 </div>						 						
					</div>
			    </div>

			)
	}
}

General_View.propTypes = {
	data: React.PropTypes.object.isRequired,
	onEdit: React.PropTypes.func.isRequired
}

export default General_View



