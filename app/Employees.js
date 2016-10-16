import React,{Component} from 'react'
import Divider from 'material-ui/Divider'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton';

class Employees extends Component{
	render(){
		return(			
				<div className="main">				 
			        <nav className="navigation-bar">			           
			        </nav>
			        <div className="child-content">			         
			          <div className="child-content-header">
						<Toolbar>
							 <ToolbarGroup>
							 	<ToolbarTitle text="Employees" />
							 	<FlatButton label="CREATE" />
							 </ToolbarGroup>

						</Toolbar>						
			          </div>		

			          <div className="child-content-contents">
			          	  {this.props.children}	
			          </div>

			        </div>
			    </div>
			)

	}
}

export default Employees