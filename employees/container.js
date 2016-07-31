import EmployeesIndex from './components/index'
import { connect } from 'react-redux'

const EmployeesContainer = connect()(EmployeesIndex)

export default EmployeesContainer