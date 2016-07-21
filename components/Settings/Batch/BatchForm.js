import React, {Component} from 'react'

class BatchForm extends Component {


	handleCancel(e){
		e.preventDefault()
		this.context.router.push('/settings/batch')
	}

	render(){
		return(
				<div className="panel panel-default">
				  <div className="panel-heading">				  
					   <h3 className="panel-title">Create Batch</h3>
						<div className="pull-right minusTop">
						  
						</div>
				  </div>
				  <div className="panel-body">
				    	<form>
							 <div className="row form-group">							    
							    <div className="col-sm-8">
							    	<label>Batch Name</label>
							    	<input type="text" className="form-control" id="txtName"/>
							    </div>
							 </div>
							 <div className="row form-group">							    
							    <div className="col-sm-8">
							    	<label>School Year</label>
							    	<input type="text" className="form-control" id="txtName"/>
							    </div>
							 </div>
							 <div className="row form-group">							    
							    <div className="col-sm-3">
							    	<button type="text" className="btn btn-success"><strong>Save Batch</strong></button>
							    	&nbsp;&nbsp;<button onClick={this.handleCancel.bind(this)} type="text" className="btn btn-default">Cancel</button>
							    </div>
							    <div className="col-sm-3">
							    	
							    </div>
							 </div>
				    	</form>
				  </div>
				</div>
			)
	}
}

BatchForm.contextTypes = {
	router: React.PropTypes.object
}

export default BatchForm