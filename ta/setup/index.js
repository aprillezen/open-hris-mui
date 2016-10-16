import React, {Component} from 'react'
import LeftNav from './LeftNav'

class index extends Component {

	render(){
		return(<div>
					{this.props.children}		
				</div>
			)
	}
}


export default index
