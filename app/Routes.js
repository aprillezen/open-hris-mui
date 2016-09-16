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
import { EmployeeGeneralContainer, EmployeeEmploymentContainer } from '../employees/container'
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
    <Route component={App} >	
        <Route path="/" component={Nav}>    
            <IndexRoute component={Dashboard}/>  	 	
            <Route path='/dashboard' component={Dashboard}/>
        	<Route path='/employees' component={Employees}>
                <IndexRedirect to="/employees/list" />
                <Route path='/employees/list' component={EmployeesListContainer} />
                <Route path='/employees/add' component={EmployeeAddFormContainer} />
                <Route path='/employees/profile/:id' component={EmployeeProfile}>
                    <IndexRedirect to="/employees/profile/:id/general" />
                    <Route path='/employees/profile/:id/general' component={EmployeeGeneralContainer} />
                    <Route path='/employees/profile/:id/employment' component={EmployeeEmploymentContainer} />
                    <Route path='/employees/profile/:id/bc' component={EmployeeBC} />
                    <Route path='/employees/profile/:id/ta' component={EmployeeTA} />
                    <Route path='/employees/profile/:id/loan' component={EmployeeLoan} />
                    <Route path='/employees/profile/:id/payroll' component={EmployeePY} />
                </Route>
            </Route>
        	<Route path='/settings' component={Settings}>
                <IndexRedirect to="/settings/company" />	 	
                <Route path='/settings/company' component={Company}>
                    <IndexRedirect to="/settings/company/profile" />               
                    <Route path='/settings/company/profile' component={Profile}/>
                    <Route path='/settings/company/setup' component={CompanySetup}/>
                    <Route path='/settings/company/jobtitle' component={JobContainer}>
                        <IndexRedirect to='/settings/company/jobtitle/list'/>   
                        <Route path='/settings/company/jobtitle/list' component={Job_List_Container}/>
                        <Route path='/settings/company/jobtitle/:id' component={Job_Form_Container}/>
                    </Route> 

                </Route>
                <Route path='/settings/unit' component={Orgunit}>
                    <IndexRedirect to="/settings/unit/branch" />    
                    <Route path='/settings/unit/branch' component={BranchContainer}>
                        <IndexRedirect to='/settings/unit/branch/list'/>   
                        <Route path='/settings/unit/branch/list' component={Branch_List_Container}/>
                        <Route path='/settings/unit/branch/:id' component={Branch_Form_Container}/>
                    </Route> 
                    <Route path='/settings/unit/department' component={DeptContainer}>
                        <IndexRedirect to='/settings/unit/department/list'/>   
                        <Route path='/settings/unit/department/list' component={Dept_List_Container}/>
                        <Route path='/settings/unit/department/:id' component={Dept_Form_Container}/>
                    </Route> 
                </Route>  
            </Route>  
            <Route path='/leave' component={Leave}>
                <IndexRedirect to="/leave/setup" />
                <Route path='/leave/setup' component={LeaveSetup}>
                    <IndexRedirect to="/leave/setup/options" />  
                    <Route path='/leave/setup/options' component={LeaveOption}/>
                    <Route path='/leave/setup/lt' component={LeaveTypeContainer}>
                        <IndexRedirect to='/leave/setup/lt/list'/>   
                        <Route path='/leave/setup/lt/list' component={Lt_List_Container}/>
                        <Route path='/leave/setup/lt/:id' component={Lt_Form_Container}/>
                    </Route>                    
                </Route>                  
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
            <Route path='/py' component={Payroll}>
                <IndexRedirect to="/py/setup" />
                <Route path='/py/setup' component={PayrollSetup}>
                    <IndexRedirect to="/py/setup/options" />  
                    <Route path='/py/setup/options' component={PayrollOption}/>
                    <Route path='/py/setup/taxstatus' component={TaxStatusContainer}>
                        <IndexRedirect to='/py/setup/taxstatus/list'/>   
                        <Route path='/py/setup/taxstatus/list' component={TaxStatus_List_Container}/>
                        <Route path='/py/setup/taxstatus/:id' component={TaxStatus_Form_Container}/>
                    </Route>   
                </Route>                  
            </Route>   

        </Route>
        <Route path='/login' component={Login} />
    </Route>  
)