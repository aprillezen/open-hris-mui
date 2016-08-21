import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Grid from 'griddle-react'
import { cols, colmetadata} from './colConfig'
import Alert from '../../../../shared/Alert'
import Notification from 'react-notification-system'


class List extends Component{

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

	handleCreate(e){
		this.context.router.push('/settings/unit/branch/add')
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.deleteSuccess){
			this.showNotif('Branch successfully deleted.')		
		}
		
	}

	render(){

		const { isFetching, isFetchFailed, message, data, hasError } = this.props 				

		let body= <div className="row">		 				
						<div className="panel panel-default">
	  						<div className="panel-heading">&nbsp;<button className="btn btn-success" onClick={this.handleCreate.bind(this)}>Create</button></div>
							<div className="panel-body">
							    <Alert hasError={isFetchFailed} message={message}/>
							    <Grid results={data} tableClassName="griddle-table" showTableHeading={false} useGriddleStyles={false} columnMetadata={colmetadata} columns={cols}/>
							</div>						 	
						</div>			 		
			 		</div>			

		if (isFetching){
			body = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}

		return(<div>
			 		{ body }	
			 		<Notification ref="notify"/>
			  </div>
			)
	}
}

List.contextTypes={
	router: React.PropTypes.object
}

export default List



