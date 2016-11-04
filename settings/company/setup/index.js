import React, {Component} from 'react'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import { emp_headerStyle, emp_headerTitleStyle} from '../../../styles'

class index extends Component{

	render(){

		return(
			<div className="child-content">		
				<div className="child-content-header">
					<Toolbar style={emp_headerStyle}>
						 <ToolbarGroup>							 						 	
						 	<ToolbarTitle style={emp_headerTitleStyle} text="Company Setup" />							 	
						 </ToolbarGroup>							 
					</Toolbar>
				</div>
				<div className="child-main-content">
					
				</div>							
			</div>
		)
	}
}

export default index