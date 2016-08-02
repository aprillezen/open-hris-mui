import React, {Component} from 'react'
import Alert from '../../../shared/Alert'
import SaveButton from './SaveButton'
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

		const {isFetching,isFailed, message, hasError, isSaving, profile} = this.props

		let body = <div>

						<div className="col-sm-3">
							<div className="well profile-photo"></div>
						</div>
						<div className="col-sm-9">
							<Alert hasError={hasError} message={message}/>
							<form onSubmit={this.handleSubmit.bind(this)}>
								 <div className="row form-group">							    
								    <div className="col-sm-7">
								    	<label>Company Name</label>
								    	<input ref="companyname" name="companyname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.companyname}/>
								    </div>
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-7">
								    	<label>Address</label>
								    	<input ref="address" name="address" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.address}/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-5">
								    	<label>City</label>
								    	<input ref="city" name="city" type="text" className="form-control"/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-5">
								    	<label>Province</label>
								    	<input ref="province" name="province" type="text" className="form-control"/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-3">
								    	<label>Zip Code</label>
								    	<input ref="zip" name="zip" type="text" className="form-control"/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-5">
								    	<label>Contact No</label>
								    	<input ref="contactno" name="contactno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.contactno}/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-5">
								    	<label>Email Address</label>
								    	<input ref="emailadd" name="emailadd" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={profile.emailadd}/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-5">
								    	<label>TIN</label>
								    	<input ref="tin" name="tin" type="text" className="form-control"/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-5">
								    	<label>SSS #</label>
								    	<input ref="sssno" name="sssno" type="text" className="form-control"/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-5">
								    	<label>PhilHealth #</label>
								    	<input ref="philhealthno" name="philhealthno" type="text" className="form-control"/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-5">
								    	<label>PagIbig #</label>
								    	<input ref="pagibigno" name="pagibigno" type="text" className="form-control"/>
								    </div>						   
								 </div>
								 <div className="row form-group">							    
								    <div className="col-sm-3">
								    	<SaveButton isSaving={isSaving} />
								    </div>
								    <div className="col-sm-3">
								    	
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
				<br/><br/>	
				{body}
			</div>
		)
	}
}


export default index