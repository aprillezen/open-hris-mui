import React, {Component} from 'react'
import ListNav from '../../shared/ListNav'

class LeftNav extends Component{

	render(){
		return(
			 <div className="list-group">
			      <div className="list-group-item list-group-header">Units</div>
			      <ListNav to="/settings/unit/branch" className="list-group-item">Branches</ListNav>
				  <ListNav to="/settings/unit/department" className="list-group-item">Department</ListNav> 
				  <ListNav to="/settings/unit/groups" className="list-group-item">Groups</ListNav> 
				  <ListNav to="/settings/unit/division" className="list-group-item">Division</ListNav> 				  
			  </div>
			
			)
	}
}

export default LeftNav