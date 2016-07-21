import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Nav from './Appnav'
import Login from './Login'

import Dashboard from './Dashboard'
import Student from './Students'
import Employees from './Employees'
import Parents from './Parents'
import StudentList from '../containers/StudentsContainer'
import AddStudent from '../components/Student/Add'
import Settings from './Settings'
import BatchContainer from '../containers/BatchContainer'
import BatchFormContainer from '../containers/BatchFormContainer'
import StudClass from '../components/Settings/StudClass'


module.exports = (
  <Route component={App} >	
  	<Route path="/" component={Nav}>    
        <IndexRoute component={Dashboard}/>  	 	
        <Route path='/dashboard' component={Dashboard} />
  	 	<Route path='/student' component={Student}>
  	 		<IndexRoute component={StudentList}/>  
  	 		<Route path='/student/list' component={StudentList} />
  	 		<Route path='/student/add' component={AddStudent} />
  	 	</Route>  	  		
  	 	<Route path='/employees' component={Employees} />  	  		
  	 	<Route path='/parents' component={Parents} />
      <Route path='/settings' component={Settings}>
          <IndexRoute component={BatchContainer}/>  
          <Route path='/settings/batch' component={BatchContainer} />
          <Route path='/settings/createbatch' component={BatchFormContainer} />
          <Route path='/settings/classes' component={StudClass} />
      </Route>  	  		
  	</Route>
 	<Route path='/login' component={Login} />
  </Route>  
)