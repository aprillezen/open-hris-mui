import React, { Component } from 'react'

class RowLink extends Component{

	handleClick(e){
		console.log(this.props.rowData)
	}
	render(){

		return(<div>
					<table className="griddle-row-table">
						<tbody>
							<tr>
								<td className="griddle-row-table-td1"><i className="fa fa-cube"></i></td>
								<td className="griddle-row-table-td2"> 
									<h4>{this.props.rowData.batchname}</h4>
									<p className="text-muted">{this.props.rowData.yearfrom}-{this.props.rowData.yearto}</p>
								</td>
								<td className="griddle-row-table-td3"><button type="button" className="btn btn-default btn-sm"  onClick={this.handleClick.bind(this)} ><i className="fa fa-pencil"></i>&nbsp;Edit</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			)
	}
}

export default RowLink