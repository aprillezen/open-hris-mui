import React, {Component} from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import ReactDOM from 'react-dom'
import Alert from '../../shared/Alert'
import SaveButton from   '../../shared/SaveButton'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { JOB_LEVELS_DROPDOWN, PAY_SCHEDULE_DROPDOWN, EMPLOYMENT_STATUS_DROPDOWN } from '../../shared/Const'

class Employment_Form extends Component{

	cancel(e){
		this.props.cancelEdit()
	}
	onValueChanged(e){			
		this.props.valueChanged(e.target.name, e.target.value)		
	}
	categoryValueChanged(e){
		this.props.valueChanged('category', e.target.value)
	}
	onSelectChanged(field, val){	
		this.props.valueChanged(field, val)		
	}
	modeValueChange(e){
		this.props.valueChanged('paymentmode', e.target.value)
	}	
	startDateChanged(e){		
		this.props.dateChanged("startdate", e)
	}
	sepDateChanged(e){		
		this.props.dateChanged("separationdate", e)
	}
	handleSubmit(e){				
		const invalid_msg="Please enter required (*) fields."
		e.preventDefault()
		if (_.isEmpty(this.props.data.startdate)){			
			this.props.saveFailed(invalid_msg)
			ReactDOM.findDOMNode(this).scrollIntoView()
			return
		}
		if (!this.props.withdata){
			if (_.isEmpty(this.props.data.jobtitle) || _.isEmpty(this.props.data.joblevel) || 
				_.isEmpty(this.props.data.schedule) || _.isEmpty(this.props.data.empstatus) || 
				_.isEmpty(this.props.data.branch) || _.isEmpty(this.props.data.department) || 
				_.isEmpty(this.props.data.taxstatus)){
				this.props.saveFailed(invalid_msg)
				ReactDOM.findDOMNode(this).scrollIntoView()
				return
			}	
		}
		 
 		this.props.update(this.props.data, this.props.withdata)		
	}

	render(){
		
		const { hasError, errorMessage, updateSuccess, data, isSaving, jobtitles, branches, department, taxstatus, withdata } = this.props

		return(
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="row col-md-12">
						<div className="form-category-title">
							<h4>Job Information</h4>							
						</div>
						<Alert hasError={hasError} message={errorMessage}/>
						<div className="col-md-4">	
							<div className="form-group">	
								<label className="control-label">Start of Employment<sup className="required_asterisk">*</sup></label><br/>			    							    						    	
								<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.startdate} onChange={this.startDateChanged.bind(this)}/>
							</div>
							<div className="form-group">	
								<label className="control-label">Job Title<sup className="required_asterisk">*</sup></label>					    							    						    	
								<Select ref="jobtitle" value={data.jobtitle} options={jobtitles} onChange={this.onSelectChanged.bind(this,'jobtitle')} clearable={false} searchable={true} />							
							</div>	
							<div className="form-group">	
								<label className="control-label">Job Level<sup className="required_asterisk">*</sup></label>					    							    						    	
								<Select name="joblevel" value={data.joblevel} options={JOB_LEVELS_DROPDOWN} onChange={this.onSelectChanged.bind(this,'joblevel')} clearable={false} searchable={false} />								
							</div>	
							<div className="form-group">	
								<label className="control-label">Employee Category<sup className="required_asterisk">*</sup></label>
								<div className="radio-flex">	    							    						    	
									<div className="radio radio-flex-el">										  
									    <input type="radio" name="category" onChange={this.categoryValueChanged.bind(this)} checked={data.category=="0"} value="0"/>
									    Monthly										  
								    </div>			
								     <div className="radio radio-flex-el">										   
									    <input type="radio" name="category" onChange={this.categoryValueChanged.bind(this)} checked={data.category=="1"} value="1"/>
									    Daily										  
								    </div>		
								 </div>							
							</div>	
							<div className="form-group">	
								<label className="control-label">Payroll Schedule<sup className="required_asterisk">*</sup></label>					    							    						    	
								<Select name="schedule" value={data.schedule} options={PAY_SCHEDULE_DROPDOWN} onChange={this.onSelectChanged.bind(this,'schedule')} clearable={false} searchable={false} />							
							</div>	
							<div className="form-group">	
								<label className="control-label">Employment Status<sup className="required_asterisk">*</sup></label>					    							    						    	
								<Select name="schedule" value={data.empstatus} options={EMPLOYMENT_STATUS_DROPDOWN} onChange={this.onSelectChanged.bind(this,'empstatus')} clearable={false} searchable={false} />							
							</div>	
							<div className="form-group">	
								<label className="control-label">Separation Date</label><br/>			    							    						    	
								<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.separationdate}  isClearable={true} onChange={this.sepDateChanged.bind(this)}/>						
							</div>	
							<div className="form-group">	
								<label className="control-label">Mode of Payment</label>					    							    						    	
								<div className="radio-flex">	    							    						    	
									<div className="radio radio-flex-el">										  
									    <input type="radio" name="paymentmode" onChange={this.modeValueChange.bind(this)} checked={data.paymentmode=="0"} value="0"/>
									    Bank										  
								    </div>			
								     <div className="radio radio-flex-el">										   
									    <input type="radio" name="paymentmode" onChange={this.modeValueChange.bind(this)} checked={data.paymentmode=="1"} value="1"/>
									    Cash										  
								    </div>		
								 </div>									
							</div>	
						</div>

						<div className="col-md-4">
							<div className="form-group">	
								<label className="control-label">Assignment/Branch</label>					    							    						    	
								<Select name="branch" value={data.branch} options={branches} onChange={this.onSelectChanged.bind(this,'branch')} clearable={false} searchable={true} />							
							</div>	
							<div className="form-group">
								<label className="control-label">Department</label>					    							    						    	
								<Select name="department" value={data.department} options={department} onChange={this.onSelectChanged.bind(this,'department')} clearable={false} searchable={true} />						
							</div>	
							<div className="form-group">
								<label className="control-label">S.S.S. No.</label>					    							    						    	
								<input ref="sssno" name="sssno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.sssno}/>
							</div>	
							<div className="form-group">
								<label className="control-label">PhilHealth No.</label>					    							    						    	
								<input ref="philhealthno" name="philhealthno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.philhealthno}/>
							</div>
							<div className="form-group">
								<label className="control-label">PagIbig No.</label>					    							    						    	
								<input ref="pagibigno" name="pagibigno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.pagibigno}/>
							</div>	
							<div className="form-group">
								<label className="control-label">TIN No.</label>					    							    						    	
								<input ref="tin" name="tin" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.tin}/>
							</div>	
							<div className="form-group">
								<label className="control-label">Tax Status<sup className="required_asterisk">*</sup></label>					    							    						    	
								<Select name="taxstatus" value={data.taxstatus} options={taxstatus} onChange={this.onSelectChanged.bind(this,'taxstatus')} clearable={false} searchable={true} />
							</div>					
						</div>
						<div className="col-md-4">
							
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


export default Employment_Form



