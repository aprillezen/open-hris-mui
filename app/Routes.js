import React from 'react'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'

import App from './App'
import Nav from './Appnav'
import Login from './Login'

import Dashboard from './Dashboard'
import Employees from './Employees'
import Settings from './Settings'
import Profile from '../settings/profile/container'
import Orgunit from '../settings/orgunit'
import Department from '../settings/orgunit/department/container'

module.exports = (
  <Route component={App} >	
  	<Route path="/" component={Nav}>    
        <IndexRoute component={Dashboard}/>  	 	
        <Route path='/dashboard' component={Dashboard} />
    	<Route path='/employees' component={Employees} />  	  			  		
    	<Route path='/settings' component={Settings}>
    		<IndexRedirect to="/settings/profile" />	 	
    		<Route path='/settings/profile' component={Profile} />
    		<Route path='/settings/unit' component={Orgunit}>
            <IndexRedirect to="/settings/unit/department" />    
            <Route path='/settings/unit/department' component={Department} />
        </Route>  
    	</Route>  	  			  		
  	</Route>
 	  <Route path='/login' component={Login} />
  </Route>  
)