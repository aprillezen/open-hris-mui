import React, {Component} from 'react'
import Select from 'react-select'
import Alert from '../../shared/Alert'
import EmploymentView from './employment_view'
import { EmployeeEmploymentFormContainer }from '../container'
import Snackbar from 'material-ui/Snackbar'

class EmployeeEmployment extends Component{
	
	constructor(props){
		super(props)	
		this.state = { sbIsOpen: false }	
		props.load(props.employeeId)
	}
	
	handleRequestClose(e){
		this.setState({ sbIsOpen: false })
	}

	onEdit(e){
		this.props.edit(this.props.employeeId)
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.updateSuccess){
			this.setState({ sbIsOpen: true })	
		}
	}

	render(){

		const { data, withdata, isFetching, isFetchFailed, hasError, errorMessage, editMode} = this.props
		let body = <EmploymentView data={data} withdata={withdata} onEdit={this.onEdit.bind(this)} />

		if (editMode){	
			body = <EmployeeEmploymentFormContainer/>
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

		return(
				<div>
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

export default EmployeeEmployment

