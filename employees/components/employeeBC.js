import React, {Component} from 'react'

class EmployeeBC extends Component{

	render(){
		return(
				<div className="col-md-12">
					<div className="form-horizontal">
						 <h3>Benefits & Compensation </h3>	
						 <hr/>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Monthly Salary</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">45,000.00</label>
						    </div>
						    <div className="col-sm-3">								    	
						    	<button type="button" className="btn btn-default pull-right"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button>
						    </div>								   
						 </div>	
						 <div className="form-group">
						 	<label className="col-sm-3 control-label field_label">Daily Rate</label>					    
						    <div className="col-sm-5">								    	
						    	<label className="field_value">1,560.00</label>
						    </div>								 									  
						 </div>	
						  <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">C.O.L.A</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">80</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Monthly Allowance</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">5,000.00</label>
						    </div>								   
						 </div>		
						  <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Daily Allowance</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">250.00</label>
						    </div>								   
						 </div>							 					 					
					</div>
			    </div>
			)
	}
}


export default EmployeeBC