import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'
import { Link } from 'react-router'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Notification from 'react-notification-system'


class ShiftForm extends Component{

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

	componentDidMount(){		
		if (this.props.params.id=='add'){											
			this.refs.description.value=''									
		}
		this.refs.description.focus()				
	}

	handleSubmit(e){
		e.preventDefault()
		if (_.isEmpty(this.props.data.description) || _.isEmpty(this.props.data.starttime) || 
			_.isEmpty(this.props.data.breakfrom) || _.isEmpty(this.props.data.breakto) ||
			_.isEmpty(this.props.data.endtime)){
			this.props.saveFailed("Please required fields!")	
			return		
		}
		this.props.save(this.props.data, this.props.editMode)
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
		this.context.router.push('/ta/setup/shift/list')
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.saveAddSuccess){
			this.showNotif('New shift successfully created.')	
			setTimeout(()=>{
				this.context.router.push('/ta/setup/shift/list')
			},1000)
			
		}else if (nextProps.updateSuccess){
			this.showNotif('Shift successfully modified.')	
			setTimeout(()=>{
				this.context.router.push('/ta/setup/shift/list')
			},1000)
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
								 	<label className="col-sm-3 control-label">Description<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-6">								    	
								    	<input ref="description" name="description" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.description}/>
								    </div>
								 </div>	

								  <div className="form-group">	
								 	<label className="col-sm-3 control-label">Start Time<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-3">								    	
								    	<input ref="starttime" name="starttime" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.starttime}/>
								    </div>
								 </div>	

								 <div className="form-group">	
								 	<label className="col-sm-3 control-label">Break - From<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-3">								    	
								    	<input ref="breakfrom" name="breakfrom" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.breakfrom}/>
								    </div>
								 </div>	

								  <div className="form-group">	
								 	<label className="col-sm-3 control-label">Break - To<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-3">								    	
								    	<input ref="breakto" name="breakto" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.breakto}/>
								    </div>
								 </div>		

								  <div className="form-group">	
								 	<label className="col-sm-3 control-label">End Time<sup className="required_asterisk">*</sup> </label>						    
								    <div className="col-sm-3">								    	
								    	<input ref="endtime" name="endtime" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.endtime}/>
								    </div>
								 </div>							 								
											
								<div className="form-group">									 	
									<div className="col-sm-3"></div>	
								    <div className="col-sm-8">								    	
										<div className="checkbox">										 
										  <input type="checkbox" ref="isdefault" name="isdefault" onChange={this.onCheckChanged.bind(this)} checked={data.isdefault==1} value='1'/> This the default shift
										</div>
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


ShiftForm.contextTypes={
	router: React.PropTypes.object
}

export default ShiftForm



