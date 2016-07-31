import ClassList from '../components/Settings/Classes/StudClass'
import { connect } from 'react-redux'

import { getClassFilterList } from '../actions/SettingsActionsDispatch'
import { filterValueChanged } from '../actions'

const mapStateToProps =(state)=>{
	return{
		isFetching : state.batch.isFetching,
		isFailed : state.batch.isFailed,
		message : state.batch.message,
		data : state.batch.data,
		batches: state.batch.filterdata,
		selectedBatch: state.batch.selectedFilter
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		loadFilter: ()=>{
			dispatch(getClassFilterList())
		},
		filterChanged: (id)=>{
			dispatch(filterValueChanged(id))
		}
	}
}

const StudClassContainer = connect(mapStateToProps, mapDispatchToProps)(ClassList)

export default StudClassContainer