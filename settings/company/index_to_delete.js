import React, {Component} from 'react'
import LeftNav from './LeftNav'

class index extends Component {

	render(){
		return(<div className="row">
					<br/>				
					<div className="col-sm-2">
						<LeftNav/>					
					</div>
					<div className="col-sm-10">
						{this.props.children}		
					</div>
				</div>
			)
	}
}


export default index
