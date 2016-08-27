import React, {Component} from 'react'
import TabLink from '../shared/TabLink'

class NavTab extends Component{

	render(){
		return(
				<ul className="nav nav-tabs">
				  <TabLink to="/leave/setup">&nbsp;&nbsp;&nbsp;Setup&nbsp;&nbsp;&nbsp;</TabLink>
				  <TabLink to="/leave/entitlement">Entitlement</TabLink> 
				  <TabLink to="/leave/card">Leave Card</TabLink> 
				</ul>
			)
	}
}

export default NavTab