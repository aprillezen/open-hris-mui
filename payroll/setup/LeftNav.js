import React, {Component} from 'react'
import ListNav from '../../shared/ListNav'

class LeftNav extends Component{

	render(){
		return(
			 <div className="list-group">				 	  	      
			      <ListNav to="/py/setup/options" className="list-group-item">Options</ListNav>			      
			      <ListNav to="/py/setup/taxstatus" className="list-group-item">Tax Status</ListNav>			      
			      <ListNav to="/py/setup/paycode" className="list-group-item">Payroll Accounts</ListNav>			      
			  </div>
			
			)
	}
}

export default LeftNav