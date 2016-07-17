import React from 'react'
import NavBar from '../components/NavBar'

class Appnav extends React.Component{
	render(){
		return(
			<div>
				<NavBar/>				
				{ this.props.children }
			 </div>

		)
	}

}

export default Appnav;