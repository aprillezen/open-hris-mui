import React, { Component } from 'react'

class RowLink extends Component{


	handleClick(e){

	}

	handleDelete(e){

	}

	render(){

		return(
			  <div>
					<button type="button" className="btn btn-default btn-sm" onClick={this.handleClick.bind(this)} ><i className="fa fa-pencil"></i>&nbsp;Edit</button>&nbsp;
					<button type="button" className="btn btn-default btn-sm" onClick={this.handleDelete.bind(this)}><i className="fa fa-trash"></i>&nbsp;Delete</button>				
			  </div>
			)
	}
}



export default RowLink