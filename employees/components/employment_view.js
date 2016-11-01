import React, {Component} from 'react'
import moment from 'moment'
import _ from 'lodash'

import {JOB_LEVELS,EMPLOYEE_CATEGORY,PAY_SCHEDULE,PAY_MODE,EMPLOYMENT_STATUS} from '../../shared/Const'

class Employment_View extends Component{

	render(){

		const { data, withdata } = this.props
		
		let joblevel = '-not set-'
		let category = '-not set-'
		let schedule = '-not set-'
		let empstatus = '-not set-'
		let paymentmode = '-not set-'
		let startdate = '-not set-'
		let separationdate = '-not set-'


		if (withdata){			
			startdate = moment(data.startdate).format('MM/DD/YYYY')
			joblevel = JOB_LEVELS[data.joblevel]
			category = EMPLOYEE_CATEGORY[data.category]
			schedule = PAY_SCHEDULE[data.schedule]
			empstatus = EMPLOYMENT_STATUS[data.empstatus]
			paymentmode = PAY_MODE[data.paymentmode]
			if (!_.isEmpty(data.separationdate)){
				separationdate = moment(data.separationdate).format('MM/DD/YYYY')
			}			
		}

		return(
				<div className="form">
					<div className="row col-md-12">
						<div className="form-category-title">
							<h4>Job Information</h4>
							<button type="button" className="btn btn-primary btn-xs" onClick={this.props.onEdit}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button>														
						</div>
						<div className="col-md-4">	
							<div className="form-group">	
								<label className="control-label">Start of Employment</label>					    							    						    	
								<div className="field_value">{startdate}</div>								
							</div>
							<div className="form-group">	
								<label className="control-label">Job Title</label>					    							    						    	
								<div className="field_value">{data.jobtitle}</div>								
							</div>	
							<div className="form-group">	
								<label className="control-label">Job Level</label>					    							    						    	
								<div className="field_value">{joblevel}</div>								
							</div>	
							<div className="form-group">	
								<label className="control-label">Employee Category</label>					    							    						    	
								<div className="field_value">{category}</div>								
							</div>	
							<div className="form-group">	
								<label className="control-label">Payroll Schedule</label>					    							    						    	
								<div className="field_value">{schedule}</div>								
							</div>	
							<div className="form-group">	
								<label className="control-label">Employment Status</label>					    							    						    	
								<div className="field_value">{empstatus}</div>								
							</div>	
							<div className="form-group">	
								<label className="control-label">Separation Date</label>					    							    						    	
								<div className="field_value">{separationdate}</div>								
							</div>	
							<div className="form-group">	
								<label className="control-label">Mode of Payment</label>					    							    						    	
								<div className="field_value">{paymentmode}</div>								
							</div>	
						</div>

						<div className="col-md-4">
							<div className="form-group">	
								<label className="control-label">Assignment/Branch</label>					    							    						    	
								<div className="field_value">{data.branch}</div>								
							</div>	
							<div className="form-group">
								<label className="control-label">Department</label>					    							    						    	
								<div className="field_value">{data.department}</div>								
							</div>	
							<div className="form-group">
								<label className="control-label">S.S.S. No.</label>					    							    						    	
								<div className="field_value">{data.sssno}</div>								
							</div>	
							<div className="form-group">
								<label className="control-label">PhilHealth No.</label>					    							    						    	
								<div className="field_value">{data.philhealthno}</div>								
							</div>
							<div className="form-group">
								<label className="control-label">PagIbig No.</label>					    							    						    	
								<div className="field_value">{data.pagibigno}</div>								
							</div>	
							<div className="form-group">
								<label className="control-label">TIN No.</label>					    							    						    	
								<div className="field_value">{data.tin}</div>								
							</div>	
							<div className="form-group">
								<label className="control-label">Tax Status</label>					    							    						    	
								<div className="field_value">{data.taxstatus}</div>								
							</div>					
						</div>
						<div className="col-md-4">
							
						</div>	
					</div>					
				</div>

			)
	}
}

Employment_View.propTypes = {
	data: React.PropTypes.object.isRequired,
	withdata: React.PropTypes.bool.isRequired,
	onEdit: React.PropTypes.func.isRequired
}

export default Employment_View



