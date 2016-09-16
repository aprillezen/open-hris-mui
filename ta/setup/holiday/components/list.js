import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Grid from 'griddle-react'
import { cols, colmetadata} from './colConfig'
import Alert from '../../../../shared/Alert'
import Notification from 'react-notification-system'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { YEAR_SELECTION } from '../../../../shared/Const'
import moment from 'moment'

class List extends Component{

	constructor(props){
		super(props)		
		props.fetch(props.currentyear)
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
		this.context.router.push('/ta/setup/holiday/add/'+this.props.currentyear)
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.deleteSuccess){
			this.showNotif(this.props.deletemsg + ' successfully deleted.')		
		}
		
	}
	onSelectChanged(e){		
		this.props.fetch(e.value)
	}

	render(){

		const { isFetching, isFetchFailed, message, data, hasError, currentyear } = this.props 				

		let body= <div className="row">		 				
						<div className="panel panel-default">	  						
			  				<div className="panel-heading">				  
							   <div className="pull-left">&nbsp;<button className="btn btn-success" onClick={this.handleCreate.bind(this)}>Create</button></div>
							   <div className='paramyear pull-right'>
									<Select name="currentyear" value={currentyear} options={YEAR_SELECTION} onChange={this.onSelectChanged.bind(this)} clearable={false} searchable={false} />
								</div>		
						        <div className="clearfix"></div>						
							</div>
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



