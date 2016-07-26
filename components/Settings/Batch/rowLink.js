import React, { Component } from 'react'
import SkyLight from 'react-skylight'
import Alert from '../../../components/Alert'
class RowLink extends Component{

	constructor(){
		super()		
	}

	handleDelete(e){
		this.refs.simpleDialog.show()
		this.props.initDelete()
	}

	handleDeleteOk(e){
		//console.log(this.props)
		this.props.deleteBatch(this.props.rowData.id)
	}

	handleCloseModal(e){
		this.refs.simpleDialog.hide()
	}

	handleClick(e){
		//console.log(this.props)		
		this.context.router.push('/settings/batch/'+this.props.rowData.id)
	}
	render(){

		 var deleteDialog = {		      		    
		      width: '50%',
		      height: '200px',
		      marginTop: '-200px',
		      marginLeft: '-20%',
	    }

	    const { isDeleting, hasError, message} = this.props
	    var loading=<div></div>
	    if (isDeleting){
	    	loading=<div><i className="fa fa-spinner fa-spin fa-1x fa-fw"></i></div>
	    }

		return(<div>
					<table className="griddle-row-table">
						<tbody>
							<tr>
								<td className="griddle-row-table-td1"><i className="fa fa-cube"></i></td>
								<td className="griddle-row-table-td2"> 
									<h4>{this.props.rowData.batchname}</h4>
									<p className="text-muted">{this.props.rowData.yearfrom}-{this.props.rowData.yearto}</p>
								</td>
								<td className="griddle-row-table-td3">
									<button type="button" className="btn btn-default btn-sm" onClick={this.handleClick.bind(this)} ><i className="fa fa-pencil"></i>&nbsp;Edit</button>
									<button type="button" className="btn btn-default btn-sm" onClick={this.handleDelete.bind(this)}><i className="fa fa-trash"></i>&nbsp;Delete</button>
								</td>
							</tr>
						</tbody>
					</table>		

					<SkyLight dialogStyles={deleteDialog} hideOnOverlayClicked ref="simpleDialog" title="">
					  <h3>Delete '{this.props.rowData.batchname}' </h3>			          
			          <button className="btn btn-danger" onClick={this.handleDeleteOk.bind(this)}>Yes, continue delete</button>
			          &nbsp;<button className="btn btn-default" onClick={this.handleCloseModal.bind(this)}>Cancel</button>
			           {loading}
			           <Alert hasError={hasError} message={message}/>
			        </SkyLight>


				</div>
			)
	}
}

RowLink.contextTypes = {
	router : React.PropTypes.object
}

export default RowLink