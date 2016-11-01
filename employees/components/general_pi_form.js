import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ReactDOM from 'react-dom'
import Alert from '../../shared/Alert'
import SaveButton from   '../../shared/SaveButton'
import Select from 'react-select'
import { CIVIL_STATUS_DROPDOWN } from '../../shared/Const'

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
	onSelectChanged(field, val){			
		this.props.valueChanged(field, val.value)		
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

		const textareaStyle = {
		  width: '100%'
		}

		const { data, isSaving, isGeneralEdit, updateSuccess, updateError, errorMessage} = this.props

		return(
				<form onSubmit={this.handleSubmit.bind(this)}>
				    <Alert hasError={updateError} message={errorMessage}/>
					<div className="row col-md-12">
						<div className="form-category-title">
							<h4>General Information</h4>							
						</div>
						<div className="col-md-4">	
							<div className="form-group">	
								<label className="control-label">Employee Id</label>					    							    						    	
								<input ref="employeeId" name="employeeId" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.employeeId}/>								
							</div>	
							<div className="form-group">	
								<label className="control-label">First Name</label>					    							    						    	
								<input ref="fname" name="fname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.fname}/>								
							</div>	
							<div className="form-group">	
								<label className="control-label">Last Name</label>					    							    						    									
								<input ref="lname" name="lname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.lname}/>
							</div>
							<div className="form-group">	
								<label className="control-label">Middle Name</label>					    							    						    									
								<input ref="mname" name="mname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.mname}/>
							</div>	
							<div className="form-group">	
								<label className="control-label">Birthdate</label><br/>				    							    						    									
								<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.birthdate} onChange={this.birthdateChanged.bind(this)}/>
							</div>		
							<div className="form-group">	
								<label className="control-label">Civil Status</label>					    							    						    									
								<Select name="civilstat" value={data.civilstat} options={CIVIL_STATUS_DROPDOWN} onChange={this.onSelectChanged.bind(this,'civilstat')} clearable={false} searchable={false} />
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
								<label className="control-label">Adress</label>					    							    						    	
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
								<label className="control-label">Zip</label>					    							    						    	
								<input ref="zipcode" name="zipcode" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.zipcode}/>								
							</div>
							<div className="form-group">	
								<label className="control-label">Home Phone</label>					    							    						    	
								<input ref="homephone" name="homephone" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.homephone}/>
							</div>	
							<div className="form-group">	
								<label className="control-label">Mobile Phone</label>					    							    						    	
								<input ref="mobilephone" name="mobilephone" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.mobilephone}/>
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
					<div className="row col-md-12">
						<SaveButton isSaving={isSaving} sStyle="btn btn-primary" caption="Save Changes" />&nbsp;
						<button className="btn btn-default" type="button" onClick={this.cancel.bind(this)}>Cancel</button>
					</div>				
				</form>


			)
	}
}

export default General_PI



