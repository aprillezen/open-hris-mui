import EmployeesIndex from './components/index'
import EmployeeAddForm from './components/employeeAddForm'
import EmployeeGeneral from './components/EmployeeGeneral'
import EmployeeGeneralEdit_PI from './components/general_pi_form'
import EmployeeGeneralEdit_CI from './components/general_ci_form'

import EmployeeEmployment from './components/EmployeeEmployment'
import EmployeeEmployment_Form from './components/employment_form'


import { connect } from 'react-redux'
import { load, loadEmployeeForm, valueChangeEmployeeForm, 
		 civilStatus_ValueChanged,gender_ValueChanged,
		 saveDB, saveFailedEmployeeForm, birthdate_ValueChanged,
		 loadEmployeeGeneral, loadEmployeeGeneralEdit, valueChangeEmployeeGeneralEdit, 
		 civilStatus_ValueChangedGeneralEdit, gender_ValueChangedGeneralEdit,
		 birthdate_ValueChangedGeneralEdit, loadEmployeeGeneralEditCancel,
		 loadEmployeeGeneralEditCI, loadEmployeeGeneralEditCICancel, 
		 updateEmployeeGeneral_PI, saveFailedEmployeeGeneral_PI,
		 updateEmployeeGeneral_CI, saveFailedEmployeeGeneral_CI,
		 loadEmployeeEmployment, loadEmployeeEmploymentEdit,loadEmployeeEmploymentEditCancel} from './actions'

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
		isGeneralEditCI: state.employeeGeneral.isGeneralEditCI,
		updateSuccess: state.employeeGeneral.updateSuccess
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

// ********************************************************************************
// EMPLOYEE GENERAL EDIT
// ********************************************************************************
const mapStateToPropsGeneralEdit = (state)=>{
	return { 
		isGeneralEdit: state.employeeGeneral.isGeneralEdit,		
		hasError: state.employeeGeneral.hasError,
		errorMessage: state.employeeGeneral.errorMessage,
		data: state.employeeGeneral.data,
		isSaving: state.employeeGeneral.isSaving,
		updateSuccess: state.employeeGeneral.updateSuccess,
		updateError: state.employeeGeneral.updateError
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
		cancelEdit: (id)=>{
			dispatch(loadEmployeeGeneralEditCancel())
			dispatch(loadEmployeeGeneral(id))
		},
		update: (data)=>{
			dispatch(updateEmployeeGeneral_PI(data))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedEmployeeGeneral_PI(message))
		}

	}
}
export const EmployeeGeneralEditContainer = connect(mapStateToPropsGeneralEdit,mapDispatchToPropsGeneralEdit)(EmployeeGeneralEdit_PI)

// ********************************************************************************
// EMPLOYEE GENERAL CONTACT
// ********************************************************************************
const mapStateToPropsGeneralEdit_CI = (state)=>{
	return { 
		isGeneralEditCI: state.employeeGeneral.isGeneralEdit,		
		hasError: state.employeeGeneral.hasError,
		errorMessage: state.employeeGeneral.errorMessage,
		data: state.employeeGeneral.data,
		isSaving: state.employeeGeneral.isSaving,
		updateSuccess: state.employeeGeneral.updateSuccess,
		updateError: state.employeeGeneral.updateError
	}
}
const mapDispatchToPropsGeneralEdit_CI= (dispatch)=>{
	return{		
		valueChanged: (field, value)=>{
			dispatch(valueChangeEmployeeGeneralEdit(field,value))
		},
		cancelEdit: (id)=>{
			dispatch(loadEmployeeGeneralEditCICancel())
			dispatch(loadEmployeeGeneral(id))
		},
		update: (data)=>{
			dispatch(updateEmployeeGeneral_CI(data))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedEmployeeGeneral_CI(message))
		}

	}
}
export const EmployeeGeneralEditCIContainer = connect(mapStateToPropsGeneralEdit_CI,mapDispatchToPropsGeneralEdit_CI)(EmployeeGeneralEdit_CI)


// ********************************************************************************
// EMPLOYEE EMPLOYMENT VIEW
// ********************************************************************************
const mapStateToPropsEmployment = (state)=>{
	return { 
				data: state.employeeEmployment.data,									
				isFetching: state.employeeEmployment.isFetching,
				isFetchFailed: state.employeeEmployment.isFetchFailed,
				hasError: state.employeeEmployment.hasError,
				errorMessage: state.employeeEmployment.errorMessage,
				isSaving: state.employeeEmployment.isSaving,
				updateSuccess: state.employeeEmployment.updateSuccess,
				updateError: state.employeeEmployment.updateError,
				isLoadEdit: state.employeeEmployment.isLoadEdit
			}
}
const mapDispatchToPropsEmployment= (dispatch)=>{
	return{		
		load: (id)=> {
			dispatch(loadEmployeeEmployment(id))
		},
		edit: ()=>{
			dispatch(loadEmployeeEmploymentEdit())
		}
	}
}
export const EmployeeEmploymentContainer = connect(mapStateToPropsEmployment,mapDispatchToPropsEmployment)(EmployeeEmployment)

// ********************************************************************************
// EMPLOYEE EMPLOYMENT FORM (EDIT)
// ********************************************************************************
const mapStateToPropsEmploymentForm = (state)=>{
	return { 
				data: state.employeeEmployment.data,									
				errorMessage: state.employeeEmployment.errorMessage,
				isSaving: state.employeeEmployment.isSaving,
				updateSuccess: state.employeeEmployment.updateSuccess,
				updateError: state.employeeEmployment.updateError				
			}
}
const mapDispatchToPropsEmploymentForm= (dispatch)=>{
	return{		
		valueChanged: (field, value)=>{
			
		},
		cancelEdit: (id)=>{
			dispatch(loadEmployeeEmploymentEditCancel())
			dispatch(loadEmployeeEmployment(id))
		},
		update: (data)=>{
			
		},
		saveFailed: (message)=>{
			
		}
	}
}

export const EmployeeEmploymentFormContainer = connect(mapStateToPropsEmploymentForm,mapDispatchToPropsEmploymentForm)(EmployeeEmployment_Form)



