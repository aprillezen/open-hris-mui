import Batch from '../components/Settings/Batch/BatchForm'
import { connect } from 'react-redux'

import { loadBatchForm, saveBatchForm } from '../actions/BatchActions'


const mapStateToProps=(state)=>{
	return{
		isSaving : state.batchForm.isFetching,
		hasError : state.batchForm.hasError,
		message : state.batchForm.message,
		batch : state.batchForm.batch
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		saveForm: (batch)=> {
			dispatch(createBatch(batch))
		}
	}
}

const BatchContainer = connect(mapStateToProps, mapDispatchToProps)(Batch)

export default BatchContainer