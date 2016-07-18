import StudentsLists from '../components/Student/List'
import { connect } from 'react-redux'

const StudentsContainer = connect()(StudentsLists)

export default StudentsContainer