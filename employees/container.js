import EmployeesIndex from './components/index'
import EmployeeAddForm from './components/employeeAddForm'
import EmployeeGeneral from './components/EmployeeGeneral'

import { connect } from 'react-redux'
import { load, loadEmployeeForm, valueChangeEmployeeForm, 
		 civilStatus_ValueChanged,gender_ValueChanged,
		 saveDB, saveFailedEmployeeForm, birthdate_ValueChanged} from './actions'

const mapStateToProps = (state)=>{
	return { 
		isFetching: state.employees.isFetching,
		isFetchFailed: state.employees.isFetchFailed,
		hasError: state.employees.hasError,
		errorMessage: state.employees.errorMessage,
		data: state.employees.data
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		fetch: ()=> {
			dispatch(load())
		}		
	}
}

export const EmployeesListContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeesIndex)


const mapStateToPropsForm = (state)=>{
	return { 
		editMode: state.employeeForm.editMode,
		dataForm: state.employeeForm.dataForm,	
		title: state.employeeForm.title,
		hasError: state.employeeForm.hasError,
		errorMessage:state.employeeForm.errorMessage,														
		isSaving: state.employeeForm.isSaving,										
		saveError: state.employeeForm.saveError,
		saveSuccess: state.employeeForm.saveSuccess,
		saveEditSuccess: state.employeeForm.saveEditSuccess,
		isDeleting: state.employeeForm.isDeleting,
		deleteHasError: state.employeeForm.deleteHasError,
		deleteErrorMsg: state.employeeForm.deleteErrorMsg,
		deletemsg: state.employeeForm.deletemsg,
		deleteSuccess: state.employeeForm.deleteSuccess
	}
}


const mapDispatchToPropsForm = (dispatch)=>{
	return{
		loadForm: (editmode, title, data)=> {
			dispatch(loadEmployeeForm(editmode, title, data))
		},
		valueChanged: (data, field, value)=>{
			dispatch(valueChangeEmployeeForm(data, field,value))
		},
		civilChanged: (value)=>{
			dispatch(civilStatus_ValueChanged(value))
		},
		genderChanged: (value)=>{
			dispatch(gender_ValueChanged(value))
		},
		save: (data, editMode)=>{
			dispatch(saveDB(data, editMode))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedEmployeeForm(message))
		},
		birthChanged: (value)=>{			
			dispatch(birthdate_ValueChanged(value))
		}

	}
}

export const EmployeeAddFormContainer = connect(mapStateToPropsForm,mapDispatchToPropsForm)(EmployeeAddForm)

export const EmployeeGeneralContainer = connect()(EmployeeGeneral)



