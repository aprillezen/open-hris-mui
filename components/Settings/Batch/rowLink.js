import React, { Component } from 'react'
import SkyLight from 'react-skylight'

class RowLink extends Component{

	constructor(){
		super()		
	}

	handleDelete(e){
		this.refs.simpleDialog.show()
	}

	handleDeleteOk(e){

	}

	handleCloseModal(e){
		this.refs.simpleDialog.hide()
	}

	handleClick(e){
		//console.log(this.props)		
		this.context.router.push('/settings/batch/'+this.props.rowData.id)
	}
	render(){

		 var myBigGreenDialog = {		      		    
		      width: '50%',
		      height: '200px',
		      marginTop: '-200px',
		      marginLeft: '-20%',
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

					<SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="">
					  <h3>Delete '{this.props.rowData.batchname}' </h3>			          
			          <button className="btn btn-danger" onClick={this.handleDeleteOk.bind(this)}>Yes, continue delete</button>
			          &nbsp;<button className="btn btn-default" onClick={this.handleCloseModal.bind(this)}>Cancel</button>
			        </SkyLight>

				</div>
			)
	}
}

RowLink.contextTypes = {
	router : React.PropTypes.object
}

export default RowLink