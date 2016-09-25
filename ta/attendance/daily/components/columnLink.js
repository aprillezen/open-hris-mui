import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSearchEmployee,fetchDailyIO } from '../actions'

class columnLink extends Component{
	
	handleSelect(e){		
		this.props.dispatch(selectSearchEmployee(this.props.data))
		this.props.dispatch(fetchDailyIO(this.props.dateStart, this.props.dateEnd, this.props.data))
	}

	render(){		
		return(
			  <div>	
			 	<button className="btn btn-success" onClick={this.handleSelect.bind(this)}>Select</button>		 														  						
			  </div>
			)
	}
}

const mapStateToProps = (state)=>{	
	return{					
		dateStart: state.dailyio.dateStart,
		dateEnd: state.dailyio.dateEnd		
	}
}

columnLink = connect(mapStateToProps)(columnLink)
export default columnLink



