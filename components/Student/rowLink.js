import React, { Component } from 'react'

class RowLink extends Component{

	handleClick(e){
		console.log(this.props.rowData)
	}
	render(){
		return(
				<div>
				   <button type="button" className="btn btn-default btn-sm"  onClick={this.handleClick.bind(this)} ><i className="fa fa-pencil"></i>&nbsp;Edit</button>
				</div>
			)
	}
}

export default RowLink