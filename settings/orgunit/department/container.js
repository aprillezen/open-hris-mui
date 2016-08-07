import index from './components/index'
import dataForm from './components/dataForm'
import { connect } from 'react-redux'
import { fetchDepartment,loadAddDeptForm, cancelForm, valueChangeForm,saveFailedForm, saveDepartment} from './actions'

const mapStateToProps =(state)=>{		
	return{		
		isFetching: state.department.isFetching,
		isFetchFailed: state.department.isFetchFailed,
		message: state.department.message,
		data: state.department.data,	
		hasError: state.department.hasError,
		saveSuccess: state.department.saveSuccess,
		deleteSuccess: state.department.deleteSuccess
	}
}

const mapDispatchToProps=(dispatch)=>{
	var blankdata = {"id": 0,	"description":''}	
	return{
		fetch: ()=> {
			dispatch(fetchDepartment())
		},
		add: ()=>{			
			dispatch(loadAddDeptForm(blankdata,'Create'))
		},
		cancel: ()=>{			
			dispatch(cancelForm(blankdata))
		},
		save: (data, editMode)=>{			
			dispatch(saveDepartment(data,editMode))
		},		
		valueChanged: (value)=>{
			dispatch(valueChangeForm(value))
		},
		failedSaved: (message)=>{
			dispatch(saveFailedForm(message))
		}
	}
}

export const Dept_List_Container = connect(mapStateToProps, mapDispatchToProps)(index)


const mapStateToPropsForm =(state)=>{		
	return{						
		data: state.department.dataForm,
		isDialogOpen: state.department.isDialogOpen,
		isSaving: state.department.isSaving,		
		title: state.department.title,
		saveError: state.department.saveError,		
		message: state.department.message,
		editMode: state.department.editMode
	}
}

export const DataForm_Container = connect(mapStateToPropsForm, mapDispatchToProps)(dataForm)



