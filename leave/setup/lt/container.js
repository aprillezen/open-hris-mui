import { connect } from 'react-redux'
import { fetchLeaveTypes,loaddAdd,valueChangeForm,saveFailedForm,
		 headvalueChangeForm, saveLeaveType,loadEdit,
		 loadDeleteDialog, cancelDelete} from './actions'
import List from './components/list'
import LtForm from './components/ltForm'

const mapStateToProps = (state)=>{
	
	return{
		isFetching: state.leavetype.isFetching,
		isFetchFailed: state.leavetype.isFetching,
		hasError: state.leavetype.hasError,
		message: state.leavetype.message,
		data: state.leavetype.data,
		deleteSuccess: state.leavetype.deleteSuccess
	}
}

const mapDispatchToProps= (dispatch)=>{
	return {
		fetch: ()=>{
			dispatch(fetchLeaveTypes())
		}
	}
}

export const Lt_List_Container = connect(mapStateToProps, mapDispatchToProps)(List)

const mapStateToPropsForm=(state)=>{
	return{
		editMode : state.leavetypeForm.editMode,
		isFetching : state.leavetypeForm.isFetching,	
		isSaving : state.leavetypeForm.isSaving,
		hasError : state.leavetypeForm.hasError,
		message : state.leavetypeForm.message,
		data : state.leavetypeForm.data,		
		title: state.leavetypeForm.title,
		payaccounts: state.leavetypeForm.payaccounts,
		saveAddSuccess: state.leavetypeForm.saveAddSuccess,
		updateSuccess: state.leavetypeForm.updateSuccess
	}
}

const mapDispatchToPropsForm = (dispatch)=>{
	const blankdata = { 
						"id": 0, 
						"leavecode":'',
						"description":'', 						
						"linkId": ''
					   }
	return {
		add: ()=>{
			dispatch(loaddAdd(blankdata, "Create new leave type"))
		},
		save: (data,editMode)=>{
			dispatch(saveLeaveType(data, editMode))
		},
		valueChanged: (data, field, value)=>{
			dispatch(valueChangeForm(data, field, value))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedForm(message))
		},
	 	headChange: (val)=>{
	 		dispatch(headvalueChangeForm(val))
	 	},
	 	edit: (id)=>{
	 		dispatch(loadEdit(id,"Edit leave type"))
	 	}
	}
}

export const Lt_Form_Container = connect(mapStateToPropsForm, mapDispatchToPropsForm)(LtForm)





