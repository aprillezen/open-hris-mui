import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'
import { Link } from 'react-router'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Notification from 'react-notification-system'


class DeptForm extends Component{

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
		if (_.isEmpty(this.props.data.description)){
			this.props.saveFailed("Please enter description!")	
			return
		}

		this.props.save(this.props.data, this.props.editMode)
	}

	onValueChanged(e){
		this.props.valueChanged(this.props.data, e.target.name, e.target.value)	
	}

	handleBack(e){
		this.context.router.push('/settings/unit/department/list')
	}

	onSelectChanged(val){
		this.props.headChange(val)
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.saveAddSuccess){
			this.showNotif('New Department successfully created.')	
			setTimeout(()=>{
				this.context.router.push('/settings/unit/department/list')
			},2000)
			
		}else if (nextProps.updateSuccess){
			this.showNotif('Department successfully modified.')	
			setTimeout(()=>{
				this.context.router.push('/settings/unit/department/list')
			},2000)
		}
		
	}

	render(){		

		const { hasError, isSaving, message, data, isFetching, editMode, title, employees} = this.props


		let content = <div className="col-sm-12">
							<Alert hasError={hasError} message={message}/>
							<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>												    		
								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Description<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-5">								    	
								    	<input ref="description" name="description" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.description}/>
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


DeptForm.contextTypes={
	router: React.PropTypes.object
}

export default DeptForm



