import React from 'react'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'
import App from './App'
import Nav from './Appnav'
import Login from './Login'
import Dashboard from './Dashboard'
import Employees from './Employees'
import {EmployeesListContainer,EmployeeAddFormContainer } from '../employees/container'
import EmployeeProfile from '../employees/components/EmployeeProfile'
import { EmployeeGeneralContainer } from '../employees/container'

import EmployeeEmployment from '../employees/components/employeeEmployment'
import EmployeeBC from '../employees/components/employeeBC'
import EmployeeTA from '../employees/components/employeeTA'
import EmployeeLoan from '../employees/components/employeeLoan'
import EmployeePY from '../employees/components/employeePayroll'

import Profile from '../settings/profile/container'
import Settings from './Settings'
import Orgunit from '../settings/orgunit'
import {Dept_List_Container} from '../settings/orgunit/department/container'
import Branch_List_Container from '../settings/orgunit/branches/container'

module.exports = (
  <Route component={App} >	
  	<Route path="/" component={Nav}>    
        <IndexRoute component={Dashboard}/>  	 	
        <Route path='/dashboard' component={Dashboard} />
    	<Route path='/employees' component={Employees}>
        <IndexRedirect to="/employees/list" />
        <Route path='/employees/list' component={EmployeesListContainer} />
        <Route path='/employees/add' component={EmployeeAddFormContainer} />
        <Route path='/employees/profile/:id' component={EmployeeProfile}>
            <IndexRedirect to="/employees/profile/:id/general" />
            <Route path='/employees/profile/:id/general' component={EmployeeGeneralContainer} />
            <Route path='/employees/profile/:id/employment' component={EmployeeEmployment} />
            <Route path='/employees/profile/:id/bc' component={EmployeeBC} />
            <Route path='/employees/profile/:id/ta' component={EmployeeTA} />
            <Route path='/employees/profile/:id/loan' component={EmployeeLoan} />
            <Route path='/employees/profile/:id/payroll' component={EmployeePY} />
        </Route>
      </Route>
    	<Route path='/settings' component={Settings}>
    		<IndexRedirect to="/settings/profile" />	 	
    		<Route path='/settings/profile' component={Profile} />
    		<Route path='/settings/unit' component={Orgunit}>
            <IndexRedirect to="/settings/unit/branch" />    
            <Route path='/settings/unit/branch' component={Branch_List_Container} />
            <Route path='/settings/unit/department' component={Dept_List_Container} />
        </Route>  
    	</Route>  	  			  		
  	</Route>
 	  <Route path='/login' component={Login} />
  </Route>  
)