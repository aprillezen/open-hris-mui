import React,{Component} from 'react'
import DashboardContainer from '../dashboard/container'
import SplitterLayout from 'react-splitter-layout'
import Lorem from './Lorem'
import Divider from 'material-ui/Divider'

const das= {	
	backgroundColor: 'red'
}

class Dashboard extends Component{
	render(){
		return(
				 <div className="main">				 
			        <nav className="navigation-bar">			           
			        </nav>
			        <div className="child-content">			         
			          <div className="child-content-header">
			          	  <p>Options</p>
			          	  <Divider/>
			          </div>		

			          <div className="child-main-content">
			          	  <Lorem title="Flex box"/>
			          </div>

			        </div>
			    </div>
			)
	}
}

export default Dashboard