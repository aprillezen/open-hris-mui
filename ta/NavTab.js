import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import People from 'material-ui/svg-icons/social/people'
import { menuStyle, subMenuLabel } from '../styles'
import Divider from 'material-ui/Divider'


class NavTab extends Component{

	render(){
		return(
				<div>					

			 		<List>				    	
				    	<ListItem style={menuStyle} leftIcon={ <People/>}><div style={subMenuLabel}>Options</div></ListItem>
				    	<ListItem style={menuStyle} leftIcon={ <People/>}><div style={subMenuLabel}>Shift</div></ListItem>
				    	<ListItem style={menuStyle} leftIcon={ <People/>}><div style={subMenuLabel}>Holidays</div></ListItem>
				    	<ListItem style={menuStyle} leftIcon={ <People/>}><div style={subMenuLabel}>Attendance Policies</div></ListItem>
				    </List>		
				  </div>
			
			)
	}
}

export default NavTab