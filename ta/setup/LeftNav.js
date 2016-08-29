import React, {Component} from 'react'
import ListNav from '../../shared/ListNav'

class LeftNav extends Component{

	render(){
		return(
			 <div className="list-group">				 	  	      
			      <ListNav to="/ta/setup/options" className="list-group-item">Options</ListNav>			      
			      <ListNav to="/ta/setup/shift" className="list-group-item">Shift</ListNav>			      
			  </div>
			
			)
	}
}

export default LeftNav