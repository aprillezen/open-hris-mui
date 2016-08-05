import index from './components/index'
import { connect } from 'react-redux'
import { fetchDepartment,loadAddForm, cancelForm, valueChangeForm,saveFailedForm} from './actions'

const mapStateToProps =(state)=>{	
	console.log(state) 
	return{		
		isFetching: state.department.isFetching,
		isFetchFailed: state.department.isFetchFailed,
		message: state.department.message,
		data: state.department.data,
		dataForm: state.department.dataForm,
		isDialogOpen: state.department.isDialogOpen,
		isSaving: state.department.isSaving,
		hasError: state.department.hasError,
		title: state.department.title
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		fetch: ()=> {
			dispatch(fetchDepartment())
		},
		add: ()=>{
			var data = {"id": '',	"description":''}
			dispatch(loadAddForm(data,'Create'))
		},
		cancel: ()=>{
			dispatch(cancelForm())
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

