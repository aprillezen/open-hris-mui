import React, {Component} from 'react'
import Grid from 'griddle-react'
import { cols, colmetadata, fakedata} from './colConfig'


class Batch extends Component{

	onRowClick(){
		
	}

	handleCreateBatch(e){
		//alert("1")
		this.context.router.push('/settings/batch/add')
		//push('/settings/createbatch')
	}

	componentDidMount(){		
		this.props.initialize()
	}

	render(){

		const { isFetching, batches } = this.props
		var data=<div></div>
		if (isFetching){
			data = <div><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span className="sr-only">Loading...</span></div>
		}else{
			data=<div><Grid results={batches} tableClassName="griddle-table" showTableHeading={false} useGriddleStyles={false} columnMetadata={colmetadata} columns={cols}/></div>
		}

		return(
				<div className="panel panel-default">
				  <div className="panel-heading">				  
					   <h3 className="panel-title">Batches</h3>
						<div className="pull-right minusTop">
						  <button onClick={this.handleCreateBatch.bind(this)} type="button" className="btn btn-success">Create Batch</button>
						</div>
				  </div>
				  <div className="panel-body">
				    	{data}
				  </div>
				</div>
			)
	}
}


Batch.contextTypes={
	router: React.PropTypes.object
}

export default Batch