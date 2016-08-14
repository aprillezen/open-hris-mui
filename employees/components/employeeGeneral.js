import React, {Component} from 'react'
import General_PI from './general_pi_view'
import General_CI from './general_ci_view'

import Alert from '../../shared/Alert'
import {EmployeeGeneralEditContainer} from '../container'
import {EmployeeGeneralEditCIContainer} from '../container'


class EmployeeGeneral extends Component{

	constructor(props){
		super(props)
		this.props.load(props.params.id)
	}

	onEdit(e){
		this.props.loadGeneralEdit()
	}

	onEditCI(e){
		this.props.loadGeneralEditCI()
	}

	render(){
		const { data,isFetching, isFetchFailed, hasError, errorMessage, isGeneralEdit, isGeneralEditCI} = this.props

		let body = <General_PI data={data} onEdit={this.onEdit.bind(this)} />
		let content =  <General_CI data={data} onEdit={this.onEditCI.bind(this)}/>


		if (isGeneralEdit){
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
		
		if (isGeneralEditCI){
			content = <EmployeeGeneralEditCIContainer/>
		}

		return(<div>
				  {body}	
				  <br/>	
				  {content}
				</div>
			)
	}
}


export default EmployeeGeneral

