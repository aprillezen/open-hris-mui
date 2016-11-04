import React, {Component} from 'react'
import NavTab from  '../settings/NavTab'

class Settings extends Component{

	render(){
		return(
				<div className="main">
			        <div className="navigation-bar">
			           <NavTab/>
			        </div>			      		         
			          {this.props.children}			        
			    </div>
			)
	}
}

export default Settings