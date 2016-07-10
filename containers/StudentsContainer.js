import StudentsLists from '../components/StudentsLists'
import { connect } from 'react-redux'

const StudentsContainer = connect()(StudentsLists)

export default StudentsContainer