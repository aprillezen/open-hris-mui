import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import SaveButton from   '../../shared/SaveButton'
import Alert from '../../shared/Alert'
import Notification from 'react-notification-system'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import BackIco from 'material-ui/svg-icons/navigation/arrow-back'
import DoneIco from 'material-ui/svg-icons/action/done'
import FontIcon from 'material-ui/FontIcon'
import { emp_headerStyle, emp_iconAddStyle,emp_headerTitleStyle,paper_profile} from '../../styles'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

const Id_fldWidth = {
	width: 150
}


class EmployeeAddForm extends Component{

	constructor(props){
		super(props)
		props.loadForm()	
	}

	onValueChanged(e){			
		this.props.valueChanged(this.props.data, e.target.name, e.target.value)		
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
		if (_.isEmpty(this.props.data.employeeId) || _.isEmpty(this.props.data.fname) || 
			_.isEmpty(this.props.data.lname) || _.isEmpty(this.props.data.mname) || _.isEmpty(this.props.data.birthdate)){			
			this.props.saveFailed(invalid_msg)
			ReactDOM.findDOMNode(this).scrollIntoView()
			return
		}
		this.props.save(this.props.data, this.props.editMode)
	}

	showNotif(msg){
		this.refs.notify.addNotification({
			message: msg,
			level: 'success',
			position: 'tc',
			autoDismiss: 3
		})
	}

	handleBack(e){
		this.context.router.push('/employees/list')
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.saveSuccess){
			this.showNotif("New employee sucessfully saved.")
			this.context.router.push('/employees/profile/'+this.props.data.id)
		}
	}

	render(){

		const textareaStyle = {
		  width: '100%'
		}
		const {data ,hasError, errorMessage, isSaving} = this.props	

		return(
				<div className="child-content">			         
					<div className="child-content-header">
						<Toolbar style={emp_headerStyle}>
							 <ToolbarGroup>							 	
							 	<IconButton 							 	
							 		style={emp_iconAddStyle} 							 		
							 		onClick = {this.handleBack.bind(this)}>
							 		<BackIco/>
							 	</IconButton>
							 	<ToolbarTitle style={emp_headerTitleStyle} text="Add Employee" />							 	
							 </ToolbarGroup>							 
						</Toolbar>											
					</div>		

					<div className="child-main-content">		
						<Alert hasError={hasError} message={errorMessage}/>				
						<form onSubmit={this.handleSubmit.bind(this)}>
							<div className="row col-md-12">
								<div className="col-md-4">	
									<div className="form-group">	
										<label className="control-label">Employee Id<sup className="required_asterisk">*</sup> </label>					    							    						    	
										<input ref="employeeId" name="employeeId" type="text" className="form-control" style={Id_fldWidth} onChange={this.onValueChanged.bind(this)} value={data.employeeId}/>
									</div>
									
									<div className="form-group">	
										<label className="control-label">First Name<sup className="required_asterisk">*</sup> </label>					    							    						    	
										<input ref="fname" name="fname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.fname}/>
									</div>

									<div className="form-group">	
										<label className="control-label">Last Name<sup className="required_asterisk">*</sup> </label>					    							    						    	
										<input ref="lname" name="lname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.lname}/>
									</div>

									<div className="form-group">	
										<label className="control-label">Middle Name<sup className="required_asterisk">*</sup> </label>					    							    						    	
										<input ref="mname" name="mname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.mname}/>
									</div>

									<div className="form-group">	
										<label className="control-label">Birthdate<sup className="required_asterisk">*</sup> </label><br/>			    							    						    	
										<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.birthdate} onChange={this.birthdateChanged.bind(this)}/>
									</div>

									
									<div className="form-group">	
										<label className="control-label">Civil Status</label>
										<div className="radio-flex">	
											 <div className="radio radio-flex-el">										  
											    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={data.civilstat=="0"} value="0"/>
											    Single										  
										    </div>			
										     <div className="radio radio-flex-el">										   
											    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={data.civilstat=="1"} value="1"/>
											    Married										  
										    </div>
										    <div className="radio radio-flex-el">						 				   
											    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={data.civilstat=="2"} value="2"/>
											    Widow/er										  
										    </div>	
										    <div className="radio radio-flex-el">										   
											    <input type="radio" name="civilstat" onChange={this.civilValueChanged.bind(this)} checked={data.civilstat=="3"} value="3"/>
											    Separated									  
										    </div>
										</div>			    						    									
									</div>

									<div className="form-group">	
										<label className="control-label">Gender</label>		
										<div className="radio-flex">	    							    						    	
											<div className="radio radio-flex-el">										  
											    <input type="radio" name="gender" onChange={this.genderValueChanged.bind(this)} checked={data.gender=="0"} value="0"/>
											    Male										  
										    </div>			
										     <div className="radio radio-flex-el">										   
											    <input type="radio" name="gender" onChange={this.genderValueChanged.bind(this)} checked={data.gender=="1"} value="1"/>
											    Female										  
										    </div>		
										 </div>
									</div>																														
								</div>

								<div className="col-md-4">
									<div className="form-group">	
										<label className="control-label">Address</label>	
										<textarea ref="address" name="address" style={textareaStyle} className="form-control" rows="2" onChange={this.onValueChanged.bind(this)} defaultValue={data.address}></textarea>
									</div>

									<div className="form-group">	
										<label className="control-label">City</label>	
										<input ref="city" name="city" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.city}/>
									</div>

									<div className="form-group">	
										<label className="control-label">Province</label>	
										<input ref="province" name="province" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.province}/>
									</div>

									<div className="form-group">	
										<label className="control-label">Zip Code</label>	
										<input ref="zipcode" name="zipcode" type="text" className="form-control" style={Id_fldWidth} onChange={this.onValueChanged.bind(this)} value={data.zipcode}/>
									</div>

									<div className="form-group">	
										<label className="control-label">Mobile Phone</label>	
										<input ref="mobilephone" name="mobilephone" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.mobilephone}/>
									</div>

									<div className="form-group">	
										<label className="control-label">Home Phone</label>	
										<input ref="homephone" name="homephone" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.homephone}/>
									</div>

									<div className="form-group">	
										<label className="control-label">Email Address</label>	
										<input ref="emailadd" name="emailadd" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.emailadd}/>
									</div>									
								</div>
								<div className="col-md-4">
									<div className="form-group">	
										<label className="control-label">Photo</label><br/>				    							    						    	
										<img src="/images/nopic.png"  className="img-thumbnail"/>
									</div>
								</div>	
							</div>
							<div className="row save-container">
								<SaveButton isSaving={isSaving} sStyle="btn btn-primary" caption="&nbsp;&nbsp;Save&nbsp;&nbsp;" />								
								&nbsp;&nbsp;<button type="button" className="btn btn-default" onClick = {this.handleBack.bind(this)}>Cancel</button>
							</div>
						</form>
						
					</div>

					<Notification ref="notify"/>
				</div>
			
		)
	}
}

EmployeeAddForm.contextTypes = {
	router : React.PropTypes.object
}

export default EmployeeAddForm

