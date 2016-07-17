import React, { Component } from 'react'

class RowLink extends Component{

	handleClick(e){
		console.log(this.props.rowData)
	}

	render(){
		return(
				<div>
					<a href="#"  onClick={this.handleClick.bind(this)}><i className="fa fa-pencil"></i></a>
				</div>
			)
	}

}

export default RowLink