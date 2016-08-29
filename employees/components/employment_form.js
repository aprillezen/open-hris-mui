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
		this.props.cancelEdit(1)
	}

	onValueChanged(e){			
				
	}

	onSelectChanged(val){
	
	}

	categoryValueChanged(e){

	}

	modeValueChanged(e){

	}

	render(){
		
		const { data, isSaving, jobtitles, branches, department, taxstatus, withdata } = this.props

		//onChange={this.birthdateChanged.bind(this)
		return(
				<div className="col-md-12">
					<form className="form-horizontal">
						 <h3>Employment</h3>	
						 <hr/>		
						 <div className="editForm">	
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">Start of Employment</label>					    
							    <div className="col-sm-4">								    	
							    	<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.startdate} />
							    </div>						    							  
							 </div>	
							 <div className="form-group">
							 	<label className="col-sm-3 control-label field_label">Job Title</label>					    
							    <div className="col-sm-5">								    	
							    	<Select name="jobtitle" value={data.jobtitle} options={jobtitles} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={true} />
							    </div>								 									  
							 </div>	
							 <div className="form-group">
							 	<label className="col-sm-3 control-label field_label">Job Level</label>					    
							    <div className="col-sm-4">								    	
							    	<Select name="joblevel" value={data.joblevel} options={JOB_LEVELS_DROPDOWN} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={false} />
							    </div>								 									  
							 </div>	
							  <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">Employee Category</label>					    
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
							 	<label className="col-sm-3 control-label field_label">Payroll Schedule</label>					    
							    <div className="col-sm-4">								    	
							    	<Select name="schedule" value={data.schedule} options={PAY_SCHEDULE_DROPDOWN} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={false} />
							    </div>								   
							 </div>		
							  <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">Employment Status</label>					    
							    <div className="col-sm-4">								    	
							    	<Select name="schedule" value={data.empstatus} options={EMPLOYMENT_STATUS_DROPDOWN} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={false} />
							    </div>								   
							 </div>		
							<div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">Separation Date</label>					    
							    <div className="col-sm-4">								    	
							    		<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.separationdate}  isClearable={true} />
							    </div>								   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">Mode of Payment</label>					    
							    <div className="col-sm-4">								    	
							    	<div className="radio">										  
									    <input type="radio" name="paymentmode" onChange={this.modeValueChanged.bind(this)} checked={data.paymentmode=="0"} value="0"/>
									    Bank								  
								    </div>			
								     <div className="radio">										   
									    <input type="radio" name="paymentmode" onChange={this.modeValueChanged.bind(this)} checked={data.paymentmode=="1"} value="1"/>
									    Cash										  
								    </div>	
							    </div>								   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">Assignment/Branch</label>					    
							    <div className="col-sm-5">								    	
							    	<Select name="branch" value={data.branch} options={branches} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={true} />
							    </div>								   
							 </div>		
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">Department</label>					    
							    <div className="col-sm-5">								    	
							    	<Select name="department" value={data.department} options={department} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={true} />
							    </div>								   
							 </div>								 
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">S.S.S #</label>					    
							    <div className="col-sm-3">								    	
							    	<input ref="sssno" name="sssno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.sssno}/>
							    </div>								   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">PhilHealth #</label>					    
							    <div className="col-sm-3">							    	
							    	<input ref="philhealthno" name="philhealthno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.philhealthno}/>
							    </div>								   
							 </div>							 
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">PagIbig #</label>					    
							    <div className="col-sm-3">								    	
							    	<input ref="pagibigno" name="pagibigno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.pagibigno}/>
							    </div>								   
							 </div>		
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">T.I.N.</label>					    
							    <div className="col-sm-3">								    	
							    	<input ref="tin" name="tin" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.tin}/>
							    </div>								   
							 </div>	
							 <div className="form-group">	
							 	<label className="col-sm-3 control-label field_label">Tax Status</label>					    
							    <div className="col-sm-3">								    	
							    	<Select name="taxstatus" value={data.taxstatus} options={taxstatus} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={true} />
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
							 <br/>							 
						</div>			 							 						
					</form>
			    </div>

			)
	}
}


export default Employment_Form



