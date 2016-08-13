import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import SaveButton from   '../../shared/SaveButton'
import Alert from '../../shared/Alert'
import Notification from 'react-notification-system'
import DatePicker from 'react-datepicker'
import moment from 'moment'

class employeeForm extends Component{


	constructor(props){
		super(props)
		if (props.params.id=='add'){
			props.loadForm(false,"Create new employee")			
		}
	}

	onValueChanged(e){			
		this.props.valueChanged(this.props.dataForm, e.target.name, e.target.value)		
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

	handleSubmit(e){
		const invalid_msg="Please enter required (*) fields."
		e.preventDefault()
		if (_.isEmpty(this.props.dataForm.employeeId) || _.isEmpty(this.props.dataForm.fname) || 
			_.isEmpty(this.props.dataForm.lname) || _.isEmpty(this.props.dataForm.mname) || _.isEmpty(this.props.dataForm.birthdate)){			
			this.props.saveFailed(invalid_msg)
			ReactDOM.findDOMNode(this).scrollIntoView()
			return
		}
		this.props.save(this.props.dataForm, this.props.editMode)
	}

	showNotif(msg){
		this.refs.notify.addNotification({
			message: msg,
			level: 'success',
			position: 'tc',
			autoDismiss: 3
		})
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.saveSuccess){
			this.showNotif("New employee sucessfully saved.")
		}
	}

	render(){

		const textareaStyle = {
		  width: '100%'
		}
		const { title, dataForm,hasError, errorMessage, isSaving} = this.props	

		return(
			<div>
				<br/>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title pull-left">{title}</h3>
						<Link  to="/employees/list" className="btn btn-default pull-right">Back</Link>
				        <div className="clearfix"></div>
					</div>
					<div className="panel-body">
						<br/>
						<Alert hasError={hasError} message={errorMessage}/>
						<div className="col-md-3">					    
					    	<div className="well profile-photo"></div>
					    </div>
											
						<div className="col-md-7">
							<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
								 <h3>Personal Information</h3>	
								 <hr/>							 
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Employee Id<sup className="required_asterisk">*</sup> </label>					    
								    <div className="col-sm-4">								    	
								    	<input ref="employeeId" name="employeeId" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.employeeId}/>
								    </div>								   
								 </div>
								 <div className="form-group">		
									<label className="col-sm-3 control-label">First Name<sup className="required_asterisk">*</sup></label>						    					    
								    <div className="col-sm-6">								    	
								    	<input ref="fname" name="fname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.fname}/>
								    </div>								  
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Last Name<sup className="required_asterisk">*</sup></label>							    								   
								    <div className="col-sm-6">								    	
								    	<input ref="lname" name="lname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.lname}/>
								    </div>								    
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Middle Name<sup className="required_asterisk">*</sup></label>							    								   
								    <div className="col-sm-6">								    	
								    	<input ref="mname" name="mname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.mname}/>
								    </div>
								 </div>
								  <div className="form-group">	
								    <label className="col-sm-3 control-label">Birthdate<sup className="required_asterisk">*</sup></label>							    								   						    
								    <div className="col-sm-5">								    	
								    	
								    	<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={dataForm.birthdate} onChange={this.birthdateChanged.bind(this)}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Civil Status</label>									  	
								    <div className="col-sm-4">								    	
									    <div className="radio">										  
										    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={dataForm.civilstat=="0"} value="0"/>
										    Single										  
									    </div>			
									     <div className="radio">										   
										    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={dataForm.civilstat=="1"} value="1"/>
										    Married										  
									    </div>
									    <div className="radio">						 				   
										    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={dataForm.civilstat=="2"} value="2"/>
										    Widowed/Widower										  
									    </div>	
									    <div className="radio">										   
										    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={dataForm.civilstat=="3"} value="3"/>
										    Separated									  
									    </div>
									 </div>						   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Gender</label>									  	
								    <div className="col-sm-4">								    	
									    <div className="radio">										  
										    <input type="radio" name="gender" onChange={this.genderValueChanged.bind(this)} checked={dataForm.gender=="0"} value="0"/>
										    Male										  
									    </div>			
									     <div className="radio">										   
										    <input type="radio" name="gender" onChange={this.genderValueChanged.bind(this)} checked={dataForm.gender=="1"} value="1"/>
										    Female										  
									    </div>									   
									 </div>						   
								 </div>
								 <br/>
								 <h3>Contact Information</h3>		
								 <hr/>					 
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Address</label>						    
								    <div className="col-sm-7">								    	
								    	<textarea ref="address" name="address" style={textareaStyle} className="form-control" rows="2" onChange={this.onValueChanged.bind(this)} defaultValue={dataForm.address}></textarea>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">City</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="city" name="city" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.city}/>
								    </div>								   
								 </div>
								<div className="form-group">	
								    <label className="col-sm-3 control-label">Province</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="province" name="province" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.province}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Zip</label>							    								   						    
								    <div className="col-sm-3">								    	
								    	<input ref="zipcode" name="zipcode" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.zipcode}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Home Phone</label>							    								   						    
								    <div className="col-sm-5">								    	
								    	<input ref="homephone" name="homephone" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.homephone}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Mobile Phone</label>							    								   						    
								    <div className="col-sm-5">								    	
								    	<input ref="mobilephone" name="mobilephone" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.mobilephone}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Email</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="emailadd" name="emailadd" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.emailadd}/>
								    </div>								   
								 </div>
								  <div className="row form-group">							    
								    <div className="col-sm-3">								    	
								    </div>
								    <div className="col-sm-6">								        
								    	<SaveButton isSaving={isSaving} sStyle="btn btn-success btn-lg" caption="Save" />
								    </div>
								 </div>
							</form>
					    </div>

					    
					</div>						 	
				</div>	

				<Notification ref="notify"/>
			</div>
		)
	}
}

export default employeeForm



//<input ref="birthdate" name="birthdate" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={dataForm.birthdate}/>


