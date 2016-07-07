import React from 'react'
import NavBar from '../components/NavBar'

class Appnav extends React.Component{
	render(){
		return(
			<div>
				<NavBar/>				
			 	<div className="content-wrapper">
					{ this.props.children }
			 	</div>
			 </div>

		)
	}

}

export default Appnav;