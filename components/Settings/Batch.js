import React, {Component} from 'react'
import Grid from 'griddle-react'
import { cols, colmetadata, fakedata} from './colConfig'

class Batch extends Component{

	render(){
		return(
				<div className="panel panel-default">
				  <div className="panel-heading">				  
					   <h3 className="panel-title">Batches</h3>
						<div className="pull-right minusTop">
						  <button type="button" className="btn btn-success">Create Batch</button>
						</div>
				  </div>
				  <div className="panel-body">
				    	<Grid results={fakedata} tableClassName="griddle-table" showTableHeading={false} useGriddleStyles={false} columnMetadata={colmetadata} columns={cols}/>
				  </div>
				</div>
			)
	}
}

export default Batch