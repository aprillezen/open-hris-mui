import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'

const mapStateToProps=(state)=>{
	//console.log(state)
	return{
		username: state.login.username,		
		isAuthenticated: state.login.isAuthenticated		
	}
}


const DashboardContainer = connect(mapStateToProps)(Dashboard)

export default DashboardContainer
