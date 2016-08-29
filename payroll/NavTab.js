import React, {Component} from 'react'
import TabLink from '../shared/TabLink'

class NavTab extends Component{

	render(){
		return(
				<ul className="nav nav-tabs">
				  <TabLink to="/py/setup">&nbsp;&nbsp;&nbsp;Setup&nbsp;&nbsp;&nbsp;</TabLink>
				  <TabLink to="/py/entries">Payroll Entries</TabLink> 
				  <TabLink to="/py/run">Payroll Run</TabLink> 
				</ul>
			)
	}
}

export default NavTab