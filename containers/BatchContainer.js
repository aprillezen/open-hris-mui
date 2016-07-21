import Batch from '../components/Settings/Batch/Batch'
import { connect } from 'react-redux'

import { initBatch, loadSuccess} from '../actions/BatchActions'


const mapStateToProps=(state)=>{
	return{
		isFetching : state.batch.isFetching,
		isFailed : state.batch.isFailed,
		message : state.batch.message,
		batches : state.batch.batches

	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		initialize: ()=> {
			dispatch(initBatch())
		}
	}
}

const BatchContainer = connect(mapStateToProps, mapDispatchToProps)(Batch)

export default BatchContainer