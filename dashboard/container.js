import DashboardIndex from './components/index'
import { connect } from 'react-redux'

const mapStateToProps=(state)=>{
	//console.log(state)
	return{
		username: state.login.username,		
		isAuthenticated: state.login.isAuthenticated		
	}
}


const DashboardContainer = connect(mapStateToProps)(DashboardIndex)

export default DashboardContainer
