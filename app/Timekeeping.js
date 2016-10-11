import React,{Component} from 'react'
import NavTab from  '../ta/NavTab'

class Timekeeping extends Component{
	render(){
		return(
			<div className="container-fluid">
				<div className="row-fluid col-sm-12">
					{this.props.children}
				</div>
			 </div>
			)
	}
}

export default Timekeeping