import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
			<div className="header-style" > 
					<nav className="navbar navbar-default">
					  <div className="container-fluid">
					    <div className="navbar-header">
					      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					      </button>
					      <a className="navbar-brand" href="#">Kclaysoft</a>
					    </div>
					    
					    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      <ul className="nav navbar-nav nav-style">
					        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
					        <li><NavLink to="/employees">Employees</NavLink></li>	
					        <li><NavLink to="/leave">Leave</NavLink></li>					        
					        <li><NavLink to="/ta">Time and Attendance</NavLink></li>					        
					        <li><NavLink to="/ta">Payroll</NavLink></li>					        
					      </ul>				     
					      <ul className="nav navbar-nav nav-style navbar-right">
					        <li><NavLink to="/settings">Settings</NavLink></li>
					        <li className="dropdown">
					          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
					          <ul className="dropdown-menu">
					            <li><a href="#">Action</a></li>
					            <li><a href="#">Another action</a></li>
					            <li><a href="#">Something else here</a></li>				            
					            <li><a href="#">Separated link</a></li>
					          </ul>
					        </li>
					      </ul>
					    </div>
					  </div>
					</nav>			
				 </div>
    	)
  }
})