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
		 loadEmployeeEmployment, loadEmploymentForm,loadEmployeeEmploymentEditCancel, 
		 employmentDateChanged, employmentValueChanged, employmentSaveFailed, saveEmployment} from './actions'

// ********************************************************************************
// EMPLOYEE LISTS
// ********************************************************************************
const mapStateToProps = (state)=>{
	return { 
		isFetching: state.employees.isFetching,
		isFetchFailed: state.employees.isFetchFailed,
		hasError: state.employees.hasError,
		errorMessage: state.employees.errorMessage,
		data: state.employees.data,
		deleteSuccess: state.employees.deleteSuccess
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
		data: state.employeeForm.data,			
		hasError: state.employeeForm.hasError,
		errorMessage:state.employeeForm.errorMessage,														
		isSaving: state.employeeForm.isSaving,												
		saveSuccess: state.employeeForm.saveSuccess		
	}
}
const mapDispatchToPropsForm = (dispatch)=>{
	return{
		loadForm: ()=> {
			dispatch(loadEmployeeForm())
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
				isLoadEdit: state.employeeEmployment.isLoadEdit,
				withdata: state.employeeEmployment.withdata
			}
}
const mapDispatchToPropsEmployment= (dispatch)=>{
	return{		
		load: (id)=> {
			dispatch(loadEmployeeEmployment(id))
		},
		edit: (id)=>{
			dispatch(loadEmploymentForm(id))
		}
	}
}
export const EmployeeEmploymentContainer = connect(mapStateToPropsEmployment,mapDispatchToPropsEmployment)(EmployeeEmployment)

// ********************************************************************************
// EMPLOYEE EMPLOYMENT FORM (EDIT)
// ********************************************************************************
const mapStateToPropsEmploymentForm = (state)=>{

	return { 
				data: state.employeeEmployment.dataForm,		
				hasError: state.employeeEmployment.hasError,									
				errorMessage: state.employeeEmployment.errorMessage,
				isSaving: state.employeeEmployment.isSaving,
				updateSuccess: state.employeeEmployment.updateSuccess,
				updateError: state.employeeEmployment.updateError,
				jobtitles: state.employeeEmployment.jobtitles,
				branches: state.employeeEmployment.branches,
				department: state.employeeEmployment.department,				
				taxstatus: state.employeeEmployment.taxstatus,
				withdata: state.employeeEmployment.withdata
			}
}
const mapDispatchToPropsEmploymentForm= (dispatch)=>{
	return{		
		valueChanged: (field, value)=>{
			dispatch(employmentValueChanged(field, value))
		},
		cancelEdit: ()=>{
			dispatch(loadEmployeeEmploymentEditCancel())			
		},
		update: (data, withdata)=>{			
			dispatch(saveEmployment(data, withdata))
		},
		saveFailed: (message)=>{
			dispatch(employmentSaveFailed(message))
		},		
		dateChanged: (field, value)=>{
			dispatch(employmentDateChanged(field, value))
		}
	}
}

export const EmployeeEmploymentFormContainer = connect(mapStateToPropsEmploymentForm,mapDispatchToPropsEmploymentForm)(EmployeeEmployment_Form)



