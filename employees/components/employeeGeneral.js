import React, {Component} from 'react'

class EmployeeGeneral extends Component{

	render(){
		return(
				<div className="col-md-12">
					<form className="form-horizontal">
						 <h3>Personal Information</h3>	
						 <hr/>	
				 		<div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Employee Id</label>					    
						    <div className="col-sm-5">								    	
						    	<label className="field_value">000003</label>
						    </div>	
						    <div className="col-sm-3">								    	
						    	<button type="button" className="btn btn-default pull-right"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">First Name</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">Dondon</label>
						    </div>								   
						 </div>	
						  <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Last Name</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">Abion</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Middle Name</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">Tuyay</label>
						    </div>								   
						 </div>		
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Birthdate</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">October 19, 1979</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Civil Status</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">Married</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Gender</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">Male</label>
						    </div>								   
						 </div>						 						
					</form>
			    </div>
			)
	}
}


export default EmployeeGeneral