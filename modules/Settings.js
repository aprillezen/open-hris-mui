import React, {Component} from 'react'
import LeftNav from  '../components/Settings/LeftNav'

class Settings extends Component{

	render(){
		return(
			<div className="container">
				<div className="row row-addTop">
					<div className="col-sm-3"><LeftNav/></div>
					<div className="col-sm-9">
						{this.props.children}
					</div>
				</div>
			 </div>
			)
	}
}

export default Settings