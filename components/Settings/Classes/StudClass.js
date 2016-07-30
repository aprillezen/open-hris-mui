import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class StudClass extends Component{

	render(){

		var options = [
						{ value: 'one', label: 'One' },
						{ value: 'two', label: 'Two' }
					  ]


		return(
				<div className="panel panel-default">
				  <div className="panel-heading">
				    <h3 className="panel-title">Classes</h3>
			    	<div className="pull-right minusTop">
					  	<Select name="selectbatch" value="one" options={options} />
					</div>
				  </div>
				  <div className="panel-body">
				    Classess
				  </div>
				</div>
			)
	}
}

export default StudClass