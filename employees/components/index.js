import React, {Component} from 'react'
import { Link } from 'react-router'
import Alert from '../../shared/Alert'
import Notification from 'react-notification-system'
import {Table, Column, Cell} from 'fixed-data-table'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton';
import EditIco from 'material-ui/svg-icons/editor/mode-edit'
import { tableIcon } from '../../styles'

class TextCell extends Component {
  render() {
    const {rowIndex, field, data} = this.props
    return (
      <Cell>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}

class ImageCell extends React.Component {
  render() {
    const {rowIndex, field, data} = this.props    
    return (
      <Cell>
        <Avatar size={32}>A</Avatar>
      </Cell>
    )
  }
}

class ButtonCell extends React.Component {
  render() {
    const {rowIndex, data} = this.props 
    return (
      <Cell>
      	 <IconButton style={tableIcon.smallIcon}>
         	<EditIco/>
         </IconButton>
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
				        rowHeight={50}
				        headerHeight={40}
				        width={800}
				        maxHeight ={800}>					       
						<Column width={50} header={<Cell></Cell>} cell={<ImageCell data={data} field="id"/>} />	  				        
						<Column width={100} header={<Cell>Employee Id</Cell>} cell={<TextCell data={data} field="employeeId" />} />	  
				        <Column width={150}	header={<Cell>First Name</Cell>} cell={<TextCell data={data} field="fname"/>}/>	   
				        <Column width={150}	header={<Cell>Last Name</Cell>} cell={<TextCell data={data} field="lname"/>}/>	   
				        <Column width={150}	header={<Cell>Middle Name</Cell>} cell={<TextCell data={data} field="mname"/>}/>	   
				        	   
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