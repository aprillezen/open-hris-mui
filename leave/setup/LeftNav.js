import React, {Component} from 'react'
import ListNav from '../../shared/ListNav'

class LeftNav extends Component{

	render(){
		return(
			 <div className="list-group">				 	  	      
			      <ListNav to="/leave/setup/options" className="list-group-item">Options</ListNav>
			      <ListNav to="/leave/setup/lt" className="list-group-item">Leave Types</ListNav>					  
			  </div>
			
			)
	}
}

export default LeftNav