import React,{Component} from 'react'

class Employees extends Component{

	render(){
		return(			
				<div className="main">				 
			       <nav className="navigation-bar">								        
			       </nav>

			       {this.props.children}				   
			    </div>
			)

	}
}

export default Employees