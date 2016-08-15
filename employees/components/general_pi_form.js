import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ReactDOM from 'react-dom'
import Alert from '../../shared/Alert'
import SaveButton from   '../../shared/SaveButton'

class General_PI extends Component{

	onValueChanged(e){			
		this.props.valueChanged(e.target.name, e.target.value)		
	}

	civilValueChanged(e){
		this.props.civilChanged(e.target.value)
	}

	genderValueChanged(e){
		this.props.genderChanged(e.target.value)
	}

	birthdateChanged(e){		
		this.props.birthChanged(e)
	}

	cancel(e){
		this.props.cancelEdit(this.props.data.id)
	}

	handleSubmit(e){
		const invalid_msg="Please enter required (*) fields."
		e.preventDefault()
		if (_.isEmpty(this.props.data.employeeId) || _.isEmpty(this.props.data.fname) || 
			_.isEmpty(this.props.data.lname) || _.isEmpty(this.props.data.mname) || _.isEmpty(this.props.data.birthdate)){			
			this.props.saveFailed(invalid_msg)
			ReactDOM.findDOMNode(this).scrollIntoView()
			return
		}		
		this.props.update(this.props.data)
	}

	render(){

		const { data, isSaving, isGeneralEdit, updateSuccess, updateError, errorMessage} = this.props

		return(
				<div className="col-md-12">
					<Alert hasError={updateError} message={errorMessage}/>
					<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
						 <h3>Personal Information</h3>	
						 <hr/>		
						 <div className="editForm">											 
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label">Employee Id<sup className="required_asterisk">*</sup> </label>					    
							    <div className="col-sm-4">								    	
							    	<input ref="employeeId" name="employeeId" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.employeeId}/>
							    </div>								   
							 </div>
							 <div className="form-group">		
								<label className="col-sm-3 control-label">First Name<sup className="required_asterisk">*</sup></label>						    					    
							    <div className="col-sm-6">								    	
							    	<input ref="fname" name="fname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.fname}/>
							    </div>								  
							 </div>
							 <div className="form-group">	
							    <label className="col-sm-3 control-label">Last Name<sup className="required_asterisk">*</sup></label>							    								   
							    <div className="col-sm-6">								    	
							    	<input ref="lname" name="lname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.lname}/>
							    </div>								    
							 </div>
							 <div className="form-group">	
							    <label className="col-sm-3 control-label">Middle Name<sup className="required_asterisk">*</sup></label>							    								   
							    <div className="col-sm-6">								    	
							    	<input ref="mname" name="mname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.mname}/>
							    </div>
							 </div>
							  <div className="form-group">	
							    <label className="col-sm-3 control-label">Birthdate<sup className="required_asterisk">*</sup></label>							    								   						    
							    <div className="col-sm-5">								    	
							    	
							    	<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.birthdate} onChange={this.birthdateChanged.bind(this)}/>
							    </div>								   
							 </div>
							 <div className="form-group">	
							    <label className="col-sm-3 control-label">Civil Status</label>									  	
							    <div className="col-sm-4">								    	
								    <div className="radio">										  
									    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={data.civilstat=="0"} value="0"/>
									    Single										  
								    </div>			
								     <div className="radio">										   
									    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={data.civilstat=="1"} value="1"/>
									    Married										  
								    </div>
								    <div className="radio">						 				   
									    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={data.civilstat=="2"} value="2"/>
									    Widowed/Widower										  
								    </div>	
								    <div className="radio">										   
									    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={data.civilstat=="3"} value="3"/>
									    Separated									  
								    </div>
								 </div>						   
							 </div>
							 <div className="form-group">	
							    <label className="col-sm-3 control-label">Gender</label>									  	
							    <div className="col-sm-4">								    	
								    <div className="radio">										  
									    <input type="radio" name="gender" onChange={this.genderValueChanged.bind(this)} checked={data.gender=="0"} value="0"/>
									    Male										  
								    </div>			
								     <div className="radio">										   
									    <input type="radio" name="gender" onChange={this.genderValueChanged.bind(this)} checked={data.gender=="1"} value="1"/>
									    Female										  
								    </div>									   
								 </div>						   
							 </div>
							  <br/>
							  <div className="row form-group">							    
							    <div className="col-sm-3">								    	
							    </div>
							    <div className="col-sm-6">								        
							    	<SaveButton isSaving={isSaving} sStyle="btn btn-success" caption="Save Changes" />
							    	&nbsp;<button className="btn btn-default" type="button" onClick={this.cancel.bind(this)}>Cancel</button>

							    </div>
							 </div>
						</div>
					</form>
			    </div>

			)
	}
}

export default General_PI



