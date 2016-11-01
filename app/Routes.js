import React from 'react'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'
import App from './App'
import Nav from './Appnav'
import Login from './Login'
import Dashboard from './Dashboard'

import Timekeeping from './Timekeeping'
import TmSetup from '../ta/setup'
import TmOption from '../ta/setup/options/container'

import TmShiftContainer from '../ta/setup/shift/components'
import {ShiftListContainer, ShiftFormContainer} from '../ta/setup/shift/container'

import TmHolContainer from '../ta/setup/holiday/components'
import {HolidayListContainer, HolidayFormContainer} from '../ta/setup/holiday/container'

import TmPolContainer from '../ta/setup/policies/components'
import {PolicyListContainer, PolicyFormContainer} from '../ta/setup/policies/container'

import TmSched from '../ta/schedule'

import TmAttendance from '../ta/attendance'
import TmDailyContainer from '../ta/attendance/daily/components'
import {TmDailyListContainer} from '../ta/attendance/daily/container'

import Payroll from './Payroll'
import PayrollSetup from '../payroll/setup'
import PayrollOption from '../payroll/setup/options/container'

import TaxStatusContainer from '../payroll/setup/taxstatus/components'
import {TaxStatus_List_Container, TaxStatus_Form_Container} from '../payroll/setup/taxstatus/container'

import Leave from './Leave'
import LeaveSetup from '../leave/setup'
import LeaveOption from '../leave/setup/options/container'
import LeaveTypeContainer from '../leave/setup/lt/components'
import {Lt_List_Container,Lt_Form_Container} from '../leave/setup/lt/container'

import Employees from './Employees'
import {EmployeesListContainer,EmployeeAddFormContainer } from '../employees/container'
import EmployeeProfile from '../employees/components/EmployeeProfile'
import { EmployeeEmploymentContainer } from '../employees/container'
import EmployeeBC from '../employees/components/employeeBC'
import EmployeeTA from '../employees/components/employeeTA'
import EmployeeLoan from '../employees/components/employeeLoan'
import EmployeePY from '../employees/components/employeePayroll'

import Company from '../settings/company'
import CompanySetup from '../settings/company/setup'
import Profile from '../settings/company/profile/container'
import Settings from './settings'
import Orgunit from '../settings/orgunit'

import JobContainer from '../settings/company/jobtitles/components'
import {Job_List_Container, Job_Form_Container} from '../settings/company/jobtitles/container'

import DeptContainer from '../settings/orgunit/department/components'
import {Dept_List_Container, Dept_Form_Container} from '../settings/orgunit/department/container'

import BranchContainer from '../settings/orgunit/branches/components'
import {Branch_List_Container, Branch_Form_Container} from '../settings/orgunit/branches/container'

module.exports = (
    <Route component={Nav} >	
        <IndexRoute component={Dashboard}/>         
        <Route path='/' component={Dashboard}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/employees' component={Employees}>
            <IndexRedirect to="/employees/list" />
            <Route path='/employees/list' component={EmployeesListContainer} />
            <Route path='/employees/add' component={EmployeeAddFormContainer} />
            <Route path='/employees/profile/:id' component={EmployeeProfile} />
        </Route>
        <Route path='/ta' component={Timekeeping}>
            <IndexRedirect to="/ta/setup" />
            <Route path='/ta/setup' component={TmSetup}>
                <IndexRedirect to="/ta/setup/options" />  
                <Route path='/ta/setup/options' component={TmOption}/>
                <Route path='/ta/setup/shift' component={TmShiftContainer}>
                    <IndexRedirect to='/ta/setup/shift/list'/>   
                    <Route path='/ta/setup/shift/list' component={ShiftListContainer}/>
                    <Route path='/ta/setup/shift/:id' component={ShiftFormContainer}/>
                </Route> 
                <Route path='/ta/setup/holiday' component={TmHolContainer}>
                    <IndexRedirect to='/ta/setup/holiday/list'/>   
                    <Route path='/ta/setup/holiday/list' component={HolidayListContainer}/>
                    <Route path='/ta/setup/holiday/add/:id' component={HolidayFormContainer}/>
                    <Route path='/ta/setup/holiday/edit/:id' component={HolidayFormContainer}/>
                </Route> 
                <Route path='/ta/setup/policies' component={TmPolContainer}>
                    <IndexRedirect to='/ta/setup/policies/list'/>   
                    <Route path='/ta/setup/policies/list' component={PolicyListContainer}/>
                    <Route path='/ta/setup/policies/:id' component={PolicyFormContainer}/>                        
                </Route>                                                            
            </Route>       
             <Route path='/ta/schedule' component={TmSched} />   

             <Route path='/ta/attendance' component={TmAttendance}>
                <IndexRedirect to="/ta/attendance/daily" />                     
                <Route path='/ta/attendance/daily' component={TmDailyContainer}>
                    <IndexRedirect to='/ta/attendance/daily/list'/>   
                    <Route path='/ta/attendance/daily/list' component={TmDailyListContainer}/>                        
                </Route>                                                            
            </Route>        
        </Route>    
    </Route>  
)