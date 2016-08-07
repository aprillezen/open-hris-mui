import React, { Component } from 'react'
import { connect } from 'react-redux'
import {DataForm_Container} from '../container'
import { SkyLightStateless } from 'react-skylight'
import { loadEditForm,cancelDelete,loadDeleteDialog,deleteDepartment} from '../actions'

class RowLink extends Component{


	handleClick(e){		
		this.props.dispatch(loadEditForm(this.props.rowData,"Edit"))
	}

	handleDelete(e){
		//console.log(this.props.rowData)
		this.props.dispatch(loadDeleteDialog(this.props.rowData.id, this.props.rowData.description))
	}

	closeClickDelete(e){
		this.props.dispatch(cancelDelete())
	}

	closeDeleteModal(e){
		this.props.dispatch(cancelDelete())
	}

	deleteNow(e){
		//console.log(this.props.deleteId)
		this.props.dispatch(deleteDepartment(this.props.deleteId))
	}

	render(){

		var deleteDialog = {		      		    
		      width: '40%',
		      height: '250px',
		      marginTop: '-200px',
		      marginLeft: '-20%',
		      paddingLeft: 30,
		      paddingRight: 30
	    }

	    const { isDeleteDialogOpen, isDeleting, deleteErrorMsg, deleteHasError, deletemsg} = this.props

		var loading=<div></div>
	    if (isDeleting){
	    	loading=<div><i className="fa fa-spinner fa-spin fa-1x fa-fw"></i></div>
	    }

		return(
			  <div className="rowLinkBorder">	
			 		 <table className="griddle-row-table">
						<tbody>
							<tr>
								<td className="griddle-row-table-td2"><h4>{this.props.rowData.description} </h4></td>								
								<td className="griddle-row-table-td3">
									<button type="button" className="btn btn-default btn-sm" onClick={this.handleClick.bind(this)} ><i className="fa fa-pencil"></i></button>&nbsp;
									<button type="button" className="btn btn-default btn-sm" onClick={this.handleDelete.bind(this)}><i className="fa fa-trash"></i></button>				
								</td>
							</tr>
						</tbody>
					</table>	
					<DataForm_Container/>	

					<SkyLightStateless dialogStyles={deleteDialog} hideOnOverlayClicked ref="dialog" title="" isVisible={isDeleteDialogOpen} onCloseClicked={this.closeClickDelete.bind(this)}>			 		   
					    <div className="dialogTitle">Delete</div>
	         			<div className="row form-group deleteDialog">							    
						    <div className="col-sm-12">
						    	<h3>Delete '{deletemsg}'</h3>
						    </div>	
						    {loading}					    
						 </div>	
						 <div className="pull-right">
							 <button className="btn btn-default" onClick={this.closeDeleteModal.bind(this)}>Cancel</button>	
							 &nbsp;&nbsp;
							 <button className="btn btn-danger" onClick={this.deleteNow.bind(this)}>Yes, delete it</button>		 
						 </div>			          			          
		        	</SkyLightStateless>						  									
			  </div>
			)
	}
}

const mapStateToProps =(state)=>{		
	return{		
		isDeleteDialogOpen: state.department.isDeleteDialogOpen,
		isDeleting: state.department.isDeleting,
		message: state.department.message,
		hasError: state.department.hasError,
		deletemsg: state.department.deletemsg,
		deleteId: state.department.deleteId
	}
}
RowLink = connect(mapStateToProps)(RowLink)

export default RowLink