import React, {Component} from 'react'
import { Link } from 'react-router'
import SaveButton from   '../../shared/SaveButton'

class employeeForm extends Component{

	handleSubmit(e){

	}

	render(){

		const textareaStyle = {
		  width: '100%'
		}

		return(
			<div>
				<br/>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title pull-left">New Employee</h3>
						<Link  to="/employees/list" className="btn btn-default pull-right">Back</Link>
				        <div className="clearfix"></div>
					</div>
					<div className="panel-body">
						<br/>

						<div className="col-md-3">
					    	
					    	<div className="well profile-photo"></div>
					    </div>
						
						
						<div className="col-md-6">
							<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
								 <h3>Personal Information</h3>	
								 <hr/>							 
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Employee Id </label>						    
								    <div className="col-sm-4">								    	
								    	<input ref="employeeId" name="employeeId" type="text" className="form-control"/>
								    </div>								   
								 </div>
								 <div className="form-group">		
									<label className="col-sm-3 control-label">First Name</label>						    					    
								    <div className="col-sm-6">								    	
								    	<input ref="firstname" name="firstname" type="text" className="form-control"/>
								    </div>								  
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Last Name</label>							    								   
								    <div className="col-sm-6">								    	
								    	<input ref="lastname" name="lastname" type="text" className="form-control"/>
								    </div>								    
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Middle Name</label>							    								   
								    <div className="col-sm-6">								    	
								    	<input ref="middlename" name="middlename" type="text" className="form-control"/>
								    </div>
								 </div>
								  <div className="form-group">	
								    <label className="col-sm-3 control-label">Birthdate</label>							    								   						    
								    <div className="col-sm-5">								    	
								    	<input ref="birthdate" name="birthdate" type="text" className="form-control"/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Civil Status</label>									  	
								    <div className="col-sm-4">								    	
									    <div className="radio">										  
										    <input type="radio" name="optionStatus" id="optionsRadios1" value="option1" />
										    Single										  
									    </div>			
									     <div className="radio">										   
										    <input type="radio" name="optionStatus" id="optionsRadios1" value="option1" />
										    Married										  
									    </div>
									    <div className="radio">										   
										    <input type="radio" name="optionStatus" id="optionsRadios1" value="option1" />
										    Widowed/Widower										  
									    </div>	
									    <div className="radio">										   
										    <input type="radio" name="optionStatus" id="optionsRadios1" value="option1" />
										    Separated									  
									    </div>
									 </div>						   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Gender</label>									  	
								    <div className="col-sm-4">								    	
									    <div className="radio">										  
										    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
										    Male										  
									    </div>			
									     <div className="radio">										   
										    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
										    Female										  
									    </div>									   
									 </div>						   
								 </div>
								 <br/>
								 <h3>Contact Information</h3>								 
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Address</label>						    
								    <div className="col-sm-7">								    	
								    	<textarea style={textareaStyle} className="form-control" rows="2"></textarea>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">City</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="birthdate" name="birthdate" type="text" className="form-control"/>
								    </div>								   
								 </div>
								<div className="form-group">	
								    <label className="col-sm-3 control-label">Province</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="birthdate" name="birthdate" type="text" className="form-control"/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Zip</label>							    								   						    
								    <div className="col-sm-3">								    	
								    	<input ref="birthdate" name="birthdate" type="text" className="form-control"/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Home Phone</label>							    								   						    
								    <div className="col-sm-5">								    	
								    	<input ref="birthdate" name="birthdate" type="text" className="form-control"/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Mobile Phone</label>							    								   						    
								    <div className="col-sm-5">								    	
								    	<input ref="birthdate" name="birthdate" type="text" className="form-control"/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Email</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="birthdate" name="birthdate" type="text" className="form-control"/>
								    </div>								   
								 </div>
								  <div className="row form-group">							    
								    <div className="col-sm-3">								    	
								    </div>
								    <div className="col-sm-6">								        
								    	<SaveButton isSaving={false} sStyle="btn btn-success btn-lg" caption="Save" />
								    </div>
								 </div>
							</form>
					    </div>

					    <div className="col-md-2"></div>
					</div>						 	
				</div>	

				
			</div>
		)
	}
}

export default employeeForm