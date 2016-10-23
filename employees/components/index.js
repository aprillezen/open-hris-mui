import React, {Component} from 'react'
import { Link } from 'react-router'
import Alert from '../../shared/Alert'
import Notification from 'react-notification-system'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import CreateIco from 'material-ui/svg-icons/social/person-add'
import FontIcon from 'material-ui/FontIcon'
import List from './list'
import { emp_headerStyle, emp_iconHeaderStyle, emp_iconStyle} from '../../styles'

class index extends Component{

	constructor(props){
		super(props)
		props.fetch()
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
		if (nextProps.deleteSuccess){
			this.showNotif('Employee successfully deleted.')		
		}
		
	}

	handleCreate(e){
		this.context.router.push('/employees/add')
	}

	render(){

		const { isFetching, isFetchFailed, errorMessage, data, hasError } = this.props 	

		let body =  <List data={data}/>

		if (isFetching){
			body = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}

		return(			
				<div className="child-content">			         
					<div className="child-content-header">
						<Toolbar style={emp_headerStyle}>
							 <ToolbarGroup>							 	
							 	<FlatButton 
							 		label="CREATE" 
							 		primary={true} 
							 		style={emp_iconStyle} 
							 		onClick={this.handleCreate.bind(this)} 
							 		icon={<CreateIco/>}
							 	/>
							 	<FlatButton 
							 		label="EDIT" 
							 		disabled={true} 
							 		primary={true}
							 		style={emp_iconStyle} 
							 		icon={<FontIcon className="fa fa-pencil" style={emp_iconHeaderStyle}/>} 
							 	/>
							 </ToolbarGroup>
						</Toolbar>											
					</div>		

					<div className="child-main-content">
						{ body }	
					</div>

					<Notification ref="notify"/>
				</div>
		)
	}
}

index.contextTypes = {
	router : React.PropTypes.object
}


export default index


