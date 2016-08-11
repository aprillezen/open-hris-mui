import React, {Component} from 'react'
import Grid from 'griddle-react'
import { fakedata, cols, colmetadata} from './colConfig'
import { Link } from 'react-router'

class index extends Component{

	render(){
		return(															
				<div className="col-sm-12">
					<h3>Employees</h3>	
					<div className="panel panel-default">
  						<div className="panel-heading">&nbsp;<Link className="btn btn-success" to="/employees/add">Create</Link></div>
						<div className="panel-body">
						    <Grid results={fakedata} tableClassName="griddle-table" showTableHeading={false} useGriddleStyles={false} columnMetadata={colmetadata} columns={cols}/>							   
						</div>						 	
					</div>		
				</div>
		)
	}
}

export default index