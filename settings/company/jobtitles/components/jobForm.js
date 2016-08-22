import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'
import { Link } from 'react-router'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Notification from 'react-notification-system'


class JobForm extends Component{

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
		if (_.isEmpty(this.props.data.title)){
			this.props.saveFailed("Please enter job title!")	
			return
		}else if (_.isEmpty(this.props.data.jobdesc)){
			this.props.saveFailed("Please enter job description!")	
			return
		}

		this.props.save(this.props.data, this.props.editMode)
	}

	onValueChanged(e){		
		this.props.valueChanged(this.props.data, e.target.name, e.target.value )	
	}

	handleBack(e){
		this.context.router.push('/settings/company/jobtitle/list')
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.saveAddSuccess){
			this.showNotif('New Job Title successfully created.')	
			setTimeout(()=>{
				this.context.router.push('/settings/company/jobtitle/list')
			},2000)
			
		}else if (nextProps.updateSuccess){
			this.showNotif('Job Title successfully modified.')	
			setTimeout(()=>{
				this.context.router.push('/settings/company/jobtitle/list')
			},2000)
		}
		
	}

	render(){

		const textareaStyle = {
		  width: '100%'
		}

		const { hasError, isSaving, message, data, isFetching, editMode, title } = this.props


		let content = <div className="col-sm-12">
							<Alert hasError={hasError} message={message}/>
							<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>												    		
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Job Title<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-5">								    	
								    	<input ref="title" name="title" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.title}/>
								    </div>
								 </div>								 								
								
								<div className="form-group">
								 	<label className="col-sm-3 control-label">Job description<sup className="required_asterisk">*</sup> </label>						    							    
								    <div className="col-sm-7">		
								    	<textarea ref="jobdesc" name="jobdesc" style={textareaStyle} className="form-control" rows="3" onChange={this.onValueChanged.bind(this)} defaultValue={data.jobdesc}></textarea>						    									    	
								    </div>						   
								 </div>

								 <div className="form-group">
								 	<label className="col-sm-3 control-label">Duties/Responsibilities</label>						    							    
								    <div className="col-sm-7">		
								    	<textarea ref="duties" name="duties" style={textareaStyle} className="form-control" rows="3" onChange={this.onValueChanged.bind(this)} defaultValue={data.duties}></textarea>						    									    	
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


JobForm.contextTypes={
	router: React.PropTypes.object
}

export default JobForm



