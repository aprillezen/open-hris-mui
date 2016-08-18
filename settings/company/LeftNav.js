import React, {Component} from 'react'
import ListNav from '../../shared/ListNav'

class LeftNav extends Component{

	render(){
		return(
			 <div className="list-group">				 	  	      
			      <ListNav to="/settings/company/profile" className="list-group-item">Profile</ListNav>
			      <ListNav to="/settings/company/setup" className="list-group-item">Setup</ListNav>	
				  <ListNav to="/settings/company/jobtitle" className="list-group-item">Job Titles</ListNav> 			  			  
			  </div>
			
			)
	}
}

export default LeftNav