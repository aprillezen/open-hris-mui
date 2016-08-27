import React, {Component} from 'react'
import { Link } from 'react-router'

class TabLink extends Component {

	render(){
		const { router } = this.context
		const isActive = router.isActive(this.props.to, this.props.params, this.props.query)
	    const className = isActive ? 'active' : '';
		return(
				<li className={className}>
					<Link {...this.props} />
				</li>
			)
	}
}

TabLink.contextTypes = {
	router: React.PropTypes.object.isRequired
}
export default TabLink