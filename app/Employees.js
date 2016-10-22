import React,{Component} from 'react'
import Divider from 'material-ui/Divider'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'

class Employees extends Component{


	handleCreate(e){
		this.context.router.push('/employees/add')
	}

	render(){
		return(			
				<div className="main">				 
			       
			        <div className="child-content">			         
			          <div className="child-content-header">
						<Toolbar>
							 <ToolbarGroup>
							 	<ToolbarTitle text="Employees" />
							 	<FlatButton label="CREATE" onClick={this.handleCreate.bind(this)} />
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

Employees.contextTypes = {
	router : React.PropTypes.object
}

export default Employees