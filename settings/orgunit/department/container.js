import index from './components/index'
import { connect } from 'react-redux'
import { fetchDepartment } from './actions'

const mapStateToProps =(state)=>{	
	return{
		isFetching : state.department.isFetching,
		isFailed : state.department.isFailed,
		message : state.department.message,
		data : state.department.data
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		fetch: ()=> {
			dispatch(fetchDepartment())
		}
	}
}

const container = connect(mapStateToProps, mapDispatchToProps)(index)

export default container

