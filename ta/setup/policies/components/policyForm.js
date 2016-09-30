import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'
import { Link } from 'react-router'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Notification from 'react-notification-system'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { HOLIDAY_TYPE_DROPDOWN } from '../../../../shared/Const'

class PolicyForm extends Component{

	constructor(props,context){
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

	componentDidMount(){		
		if (this.props.params.id=='add'){											
			this.refs.description.value=''									
		}
		this.refs.description.focus()				
	}

	
	handleSubmit(e){
		e.preventDefault()		
		if (_.isEmpty(this.props.data.description)){			
			this.props.saveFailed("Please required fields!")	
			return		
		}
		this.props.save(this.props.data, this.props.editMode)
	}

	onSelectChanged(field, val){	
		this.props.valueChanged(this.props.data, field, val)		
	}

	onValueChanged(e){		
		this.props.valueChanged(this.props.data, e.target.name, e.target.value )	
	}

	onCheckChanged(e){		
		var def = 0
		if (e.target.checked) def=1		
		this.props.valueChanged(this.props.data, e.target.name, def)		
	}

	handleBack(e){
		this.context.router.push('/ta/setup/policies/list')
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.saveAddSuccess){
			this.showNotif('New Policy successfully created.')	
			setTimeout(()=>{
				this.context.router.push('/ta/setup/policies/list')
			},1000)
			
		}else if (nextProps.updateSuccess){
			this.showNotif('Policy successfully modified.')	
			setTimeout(()=>{
				this.context.router.push('/ta/setup/policies/list')
			},1000)
		}
		
	}

	render(){

		const textareaStyle = {
		  width: '100%'
		}	

		const { hasError, isSaving, message, data, isFetching, editMode, title} = this.props

		let content = <div className="col-sm-12">
							<Alert hasError={hasError} message={message}/>
							<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>												    										
								<div className="form-group">	
								 	<label className="col-sm-2 control-label">Description<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-6">								    	
								    	<input ref="description" name="description" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.description}/>
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


PolicyForm.contextTypes={
	router: React.PropTypes.object
}

export default PolicyForm



