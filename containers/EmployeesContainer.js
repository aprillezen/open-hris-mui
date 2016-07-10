import EmployeesList from '../components/EmployeesList'
import { connect } from 'react-redux'

const EmployeesContainer = connect()(EmployeesList)

export default EmployeesContainer