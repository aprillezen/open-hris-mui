import React, {Component} from 'react'
import TabLink from '../shared/TabLink'

class NavTab extends Component{

	render(){
		return(
				<ul className="nav nav-tabs">
				  <TabLink to="/ta/setup">&nbsp;&nbsp;&nbsp;Setup&nbsp;&nbsp;&nbsp;</TabLink>
				  <TabLink to="/ta/schedule">Schedule</TabLink> 
				  <TabLink to="/ta/attendance">Attendance</TabLink> 
				</ul>
			)
	}
}

export default NavTab