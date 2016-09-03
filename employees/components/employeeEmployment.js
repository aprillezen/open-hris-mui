import React, {Component} from 'react'
import EmploymentView from './employment_view'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Alert from '../../shared/Alert'
import Notification from 'react-notification-system'
import { EmployeeEmploymentFormContainer }from '../container'

class EmployeeEmployment extends Component{
	
	constructor(props){
		super(props)	
		props.load(props.params.id)
	}
	showNotif(msg){
		this.refs.notify.addNotification({
			message: msg,
			level: 'success',
			position: 'tc',
			autoDismiss: 3
		})
	}
	onEdit(e){
		this.props.edit(this.props.params.id)
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.updateSuccess){
			this.showNotif("Changes successfully saved.")				
			setTimeout(()=>{
				this.props.load(this.props.data.id)
			},1000)		
		}
	}

	render(){

		const { data, withdata, isFetching, isFetchFailed, hasError, errorMessage, isLoadEdit} = this.props
		let body = <EmploymentView data={data} withdata={withdata} onEdit={this.onEdit.bind(this)} />

		if (isFetching){
			body = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}else if(isLoadEdit){
			
			body = <EmployeeEmploymentFormContainer/>
		}

		if (isFetchFailed){
			body = <Alert hasError={isFetchFailed} message={errorMessage}/>
		}

		return(
				<div>
					{body}
					<Notification ref="notify"/>
				</div>
			)
	}
}



export default EmployeeEmployment