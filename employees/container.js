import EmployeesIndex from './components/index'
import EmployeeForm from './components/employeeForm'
import { connect } from 'react-redux'

export const EmployeesListContainer = connect()(EmployeesIndex)
export const EmployeeFormContainer = connect()(EmployeeForm)

