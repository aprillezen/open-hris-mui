import EmployeesIndex from './components/index'
import EmployeeAddForm from './components/employeeAddForm'
import EmployeeGeneral from './components/EmployeeGeneral'
import EmployeeGeneralEdit_PI from './components/general_pi_form'
import EmployeeGeneralEdit_CI from './components/general_ci_form'

import { connect } from 'react-redux'
import { load, loadEmployeeForm, valueChangeEmployeeForm, 
		 civilStatus_ValueChanged,gender_ValueChanged,
		 saveDB, saveFailedEmployeeForm, birthdate_ValueChanged,
		 loadEmployeeGeneral, loadEmployeeGeneralEdit, valueChangeEmployeeGeneralEdit, 
		 civilStatus_ValueChangedGeneralEdit, gender_ValueChangedGeneralEdit,
		 birthdate_ValueChangedGeneralEdit, loadEmployeeGeneralEditCancel,
		 loadEmployeeGeneralEditCI, loadEmployeeGeneralEditCICancel} from './actions'

// ********************************************************************************
// EMPLOYEE LISTS
// ********************************************************************************
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

// ********************************************************************************
// EMPLOYEE ADD
// ********************************************************************************
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


// ********************************************************************************
// EMPLOYEE GENERAL
// ********************************************************************************
const mapStateToPropsGeneral = (state)=>{
	return { 
		isFetching: state.employeeGeneral.isFetching,
		isFetchFailed: state.employeeGeneral.isFetchFailed,
		hasError: state.employeeGeneral.hasError,
		errorMessage: state.employeeGeneral.errorMessage,
		data: state.employeeGeneral.data,
		isGeneralEdit: state.employeeGeneral.isGeneralEdit,
		isGeneralEditCI: state.employeeGeneral.isGeneralEditCI
	}
}
const mapDispatchToPropsGeneral = (dispatch)=>{
	return{
		load: (id)=> {
			dispatch(loadEmployeeGeneral(id))
		},
		loadGeneralEdit: ()=>{
			dispatch(loadEmployeeGeneralEdit())
		},
		loadGeneralEditCI: ()=>{
			dispatch(loadEmployeeGeneralEditCI())
		}

	}
}
export const EmployeeGeneralContainer = connect(mapStateToPropsGeneral,mapDispatchToPropsGeneral)(EmployeeGeneral)

const mapStateToPropsGeneralEdit = (state)=>{
	return { 
		isGeneralEdit: state.employeeGeneral.isGeneralEdit,		
		hasError: state.employeeGeneral.hasError,
		errorMessage: state.employeeGeneral.errorMessage,
		data: state.employeeGeneral.data,
		isSaving: state.employeeGeneral.isSaving
	}
}
const mapDispatchToPropsGeneralEdit= (dispatch)=>{
	return{		
		valueChanged: (field, value)=>{
			dispatch(valueChangeEmployeeGeneralEdit(field,value))
		},
		civilChanged: (value)=>{
			dispatch(civilStatus_ValueChangedGeneralEdit(value))
		},
		genderChanged: (value)=>{
			dispatch(gender_ValueChangedGeneralEdit(value))
		},		
		birthChanged: (value)=>{			
			dispatch(birthdate_ValueChangedGeneralEdit(value))
		},
		cancelEdit: ()=>{
			dispatch(loadEmployeeGeneralEditCancel())
		}

	}
}
export const EmployeeGeneralEditContainer = connect(mapStateToPropsGeneralEdit,mapDispatchToPropsGeneralEdit)(EmployeeGeneralEdit_PI)


const mapStateToPropsGeneralEdit_CI = (state)=>{
	return { 
		isGeneralEditCI: state.employeeGeneral.isGeneralEdit,		
		hasError: state.employeeGeneral.hasError,
		errorMessage: state.employeeGeneral.errorMessage,
		data: state.employeeGeneral.data,
		isSaving: state.employeeGeneral.isSaving
	}
}
const mapDispatchToPropsGeneralEdit_CI= (dispatch)=>{
	return{		
		valueChanged: (field, value)=>{
			dispatch(valueChangeEmployeeGeneralEdit(field,value))
		},
		cancelEdit: ()=>{
			dispatch(loadEmployeeGeneralEditCICancel())
		}

	}
}
export const EmployeeGeneralEditCIContainer = connect(mapStateToPropsGeneralEdit_CI,mapDispatchToPropsGeneralEdit_CI)(EmployeeGeneralEdit_CI)






