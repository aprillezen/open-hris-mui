import React, {Component} from 'react'
import Grid from 'griddle-react'
import { cols, colmetadata, fakedata} from './colConfig'

class index extends Component {

	componentDidMount(){		
		this.props.fetch()
	}

	render(){

		const { isFetching,isFailed, message, data } = this.props 

		let body= <div className="row">
						<div className="panel panel-default">
	  						<div className="panel-heading">&nbsp;<button className="btn btn-success">Create</button></div>
							<div className="panel-body">
							    <Grid results={data} tableClassName="griddle-table" showTableHeading={false} useGriddleStyles={false} columnMetadata={colmetadata} columns={cols}/>
							</div>						 	
						</div>			 		
			 		</div>			

		if (isFetching){
			body = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}

		return(<div>
			 		{ body }		
			  </div>
			)
	}
}


export default index
