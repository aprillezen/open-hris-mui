import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class StudClass extends Component{

	componentDidMount(){
		this.props.loadFilter()
	}

	handleCreateClass(e){

	}
	selectChanged(val){
		this.props.filterChanged(val)
	}

	render(){

		const { batches, selectedBatch } = this.props
		
		return(
				<div className="panel panel-default">
				  <div className="panel-heading">
				    <h3 className="panel-title">Classes</h3>
			    	<div className="pull-right minusTop">
					  	 <button onClick={this.handleCreateClass.bind(this)} type="button" className="btn btn-success">Create Class</button>
					</div>
				  </div>
				  <div className="panel-body">
				  		
				     	<div className="col-sm-3">
				     	    <div>Select a batch</div>
				     	</div>
				     	<div className="col-sm-5">
				     	    <Select name="selectbatch" value={selectedBatch} options={batches} onChange={this.selectChanged.bind(this)} clearable={false} searchable={false} />
				     	</div>
				     <div className="col-sm-4">
				     	    
				     	</div>

				  </div>
				</div>
			)
	}
}

export default StudClass