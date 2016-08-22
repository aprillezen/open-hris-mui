import { connect } from 'react-redux'
import { fetchJobTitles,loadAddForm,valueChangeForm,saveFailedForm,
		 headvalueChangeForm, saveJob,loadEdit,
		 loadDeleteDialog, cancelDelete} from './actions'
import List from './components/list'
import JobForm from './components/jobForm'

const mapStateToProps = (state)=>{
	
	return{
		isFetching: state.jobtitle.isFetching,
		isFetchFailed: state.jobtitle.isFetching,
		hasError: state.jobtitle.hasError,
		message: state.jobtitle.message,
		data: state.jobtitle.data,
		deleteSuccess: state.jobtitle.deleteSuccess
	}
}

const mapDispatchToProps= (dispatch)=>{
	return {
		fetch: ()=>{
			dispatch(fetchJobTitles())
		}
	}

}

export const Job_List_Container = connect(mapStateToProps, mapDispatchToProps)(List)

const mapStateToPropsForm=(state)=>{
	return{
		editMode : state.jobtitleForm.editMode,
		isFetching : state.jobtitleForm.isFetching,	
		isSaving : state.jobtitleForm.isSaving,
		hasError : state.jobtitleForm.hasError,
		message : state.jobtitleForm.message,
		data : state.jobtitleForm.data,		
		title: state.jobtitleForm.title,		
		saveAddSuccess: state.jobtitleForm.saveAddSuccess,
		updateSuccess: state.jobtitleForm.updateSuccess
	}
}

const mapDispatchToPropsForm = (dispatch)=>{
	const blankdata = { 
						"id": 0, 
						"title":'', 						
						"jobdesc":'', 						
						"duties": ''
					   }
	return {
		add: ()=>{
			dispatch(loadAddForm(blankdata, "Create new job title"))
		},
		save: (data,editMode)=>{
			dispatch(saveJob(data, editMode))
		},
		valueChanged: (data, field, value)=>{
			dispatch(valueChangeForm(data, field, value))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedForm(message))
		},	 
	 	edit: (id)=>{
	 		dispatch(loadEdit(id,"Edit job title"))
	 	}
	}

}

export const Job_Form_Container = connect(mapStateToPropsForm, mapDispatchToPropsForm)(JobForm)





