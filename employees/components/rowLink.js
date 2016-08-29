import React, { Component } from 'react'
import { connect } from 'react-redux'

class RowLink extends Component	{

	handleClick(e){
		//console.log(this.props.rowData.id)
		this.context.router.push('/employees/profile/'+this.props.rowData.id)

	}	

	handleDelete(e){

	}
	
	render(){	
		return(
			  <div className="rowLinkBorder">	
			 		 <table className="griddle-row-table">
						<tbody>
							<tr>
								<td className="griddle-row-table-td2"><h4>{this.props.rowData.fname}  {this.props.rowData.lname} </h4>{this.props.rowData.employeeId}</td>								
								<td className="griddle-row-table-td3">
									<button type="button" className="btn btn-default btn-sm" onClick={this.handleClick.bind(this)} ><i className="fa fa-pencil"></i></button>&nbsp;
									<button type="button" className="btn btn-default btn-sm" onClick={this.handleDelete.bind(this)}><i className="fa fa-trash"></i></button>				
								</td>
							</tr>
						</tbody>
					</table>	
										  								
			  </div>
			)
	}
}

RowLink.contextTypes = {
	router : React.PropTypes.object
}

export default RowLink