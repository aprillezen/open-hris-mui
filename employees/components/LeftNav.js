import React, {Component} from 'react'
import ListNav from './ListNav'

class LeftNav extends Component{

	render(){
		const { employeeId } = this.props
		return(
			 <div className="list-group">			      
			      <ListNav to={"/employees/profile/"+employeeId+"/general"} className="list-group-item">General Information</ListNav>
				  <ListNav to={"/employees/profile/"+employeeId+"/employment"} className="list-group-item">Employment</ListNav> 
				  <ListNav to={"/employees/profile/"+employeeId+"/bc"} className="list-group-item">Benefits & Compensation</ListNav> 
				  <ListNav to={"/employees/profile/"+employeeId+"/ta"} className="list-group-item">Time and Attendance</ListNav> 				  
				  <ListNav to={"/employees/profile/"+employeeId+"/loan"} className="list-group-item">Loans</ListNav> 				  
				  <ListNav to={"/employees/profile/"+employeeId+"/payroll"} className="list-group-item">Payroll</ListNav> 				  

			  </div>
			
			)
	}
}

LeftNav.propTypes = {
	employeeId: React.PropTypes.string.isRequired
}

export default LeftNav