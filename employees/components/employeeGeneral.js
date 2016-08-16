import React, {Component} from 'react'
import General_PI from './general_pi_view'
import General_CI from './general_ci_view'
import Alert from '../../shared/Alert'
import {EmployeeGeneralEditContainer} from '../container'
import {EmployeeGeneralEditCIContainer} from '../container'
import Notification from 'react-notification-system'

class EmployeeGeneral extends Component{

	constructor(props){
		super(props)
		this.props.load(props.params.id)
	}

	onEdit(e){
		this.props.loadGeneralEdit()
	}

	onEditCI(e){
		this.props.loadGeneralEditCI()
	}

	showNotif(msg){
		this.refs.notify.addNotification({
			message: msg,
			level: 'success',
			position: 'tc',
			autoDismiss: 3
		})
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.updateSuccess){
			this.showNotif("Changes successfully saved.")			
		}
	}
	render(){
		const { data,isFetching, isFetchFailed, hasError, errorMessage, isGeneralEdit, isGeneralEditCI} = this.props

		let body = <General_PI data={data} onEdit={this.onEdit.bind(this)} />
		let content =  <General_CI data={data} onEdit={this.onEditCI.bind(this)}/>


		if (isGeneralEdit || isGeneralEditCI){			
			if (isGeneralEdit){
				body = <EmployeeGeneralEditContainer/>
			}
			if (isGeneralEditCI){
				content = <EmployeeGeneralEditCIContainer/>
			}
		}else{
			if (isFetching){
				body = <div>
	        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
	        		   </div>
			}

			if (isFetchFailed){
				body = <Alert hasError={isFetchFailed} message={errorMessage}/>
			}
		}
		
		return(<div>
				  {body}	
				  <br/>	
				  {content}
				  <Notification ref="notify"/>
				  <br/>
				  <br/>
				  <br/>
				</div>
			)
	}
}


export default EmployeeGeneral

