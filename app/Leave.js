import React,{Component} from 'react'
import NavTab from  '../leave/NavTab'
import Divider from 'material-ui/Divider'

class Leave extends Component{
	render(){
		return(
			<div className="container-fluid">	
				<div className="row-fluid col-sm-12">	
					<div className="col-sm-2">
						LEAVE						
					</div>		
					<div className="col-sm-10">						
					</div>							
				</div>
				<Divider/>								
				<div className="row-fluid col-sm-12">
					{this.props.children}
				</div>				
			 </div>
			)
	}
}

export default Leave