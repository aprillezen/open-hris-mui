import Batch from '../components/Settings/Batch/BatchForm'
import { connect } from 'react-redux'

import { addBatchForm, saveBatch,saveFailedBatchForm, editBatchForm, getBatch, valueChangeFormBatch} from '../actions/BatchActions'


const mapStateToProps=(state)=>{
	return{
		isSaving : state.batchForm.isFetching,
		hasError : state.batchForm.hasError,
		message : state.batchForm.message,
		batch : state.batchForm.batch,
		batchname : state.batchForm.batch.batchname,
		isFetching : state.batchForm.isFetching
		//batches: state.batch.batches

	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		addForm: (batch)=>{
			dispatch(addBatchForm(batch))			
		},
		saveForm: (mode, batch)=> {
			dispatch(saveBatch(mode, batch))
		},
		editForm: (batch)=>{
			dispatch(editBatchForm(batch))
		},
		failedSave: (message)=>{
			dispatch(saveFailedBatchForm(message))
		},
		getBatchEdit: (id)=>{
			dispatch(getBatch(id))
		},
		valueChanged: (batch, field, value)=>{
			dispatch(valueChangeFormBatch(batch, field,value))
		}
	}
}

const BatchContainer = connect(mapStateToProps, mapDispatchToProps)(Batch)

export default BatchContainer