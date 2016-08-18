import React, {Component} from 'react'
import TabLink from './TabLink'

class NavTab extends Component{

	render(){
		return(
				<ul className="nav nav-tabs">
				  <TabLink to="/settings/company">Company</TabLink>
				  <TabLink to="/settings/unit">Organizational Unit</TabLink> 
				  <TabLink to="/settings/security">Security</TabLink> 
				</ul>
			)
	}
}

export default NavTab