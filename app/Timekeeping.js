import React,{Component} from 'react'
import NavTab from  '../ta/NavTab'
import Divider from 'material-ui/Divider'

class Timekeeping extends Component{
	render(){
		return(
			 	<div className="main">
			        <div className="navigation-bar">
			           <NavTab/>
			        </div>
			        <div className="child-content">			         
			          {this.props.children}
			        </div>
			    </div>
			
			)
	}
}

export default Timekeeping