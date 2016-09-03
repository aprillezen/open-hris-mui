import React, {Component} from 'react'
import Grid from 'griddle-react'
import { cols, colmetadata} from './colConfig'
import { Link } from 'react-router'
import Alert from '../../shared/Alert'
import Notification from 'react-notification-system'

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

	render(){

		const { isFetching, isFetchFailed, errorMessage, data, hasError } = this.props 	

		let body =  <div className="col-sm-12">
						<h3>Employees</h3>	
						<div className="panel panel-default">
	  						<div className="panel-heading">&nbsp;<Link className="btn btn-success" to="/employees/add">Create</Link></div>
								<div className="panel-body"> 
							 	<Alert hasError={isFetchFailed} message={errorMessage}/>
							    <Grid results={data} tableClassName="griddle-table" showTableHeading={false} useGriddleStyles={false} columnMetadata={colmetadata} columns={cols}/>							   
							</div>						 	
						</div>		
					</div>

		if (isFetching){
			body = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}

		return(
			<div>
				{ body }	
				<Notification ref="notify"/>
			</div>																	
		)
	}
}

export default index