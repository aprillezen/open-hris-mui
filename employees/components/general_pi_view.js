import React, {Component} from 'react'
import moment from 'moment'
import Divider from 'material-ui/Divider'

class General_View extends Component{

	render(){

		const { data } = this.props

		const civilStatus = [ "Single","Married","Widowed/Widower","Separated"]
		const gender = [ "Male","Female"]

		return(
				<div className="form">
					<div className="row col-md-12">
						<div className="form-category-title">
							<h4>General Information</h4>
							<button type="button" className="btn btn-primary btn-xs" onClick={this.props.onEdit}><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</button>														
						</div>
						<div className="col-md-4">	
							<div className="form-group">	
								<label className="control-label">Employee Id</label>					    							    						    	
								<div className="field_value">{data.employeeId}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">First Name</label>					    							    						    	
								<div className="field_value">{data.fname}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">Last Name</label>					    							    						    	
								<div className="field_value">{data.lname}</div>
								
							</div>
							<div className="form-group">	
								<label className="control-label">Middle Name</label>					    							    						    	
								<div className="field_value">{data.mname}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">Birthdate</label>					    							    						    	
								<div className="field_value">{ moment(data.birthdate).format('MM/DD/YYYY')}</div>
								
							</div>		
							<div className="form-group">	
								<label className="control-label">Civil Status</label>					    							    						    	
								<div className="field_value">{civilStatus[parseInt(data.civilstat)]}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">Gender</label>					    							    						    	
								<div className="field_value">{gender[parseInt(data.gender)]}</div>
								
							</div>																																									
						</div>

						<div className="col-md-4">
							<div className="form-group">	
								<label className="control-label">Adress</label>					    							    						    	
								<div className="field_value_address">{data.address}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">City</label>					    							    						    	
								<div className="field_value">{data.city}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">Province</label>					    							    						    	
								<div className="field_value">{data.province}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">Zip</label>					    							    						    	
								<div className="field_value">{data.zipcode}</div>
								
							</div>
							<div className="form-group">	
								<label className="control-label">Home Phone</label>					    							    						    	
								<div className="field_value">{data.homephone}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">Mobile Phone</label>					    							    						    	
								<div className="field_value">{data.mobilephone}</div>
								
							</div>	
							<div className="form-group">	
								<label className="control-label">Email Address</label>					    							    						    	
								<div className="field_value">{data.emailadd}</div>
								
							</div>							
						</div>
						<div className="col-md-4">
							<div className="form-group">	
								<label className="control-label">Photo</label><br/>				    							    						    	
								<img src="/images/nopic.png"  className="img-thumbnail"/>
							</div>
						</div>	
					</div>					
				</div>

			)
	}
}

General_View.propTypes = {
	data: React.PropTypes.object.isRequired,
	onEdit: React.PropTypes.func.isRequired
}

export default General_View



