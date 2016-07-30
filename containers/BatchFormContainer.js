import Batch from '../components/Settings/Batch/BatchForm'
import { connect } from 'react-redux'

import { loadAddForm, saveFailedForm, valueChangeForm} from '../actions'
import { getBatch, saveBatch} from '../actions/SettingsActionsDispatch'


const mapStateToProps=(state)=>{
	return{
		editMode : state.batchForm.editMode,
		isSaving : state.batchForm.isSaving,
		hasError : state.batchForm.hasError,
		message : state.batchForm.message,
		batch : state.batchForm.data,
		batchname : state.batchForm.data.batchname,
		isFetching : state.batchForm.isFetching,
		editMode : state.batchForm.editMode,
		title: state.batchForm.title
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		loadAddForm: (batch)=>{
			dispatch(loadAddForm(batch,"Create Batch"))			
		},
		save: (mode, batch)=> {
			dispatch(saveBatch(mode, batch))
		},
		failedSave: (message)=>{
			dispatch(saveFailedForm(message))
		},
		edit: (id)=>{
			dispatch(getBatch(id))
		},
		valueChanged: (batch, field, value)=>{
			dispatch(valueChangeForm(batch, field,value))
		}
	}
}

const BatchContainer = connect(mapStateToProps, mapDispatchToProps)(Batch)

export default BatchContainer