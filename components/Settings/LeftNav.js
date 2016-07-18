import React, {Component} from 'react'
import ListNav from './ListNav'

class LeftNav extends Component{

	render(){
		return(
			 <div className="list-group">
			      <div className="list-group-item list-group-header">Settings</div>
				  <ListNav to="/settings/batch" className="list-group-item">Batch</ListNav> 
				  <ListNav to="/settings/classes" className="list-group-item">Class</ListNav> 
				  <ListNav to="/settings/section" className="list-group-item">Section</ListNav> 
				  <ListNav to="/settings/subjects" className="list-group-item">Subjects</ListNav> 
			  </div>
			
			)
	}
}

export default LeftNav