import List from './components/list'
import { fetchDailyIO, changeDateStart, changeDateEnd,loadSearchEmployee,closeSearchEmployee,fetchEmployees } from './actions'
import { connect } from 'react-redux'

const mapStateToProps = (state)=>{	
	return{
		isFetching: state.dailyio.isFetching,
		isFetchFailed: state.dailyio.isFetching,
		hasError: state.dailyio.hasError,
		message: state.dailyio.message,
		data: state.dailyio.data,
		deleteSuccess: state.dailyio.deleteSuccess,
		deletemsg: state.dailyio.deletemsg,
		employeeId: state.dailyio.employeeId,
		dateStart: state.dailyio.dateStart,
		dateEnd: state.dailyio.dateEnd,
		employees: state.dailyio.employees,
		isSearchDialogOpen: state.dailyio.isSearchDialogOpen,
		isFetchingSearch: state.dailyio.isFetchingSearch,
		isFetchSearchFailed: state.dailyio.isFetchSearchFailed,
		searchDialogMessage: state.dailyio.searchDialogMessage
	}
}
const mapDispatchToProps= (dispatch)=>{
	return {
		fetch: (dateStart, dateEnd)=>{
			dispatch(fetchDailyIO(dateStart, dateEnd))
		},
		changeStart: (dateStart)=>{
			dispatch(changeDateStart(dateStart))
		},
		changeEnd:(dateEnd)=>{
			dispatch(changeDateEnd(dateEnd))
		},
		loadSearch:()=>{
			dispatch(loadSearchEmployee())
		},
		fetchEmp:()=>{
			dispatch(fetchEmployees())
		},
		closeSearch:()=>{
			dispatch(closeSearchEmployee())
		}
	}

}
export const TmDailyListContainer = connect(mapStateToProps, mapDispatchToProps)(List)


