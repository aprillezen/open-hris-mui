import index from './components/index'
import { connect } from 'react-redux'
import { fetchDepartment,loadAddDeptForm, cancelForm, valueChangeForm,saveFailedForm, saveDepartment} from './actions'

const mapStateToProps =(state)=>{		
	return{		
		isFetching: state.department.isFetching,
		isFetchFailed: state.department.isFetchFailed,
		message: state.department.message,
		data: state.department.data,
		dataForm: state.department.dataForm,
		isDialogOpen: state.department.isDialogOpen,
		isSaving: state.department.isSaving,
		hasError: state.department.hasError,
		title: state.department.title,
		saveError: state.department.saveError,
		saveSuccess: state.department.saveSuccess
	}
}

const mapDispatchToProps=(dispatch)=>{
	var data = {"id": '',	"description":''}	
	return{
		fetch: ()=> {
			dispatch(fetchDepartment())
		},
		add: ()=>{			
			dispatch(loadAddDeptForm(data,'Create'))
		},
		cancel: ()=>{			
			dispatch(cancelForm(data))
		},
		save: (data)=>{			
			dispatch(saveDepartment(data))
		},		
		valueChanged: (value)=>{
			dispatch(valueChangeForm(value))
		},
		failedSaved: (message)=>{
			dispatch(saveFailedForm(message))
		}
	}
}

const container = connect(mapStateToProps, mapDispatchToProps)(index)

export default container

