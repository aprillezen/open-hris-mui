import { connect } from 'react-redux'
import { fetchShift,loadAddForm,valueChangeForm,saveFailedForm,
		 saveShift,loadEdit,
		 loadDeleteDialog, cancelDelete} from './actions'
import List from './components/list'
import ShiftForm from './components/shiftForm'

const mapStateToProps = (state)=>{
	
	return{
		isFetching: state.shift.isFetching,
		isFetchFailed: state.shift.isFetching,
		hasError: state.shift.hasError,
		message: state.shift.message,
		data: state.shift.data,
		deleteSuccess: state.shift.deleteSuccess,
		deletemsg: state.shift.deletemsg
	}
}

const mapDispatchToProps= (dispatch)=>{
	return {
		fetch: ()=>{
			dispatch(fetchShift())
		}
	}

}

export const ShiftListContainer = connect(mapStateToProps, mapDispatchToProps)(List)

const mapStateToPropsForm=(state)=>{
	return{
		editMode : state.shiftForm.editMode,
		isFetching : state.shiftForm.isFetching,	
		isSaving : state.shiftForm.isSaving,
		hasError : state.shiftForm.hasError,
		message : state.shiftForm.message,
		data : state.shiftForm.data,		
		title: state.shiftForm.title,		
		saveAddSuccess: state.shiftForm.saveAddSuccess,
		updateSuccess: state.shiftForm.updateSuccess
	}
}

const mapDispatchToPropsForm = (dispatch)=>{
	const blankdata = { 
						"id": 0, 
						"description":'', 						
						"starttime":'',
						"breakfrom":'',
						"breakto":'',
						"endtime":'',
						"isdefault": 0
					   }
	return {
		add: ()=>{
			dispatch(loadAddForm(blankdata, "Create new shift"))
		},
		save: (data,editMode)=>{
			dispatch(saveShift(data, editMode))
		},
		valueChanged: (data, field, value)=>{
			dispatch(valueChangeForm(data, field, value))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedForm(message))
		},	 
	 	edit: (id)=>{
	 		dispatch(loadEdit(id,"Edit shift"))
	 	}
	}

}

export const ShiftFormContainer = connect(mapStateToPropsForm, mapDispatchToPropsForm)(ShiftForm)





