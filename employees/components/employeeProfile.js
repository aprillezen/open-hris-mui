import React, {Component} from 'react'
import LeftNav from './LeftNav'
import { Link } from 'react-router'

class EmployeeProfile extends Component{


	render(){

		const { params } = this.props

		return(
				<div>
					<div className="row addTop col-sm-12">
						<Link  to="/employees/list" className="btn btn-default pull-right">Back</Link>
					</div>

				    <div className="row">														
						<div className="col-sm-3">
							<div className="well profile-photo"></div>
							<LeftNav employeeId={params.id}/>					
						</div>
						<div className="col-sm-9">
							{this.props.children}		
						</div>
					</div>
				</div>
			)
	}
}


export default EmployeeProfile