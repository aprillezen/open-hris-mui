import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Nav from './Appnav'
import Login from './Login'

import Dashboard from './Dashboard'
import Student from './Students'
import Employees from './Employees'
import Parents from './Parents'


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