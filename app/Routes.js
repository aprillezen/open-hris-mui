import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Nav from './Appnav'
import Login from './Login'

import Dashboard from './Dashboard'
import Employees from './Employees'

module.exports = (
  <Route component={App} >	
  	<Route path="/" component={Nav}>    
        <IndexRoute component={Dashboard}/>  	 	
        <Route path='/dashboard' component={Dashboard} />
    	 	<Route path='/employees' component={Employees} />  	  			  		
  	</Route>
 	  <Route path='/login' component={Login} />
  </Route>  
)