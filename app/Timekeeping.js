import React,{Component} from 'react'
import NavTab from  '../ta/NavTab'

class Timekeeping extends Component{
	render(){
		return(
			<div className="container">
				<div className="row row-addTop">
					<div className="row col-sm-12"><NavTab/></div>
					<div className="row col-sm-12">
						{this.props.children}
					</div>
				</div>
			 </div>
			)
	}
}

export default Timekeeping