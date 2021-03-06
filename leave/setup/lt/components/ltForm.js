import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'
import { Link } from 'react-router'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Notification from 'react-notification-system'


class LtForm extends Component{

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
		if (_.isEmpty(this.props.data.leavecode)){
			this.props.saveFailed("Please enter leave code!")	
			return
		}
		if (_.isEmpty(this.props.data.description)){
			this.props.saveFailed("Please enter description!")	
			return
		}

		if (_.isEmpty(this.props.data.linkId)){
			this.props.saveFailed("Please select pay account!")	
			return
		}

		this.props.save(this.props.data, this.props.editMode)
	}

	onValueChanged(e){
		this.props.valueChanged(this.props.data, e.target.name, e.target.value)	
	}

	handleBack(e){
		this.context.router.push('/leave/setup/lt/list')
	}

	onSelectChanged(val){
		this.props.linkidChange(val)
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.saveAddSuccess){
			this.showNotif('New Leave Type successfully created.')	
			setTimeout(()=>{
				this.context.router.push('/leave/setup/lt/list')
			},1000)
			
		}else if (nextProps.updateSuccess){
			this.showNotif('Leave Type successfully modified.')	
			setTimeout(()=>{
				this.context.router.push('/leave/setup/lt/list')
			},1000)
		}
		
	}

	render(){		

		const { hasError, isSaving, message, data, isFetching, editMode, title, payaccounts} = this.props


		let content = <div className="col-sm-12">
							<Alert hasError={hasError} message={message}/>
							<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>	
								<div className="form-group">	
								 	<label className="col-sm-3 control-label">Leave Code<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-2">								    	
								    	<input ref="leavecode" name="leavecode" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.leavecode}/>
								    </div>
								 </div>												    		
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Description<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-5">								    	
								    	<input ref="description" name="description" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.description}/>
								    </div>
								 </div>								 								
								  <div className="form-group">	
								 	<label className="col-sm-3 control-label">Linked Account</label>							    
								    <div className="col-sm-5">								    	
								    	<Select name="linkId" value={data.linkId} options={payaccounts} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={true} />
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


LtForm.contextTypes={
	router: React.PropTypes.object
}

export default LtForm



