import React, {Component} from 'react'
import { Link } from 'react-router'
import Alert from '../../shared/Alert'
import Notification from 'react-notification-system'
import {Table, Column, Cell} from 'fixed-data-table'

class TextCell extends Component {
  render() {
    const {rowIndex, field, data} = this.props;
    return (
      <Cell {...this.props}>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}


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

		let body =  <Table
						rowsCount={data.length}
				        rowHeight={35}
				        headerHeight={40}
				        width={800}
				        height={550}>	
						<Column
							header={<Cell>Name</Cell>}
							cell={props => (
							<Cell {...props}>
							  {data[props.rowIndex].fname + " " + data[props.rowIndex].lname}
							</Cell>
							)}
							width={200}	
						/>	       

					</Table>

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