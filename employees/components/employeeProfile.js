import React, {Component} from 'react'
import IconButton from 'material-ui/IconButton'
import BackIco from 'material-ui/svg-icons/navigation/arrow-back'
import { emp_iconAddStyle } from '../../styles'
import Avatar from 'material-ui/Avatar'
import { EmployeeGeneralContainer, EmployeeEmploymentContainer } from '../container'

class EmployeeProfile extends Component{

	constructor(props){
		super(props)				
	}

	handleBack(e){
		this.context.router.push('/employees/list')
	}	
	render(){
		
		return(
				<div className="child-content">			         
					<div className="child-content-header-avatar">
						<div className="avatar-pic">
							<Avatar
					 	 	src="/images/nopic.png"
					 	 	size={48}/>		
						</div>
						<div className="avatar-title">
							<h4>Dondon Abion</h4>
						</div>	
						<div className="avatar-button">
							<IconButton 							 	
						 		style={emp_iconAddStyle} 							 		
						 		onClick = {this.handleBack.bind(this)}>
						 		<BackIco/>
						 	</IconButton>
						</div>						
					</div>		

					<div className="child-main-content">
						<EmployeeGeneralContainer employeeId={this.props.params.id} />
						<br/>
						<EmployeeEmploymentContainer employeeId={this.props.params.id} />
					</div>
					<br/>
					<br/>
								
				</div>


			)
	}
}

EmployeeProfile.contextTypes = {
	router : React.PropTypes.object
}
export default EmployeeProfile