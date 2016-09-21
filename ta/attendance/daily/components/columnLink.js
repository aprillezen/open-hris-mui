import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSearchEmployee } from '../actions'

class columnLink extends Component{
	
	handleSelect(e){
		this.props.dispatch(selectSearchEmployee(this.props.data))
	}

	render(){		
		return(
			  <div>	
			 	<button className="btn btn-success" onClick={this.handleSelect.bind(this)}>Select</button>		 														  						
			  </div>
			)
	}
}

columnLink = connect()(columnLink)

export default columnLink



