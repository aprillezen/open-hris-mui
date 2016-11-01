import React, {Component} from 'react'
import { Link } from 'react-router'
import Alert from '../../shared/Alert'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import CreateIco from 'material-ui/svg-icons/social/person-add'
import DeleteIco from 'material-ui/svg-icons/action/delete'
import FontIcon from 'material-ui/FontIcon'
import List from './list'
import { emp_headerStyle, emp_iconHeaderStyle, emp_iconStyle} from '../../styles'
import Dialog from 'material-ui/Dialog'

class index extends Component{

	constructor(props){
		super(props)
		props.fetch()		
	}

	componentWillReceiveProps(nextProps){		
		if (nextProps.deleteSuccess){
			this.showNotif('Employee successfully deleted.')		
		}
		
	}

	handleCreate(e){
		this.context.router.push('/employees/add')
	}

	handleEdit(e){
		var index = this.props.data.findIndex((d)=>d.selected==true)		
		this.context.router.push('/employees/profile/'+this.props.data[index].id)
	}
	handleDelete(e){
		this.props.delete()			
	}

	handleCloseDialog(e){
		this.props.cancelDelete()
	}

	handleDeleteNow(e){
		//this.props.cancelDelete()
	}

	render(){

		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleCloseDialog.bind(this)}
	      />,
	      <FlatButton
	        label="Delete"
	        primary={true}	        
	        onTouchTap={this.handleDeleteNow.bind(this)}
	      />
	    ]

		const { isFetching, isFetchFailed, errorMessage, data, hasError, editDisabled, deleteDisabled, isDeleteDialogOpen } = this.props 	
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
							 		label="ADD EMPLOYEE" 
							 		primary={true} 
							 		style={emp_iconStyle} 
							 		onClick={this.handleCreate.bind(this)} 
							 		icon={<CreateIco/>}
							 	/>
							 	<FlatButton 
							 		label="EDIT" 
							 		disabled={editDisabled} 
							 		primary={true}
							 		onClick={this.handleEdit.bind(this)}
							 		style={emp_iconStyle} 
							 		icon={<FontIcon className="fa fa-pencil" style={emp_iconHeaderStyle}/>} 
							 	/>
							 	<FlatButton 
							 		label="DELETE" 
							 		disabled={deleteDisabled} 
							 		primary={true}
							 		onClick={this.handleDelete.bind(this)}
							 		style={emp_iconStyle} 
							 		icon={<DeleteIco/>} 
							 	/>
							 </ToolbarGroup>
						</Toolbar>											
					</div>		

					<div className="child-main-content">
						{ body }	
					</div>

					<Dialog
			          title="Delete"
			          actions={actions}
			          modal={true}
			          open={isDeleteDialogOpen}>

			          Are you sure you want to delete selected employee(s)?

			        </Dialog>
					
				</div>
		)
	}
}

index.contextTypes = {
	router : React.PropTypes.object
}


export default index


