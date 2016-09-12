import React, {Component} from 'react'
import ListNav from '../../shared/ListNav'

class LeftNav extends Component{

	render(){
		return(
			 <div className="list-group">				 	  	      
			      <ListNav to="/ta/attendance/daily" className="list-group-item">Daily Clock In/Out</ListNav>			      
			      <ListNav to="/ta/attendance/process" className="list-group-item">Process Timesheet</ListNav>			      
			  </div>
			
			)
	}
}

export default LeftNav