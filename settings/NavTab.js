import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import People from 'material-ui/svg-icons/social/people'
import { menuStyle, subMenuLabel } from '../styles'
import Divider from 'material-ui/Divider'


class NavTab extends Component{

	handleClick(url,e){
		this.context.router.push(url)
	}

	// href="/settings/profile"   href="/settings/setup"

	render(){
		return(
				<div>					

			 		<List>				    	
				    	<ListItem style={menuStyle} onClick={this.handleClick.bind(this,"/settings/profile")} leftIcon={ <People/>}><div style={subMenuLabel}>Company Profile</div></ListItem>
				    	<ListItem style={menuStyle} onClick={this.handleClick.bind(this,"/settings/setup")} leftIcon={ <People/>}><div style={subMenuLabel}>General Setup</div></ListItem>
				    	<ListItem style={menuStyle} onClick={this.handleClick.bind(this,"/settings/jobtitle")} leftIcon={ <People/>}><div style={subMenuLabel}>Job Titles</div></ListItem>
				    	<ListItem style={menuStyle} onClick={this.handleClick.bind(this,4)} leftIcon={ <People/>}><div style={subMenuLabel}>Branches</div></ListItem>
				    	<ListItem style={menuStyle} onClick={this.handleClick.bind(this,5)} leftIcon={ <People/>}><div style={subMenuLabel}>Department</div></ListItem>				    	
				    </List>		
				  </div>
			
			)
	}
}

NavTab.contextTypes = {
	router : React.PropTypes.object
}

export default NavTab	