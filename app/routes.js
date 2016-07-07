import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Nav from './appnav'
import Dashboard from './dashboard'
import Student from './students'
import Employees from './employees'
import Parents from './parents'
import App from './app'
import Login from './login'

module.exports = (
  <Route component={App} >	
  	<Route path="/" component={Nav}>    
        <IndexRoute component={Dashboard}/>  	 	
        <Route path='/dashboard' component={Dashboard} />
  	 	<Route path='/student' component={Student} />  	  		
  	 	<Route path='/employees' component={Employees} />  	  		
  	 	<Route path='/parents' component={Parents} />  	  		
  	</Route>
 	<Route path='/login' component={Login} />
  </Route>  
)