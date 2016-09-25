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
				<div className="col-md-12">					
					<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
						 <h3>Employment</h3>							 
						<Alert hasError={hasError} message={errorMessage}/>
						 <hr/>		
						 <div className="editForm">	
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">Start of Employment<sup className="required_asterisk">*</sup></label>					    
							    <div className="col-sm-4">								    	
							    	<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.startdate} onChange={this.startDateChanged.bind(this)}/>
							    </div>						    							  
							 </div>	
							 <div className="form-group">
							 	<label className="col-sm-4 control-label">Job Title<sup className="required_asterisk">*</sup></label>					    
							    <div className="col-sm-5">								    	
							    	<Select ref="jobtitle" value={data.jobtitle} options={jobtitles} onChange={this.onSelectChanged.bind(this,'jobtitle')} clearable={false} searchable={true} />
							    </div>								 									  
							 </div>	
							 <div className="form-group">
							 	<label className="col-sm-4 control-label">Job Level<sup className="required_asterisk">*</sup></label>					    
							    <div className="col-sm-4">								    	
							    	<Select name="joblevel" value={data.joblevel} options={JOB_LEVELS_DROPDOWN} onChange={this.onSelectChanged.bind(this,'joblevel')} clearable={false} searchable={false} />
							    </div>								 									  
							 </div>	
							  <div className="form-group">	
							 	<label className="col-sm-4 control-label">Employee Category<sup className="required_asterisk">*</sup></label>					    
					   			 <div className="col-sm-4">								    	
								    <div className="radio">										  
									    <input type="radio" name="category" onChange={this.categoryValueChanged.bind(this)} checked={data.category=="0"} value="0"/>
									    Monthly										  
								    </div>			
								     <div className="radio">										   
									    <input type="radio" name="category" onChange={this.categoryValueChanged.bind(this)} checked={data.category=="1"} value="1"/>
									    Daily										  
								    </div>									   
								 </div>									   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">Payroll Schedule<sup className="required_asterisk">*</sup></label>					    
							    <div className="col-sm-4">								    	
							    	<Select name="schedule" value={data.schedule} options={PAY_SCHEDULE_DROPDOWN} onChange={this.onSelectChanged.bind(this,'schedule')} clearable={false} searchable={false} />
							    </div>								   
							 </div>		
							  <div className="form-group">	
							 	<label className="col-sm-4 control-label">Employment Status<sup className="required_asterisk">*</sup></label>					    
							    <div className="col-sm-4">								    	
							    	<Select name="schedule" value={data.empstatus} options={EMPLOYMENT_STATUS_DROPDOWN} onChange={this.onSelectChanged.bind(this,'empstatus')} clearable={false} searchable={false} />
							    </div>								   
							 </div>		
							<div className="form-group">	
							 	<label className="col-sm-4 control-label">Separation Date</label>					    
							    <div className="col-sm-4">								    	
							    		<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.separationdate}  isClearable={true} onChange={this.sepDateChanged.bind(this)}/>
							    </div>								   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">Mode of Payment</label>					    
							    <div className="col-sm-4">								    	
							    	<div className="radio">										  
									    <input type="radio" name="paymentmode" onChange={this.modeValueChange.bind(this)} checked={data.paymentmode=="0"} value="0"/>
									    Bank								  
								    </div>			
								     <div className="radio">										   
									    <input type="radio" name="paymentmode" onChange={this.modeValueChange.bind(this)} checked={data.paymentmode=="1"} value="1"/>
									    Cash										  
								    </div>	
							    </div>								   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">Assignment/Branch<sup className="required_asterisk">*</sup></label>					    
							    <div className="col-sm-5">								    	
							    	<Select name="branch" value={data.branch} options={branches} onChange={this.onSelectChanged.bind(this,'branch')} clearable={false} searchable={true} />
							    </div>								   
							 </div>		
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">Department<sup className="required_asterisk">*</sup></label>					    
							    <div className="col-sm-5">								    	
							    	<Select name="department" value={data.department} options={department} onChange={this.onSelectChanged.bind(this,'department')} clearable={false} searchable={true} />
							    </div>								   
							 </div>								 
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">S.S.S #</label>					    
							    <div className="col-sm-3">								    	
							    	<input ref="sssno" name="sssno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.sssno}/>
							    </div>								   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">PhilHealth #</label>					    
							    <div className="col-sm-3">							    	
							    	<input ref="philhealthno" name="philhealthno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.philhealthno}/>
							    </div>								   
							 </div>							 
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">PagIbig #</label>					    
							    <div className="col-sm-3">								    	
							    	<input ref="pagibigno" name="pagibigno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.pagibigno}/>
							    </div>								   
							 </div>		
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">T.I.N.</label>					    
							    <div className="col-sm-3">								    	
							    	<input ref="tin" name="tin" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.tin}/>
							    </div>								   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-4 control-label">Tax Status<sup className="required_asterisk">*</sup></label>					    
							    <div className="col-sm-3">								    	
							    	<Select name="taxstatus" value={data.taxstatus} options={taxstatus} onChange={this.onSelectChanged.bind(this,'taxstatus')} clearable={false} searchable={true} />
							    </div>								   
							 </div>						 
							 <br/>
						 	<div className="row form-group">							    
							    <div className="col-sm-4">								    	
							    </div>
							    <div className="col-sm-6">								        
							    	<SaveButton isSaving={isSaving} sStyle="btn btn-success" caption="Save Changes" />
							    	&nbsp;<button className="btn btn-default" type="button" onClick={this.cancel.bind(this)}>Cancel</button>
							    </div>
							 </div>						
							 <br/>							 
						</div>			 							 						
					</form>
			    </div>

			)
	}
}


export default Employment_Form



