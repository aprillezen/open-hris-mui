import { connect } from 'react-redux'
import { fetchDepartment,loaddAdd,valueChangeForm,saveFailedForm,
		 headvalueChangeForm, saveDepartment,loadEdit,
		 loadDeleteDialog, cancelDelete} from './actions'
import List from './components/list'
import DeptForm from './components/deptForm'

const mapStateToProps = (state)=>{
	
	return{
		isFetching: state.department.isFetching,
		isFetchFailed: state.department.isFetching,
		hasError: state.department.hasError,
		message: state.department.message,
		data: state.department.data,
		deleteSuccess: state.department.deleteSuccess
	}
}

const mapDispatchToProps= (dispatch)=>{
	return {
		fetch: ()=>{
			dispatch(fetchDepartment())
		}
	}

}


export const Dept_List_Container = connect(mapStateToProps, mapDispatchToProps)(List)

const mapStateToPropsForm=(state)=>{
	return{
		editMode : state.departmentForm.editMode,
		isFetching : state.departmentForm.isFetching,	
		isSaving : state.departmentForm.isSaving,
		hasError : state.departmentForm.hasError,
		message : state.departmentForm.message,
		data : state.departmentForm.data,		
		title: state.departmentForm.title,
		employees: state.departmentForm.employees,
		saveAddSuccess: state.departmentForm.saveAddSuccess,
		updateSuccess: state.departmentForm.updateSuccess
	}
}

const mapDispatchToPropsForm = (dispatch)=>{
	const blankdata = { 
						"id": 0, 
						"description":'', 						
						"head": ''
					   }
	return {
		add: ()=>{
			dispatch(loaddAdd(blankdata, "Create new department"))
		},
		save: (data,editMode)=>{
			dispatch(saveDepartment(data, editMode))
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
	 		dispatch(loadEdit(id,"Edit department"))
	 	}
	}

}

export const Dept_Form_Container = connect(mapStateToPropsForm, mapDispatchToPropsForm)(DeptForm)





