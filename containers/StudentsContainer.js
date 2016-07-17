import StudentsLists from '../components/Student/StudentsLists'
import { connect } from 'react-redux'

const StudentsContainer = connect()(StudentsLists)

export default StudentsContainer