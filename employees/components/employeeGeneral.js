import React, {Component} from 'react'
import Alert from '../../shared/Alert'
import General_PI from './general_pi_view'
import {EmployeeGeneralEditContainer} from '../container'
import Snackbar from 'material-ui/Snackbar'

class EmployeeGeneral extends Component{

	constructor(props){
		super(props)
		this.state = { sbIsOpen: false }	
		this.props.load(props.employeeId)
	}

	onEdit(e){
		this.props.loadGeneralEdit()
	}

	handleRequestClose(e){
		this.setState({ sbIsOpen: false })
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.updateSuccess){	
			this.setState({ sbIsOpen: true })								
		}
	}

	render(){

		const { data,isFetching, isFetchFailed, hasError, errorMessage, editMode } = this.props
		let body = <General_PI data={data} onEdit={this.onEdit.bind(this)} />	

		if (editMode){			
			body = <EmployeeGeneralEditContainer/>
		}else{
			if (isFetching){
				body = <div>
	        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
	        		   </div>
			}
			if (isFetchFailed){
				body = <Alert hasError={isFetchFailed} message={errorMessage}/>
			}
		}
		
		return(<div>
				  {body}		
				  <Snackbar
			          open={this.state.sbIsOpen}
			          message="Changes successfully saved."
			          autoHideDuration={4000}
			          onRequestClose={this.handleRequestClose.bind(this)}
			        />			   				 			 				 
				</div>
			)
	}
}
export default EmployeeGeneral

