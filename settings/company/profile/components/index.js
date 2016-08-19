import React, {Component} from 'react'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'
import _ from 'lodash'
import Notification from 'react-notification-system'


class index extends Component {

	handleSubmit(e){
		e.preventDefault()

		if (_.isEmpty(this.props.profile.companyname)){
			this.props.saveFailed("Please enter company name!")	
			return
		}else if (_.isEmpty(this.props.profile.address)){
			this.props.saveFailed("Please enter address")	
			return
		}else if (_.isEmpty(this.props.profile.contactno)){
			this.props.saveFailed("Please enter contact number")	
			return
		}else if (_.isEmpty(this.props.profile.emailadd)){
			this.props.saveFailed("Please enter email address")	
			return
		}	

		this.props.save(this.props.profile)
	}

	showNotif(){
		this.refs.notify.addNotification({
			message: 'Profile successfully saved.',
			level: 'success',
			position: 'tc',
			autoDismiss: 3
		})
	}

	onValueChanged(e){
		this.props.valueChanged(this.props.profile, e.target.name, e.target.value)		
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.saveSuccess){
			this.showNotif()
		}
	}
	
	componentDidMount(){
		this.props.init()
	}
		
	render(){

		const textareaStyle = {
		  width: '100%'
		}

		const {isFetching,isFailed, message, hasError, isSaving, profile} = this.props

		let body = <div>						
						<div className="col-sm-12">
							<Alert hasError={hasError} message={message}/>
							<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>							
					    		<div className="form-group">	
								 	<label className="col-sm-3 control-label">Company Logo</label>	
								 	<div className="col-sm-3">		
								    	<div className="well profile-photo"></div>
								    </div>						    								    
								 </div>
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Company Name<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-5">								    	
								    	<input ref="companyname" name="companyname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.companyname}/>
								    </div>
								 </div>
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Email Address</label>						    
								    <div className="col-sm-5">								    	
								    	<input ref="emailadd" name="emailadd" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.emailadd}/>
								    </div>						   
								 </div>
								 <div className="form-group">
								 	<label className="col-sm-3 control-label">Address<sup className="required_asterisk">*</sup> </label>						    							    
								    <div className="col-sm-7">		
								    	<textarea ref="address" name="address" style={textareaStyle} className="form-control" rows="2" onChange={this.onValueChanged.bind(this)} defaultValue={profile.address}></textarea>						    									    	
								    </div>						   
								 </div>
								 <div className="form-group">
								 	<label className="col-sm-3 control-label">City<sup className="required_asterisk">*</sup> </label>						    							    							    
								    <div className="col-sm-5">							    	
								    	<input ref="city" name="city" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.city}/>
								    </div>						   
								 </div>
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Province</label>						    							    							    						    
								    <div className="col-sm-5">								    	
								    	<input ref="province" name="province" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.province}/>
								    </div>						   
								 </div>
								 <div className="form-group">		
								 	<label className="col-sm-3 control-label">Zip Code</label>						    
								    <div className="col-sm-2">								    	
								    	<input ref="zip" name="zip" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.zip}/>
								    </div>						   
								 </div>
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Contact Number</label>							    
								    <div className="col-sm-3">								    	
								    	<input ref="contactno" name="contactno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.contactno}/>
								    </div>						   
								 </div>								 
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">T.I.N.</label>							    
								    <div className="col-sm-3">								    	
								    	<input ref="tin" name="tin" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.tin}/>
								    </div>						   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">S.S.S. Number</label>							    								 						    
								    <div className="col-sm-3">								    	
								    	<input ref="sssno" name="sssno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.sssno}/>
								    </div>						   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">PhilHealth Number</label>							    
								    <div className="col-sm-3">								    	
								    	<input ref="philhealthno" name="philhealthno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.philhealthno}/>
								    </div>						   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">PagIbig Number</label>							    						    
								    <div className="col-sm-3">								    	
								    	<input ref="pagibigno" name="pagibigno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.pagibigno}/>
								    </div>						   
								 </div>
								 <div className="form-group">	
								  	<div className="col-sm-3"></div>						    
								    <div className="col-sm-3">
								    	<SaveButton isSaving={isSaving} caption="Save Profile" />
								    </div>								   
								 </div>
					    	</form>
					    </div>
					</div>

		if (isFetching){
			body = <div>
        			   <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        			</div>
		}
		return(
			<div>
				<Notification ref="notify"/>
				<br/>
				{body}
				<br/>
			</div>
		)
	}
}


export default index