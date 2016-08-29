import React, {Component} from 'react'
import EmploymentView from './employment_view'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Alert from '../../shared/Alert'

import { EmployeeEmploymentFormContainer }from '../container'

class EmployeeEmployment extends Component{
	
	constructor(props){
		super(props)	
		props.load(props.params.id)
	}

	onEdit(e){
		this.props.edit(this.props.params.id)
	}

	render(){



		const { data,isFetching, isFetchFailed, hasError, errorMessage, isLoadEdit} = this.props
		let body = <EmploymentView data={data} onEdit={this.onEdit.bind(this)} />

		if (isFetching){
			body = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}else if(isLoadEdit){
			
			body = <EmployeeEmploymentFormContainer/>
		}

		if (isFetchFailed){
			body = <Alert hasError={isFetchFailed} message={errorMessage}/>
		}



		return(
				<div>
					{body}
				</div>
			)
	}
}



export default EmployeeEmployment