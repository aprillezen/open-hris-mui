
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'
import { Link } from 'react-router'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Notification from 'react-notification-system'


class BatchForm extends Component{

	constructor(props){
		super(props)

		if (props.params.id!='add'){						
			this.props.edit(this.props.params.id)
		}else{
			props.add()
		}
	}

	showNotif(msg){
		this.refs.notify.addNotification({
			message: msg,
			level: 'success',
			position: 'tc',
			autoDismiss: 3
		})
	}


	handleSubmit(e){
		e.preventDefault()
		if (_.isEmpty(this.props.data.branchname)){
			this.props.saveFailed("Please enter branch name!")	
			return
		}else if (_.isEmpty(this.props.data.address)){
			this.props.saveFailed("Please enter address")	
			return
		}else if (_.isEmpty(this.props.data.city)){
			this.props.saveFailed("Please enter city")	
			return
		}else if (_.isEmpty(this.props.data.phoneno)){
			this.props.saveFailed("Please enter contact number")	
			return
		}	

		this.props.save(this.props.data, this.props.editMode)
	}

	onValueChanged(e){
		this.props.valueChanged(this.props.data, e.target.name, e.target.value)	
	}

	handleBack(e){
		this.context.router.push('/settings/unit/branch/list')
	}

	onSelectChanged(val){
		this.props.headChange(val)
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.saveAddSuccess){
			this.showNotif('New branch successfully created.')	
			setTimeout(()=>{
				this.context.router.push('/settings/unit/branch/list')
			},1000)
			
		}else if (nextProps.updateSuccess){
			this.showNotif('Branch successfully modified.')	
			setTimeout(()=>{
				this.context.router.push('/settings/unit/branch/list')
			},1000)
		}
		
	}

	render(){

		const textareaStyle = {
		  width: '100%'
		}

		const { hasError, isSaving, message, data, isFetching, editMode, title, employees} = this.props


		let content = <div className="col-sm-12">
							<Alert hasError={hasError} message={message}/>
							<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>												    		
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Branch Name<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-5">								    	
								    	<input ref="branchname" name="branchname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.branchname}/>
								    </div>
								 </div>
								 
								 <div className="form-group">
								 	<label className="col-sm-3 control-label">Address<sup className="required_asterisk">*</sup> </label>						    							    
								    <div className="col-sm-7">		
								    	<textarea ref="address" name="address" style={textareaStyle} className="form-control" rows="2" onChange={this.onValueChanged.bind(this)} defaultValue={data.address}></textarea>						    									    	
								    </div>						   
								 </div>
								 <div className="form-group">
								 	<label className="col-sm-3 control-label">City<sup className="required_asterisk">*</sup> </label>						    							    							    
								    <div className="col-sm-5">							    	
								    	<input ref="city" name="city" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.city}/>
								    </div>						   
								 </div>
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Province</label>						    							    							    						    
								    <div className="col-sm-5">								    	
								    	<input ref="province" name="province" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.province}/>
								    </div>						   
								 </div>
								 <div className="form-group">		
								 	<label className="col-sm-3 control-label">Zip Code</label>						    
								    <div className="col-sm-2">								    	
								    	<input ref="zip" name="zip" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.zipcode}/>
								    </div>						   
								 </div>
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Contact Number<sup className="required_asterisk">*</sup> </label>							    
								    <div className="col-sm-3">								    	
								    	<input ref="phoneno" name="phoneno" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.phoneno}/>
								    </div>						   
								 </div>		

								  <div className="form-group">	
								 	<label className="col-sm-3 control-label">Head</label>							    
								    <div className="col-sm-5">								    	
								    	<Select name="head" value={data.head} options={employees} onChange={this.onSelectChanged.bind(this)} clearable={true} searchable={true} />
								    </div>						   
								 </div>		
								 
								 <div className="form-group">	
								  	<div className="col-sm-3"></div>						    
								    <div className="col-sm-3">
								    	<SaveButton isSaving={isSaving} sStyle="btn btn-success btn-lg" caption="&nbsp; Save &nbsp;" />
								    </div>								   
								 </div>
					    	</form>
					    </div>

		if (isFetching){
        	content = <div className="panel-body">
        				 <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;loading...</span>
        			  </div>
        }

		return(
				<div className="panel panel-default">
					<div className="panel-heading">				  
					   <h3 className="panel-title pull-left">{title}</h3>
						<button onClick={this.handleBack.bind(this)} className="btn btn-default pull-right">Cancel</button>
				        <div className="clearfix"></div>						
					</div>

					<div className="panel-body">
						<br/>
						{content}
						<br/>
					</div>
				 	
				 	<Notification ref="notify"/>
				</div>
			)
	}
}


BatchForm.contextTypes={
	router: React.PropTypes.object
}

export default BatchForm



