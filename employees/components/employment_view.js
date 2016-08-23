import React, {Component} from 'react'
import moment from 'moment'
import {JOB_LEVELS,EMPLOYEE_CATEGORY,PAY_SCHEDULE,PAY_MODE,EMPLOYMENT_STATUS} from '../../shared/Const'

class Employment_View extends Component{

	render(){
		
		const { data } = this.props

		return(
				<div className="col-md-12">
					<div className="form-horizontal">
						 <h3>Employment</h3>	
						 <hr/>		
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Start of Employment</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{moment(data.startdate).format('MM/DD/YYYY')}</label>
						    </div>
						    <div className="col-sm-3">								    	
						    	<button type="button" className="btn btn-default pull-right" onClick={this.props.onEdit}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button>
						    </div>								   
						 </div>	
						 <div className="form-group">
						 	<label className="col-sm-3 control-label field_label">Job Title</label>					    
						    <div className="col-sm-5">								    	
						    	<label className="field_value">{data.jobtitle}</label>
						    </div>								 									  
						 </div>	
						 <div className="form-group">
						 	<label className="col-sm-3 control-label field_label">Job Level</label>					    
						    <div className="col-sm-5">								    	
						    	<label className="field_value">{JOB_LEVELS[data.joblevel]}</label>
						    </div>								 									  
						 </div>	
						  <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Employee Category</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{EMPLOYEE_CATEGORY[data.category]}</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Payroll Schedule</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{PAY_SCHEDULE[data.schedule]}</label>
						    </div>								   
						 </div>		
						  <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Employment Status</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{EMPLOYMENT_STATUS[data.empstatus]}</label>
						    </div>								   
						 </div>		
						<div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Separation Date</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.separationdate}</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Mode of Payment</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{PAY_MODE[data.paymentmode]}</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Assignment/Branch</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.branch}</label>
						    </div>								   
						 </div>		
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Department</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.department}</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Group</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.group}</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">S.S.S #</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.sssno}</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">PhilHealth #</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.philhealthno}</label>
						    </div>								   
						 </div>							 
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">PagIbig #</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.pagibigno}</label>
						    </div>								   
						 </div>		
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">T.I.N.</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.tin}</label>
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Tax Status</label>					    
						    <div className="col-sm-4">								    	
						    	<label className="field_value">{data.taxstatus}</label>
						    </div>								   
						 </div>						 
						 <br/>
						 <h3>Career Movement</h3>	
						 <hr/>	
						 <br/>
						 <br/>				 							 						
					</div>
			    </div>

			)
	}
}

Employment_View.propTypes = {
	data: React.PropTypes.object.isRequired,
	onEdit: React.PropTypes.func.isRequired
}

export default Employment_View



