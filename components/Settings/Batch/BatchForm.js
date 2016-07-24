import React, {Component} from 'react'
import _ from 'lodash'
import  Alert from '../../Alert'

class BatchForm extends Component {

	// getItem(id){
	//    var ret
	//    this.props.batches.map(function(item){
	// 		if (id==item.id){			
	// 			 ret = item
	// 		}			
	// 	})
	//    return ret
	// }

	componentDidMount(){
		if (this.props.params.id!='add'){			
			this.props.getBatchEdit(this.props.params.id)
		}else{
			this.props.addForm({"id":'',"batchname":'',"yearfrom":'', "yearto":''})
		}
	}

	onValueChanged(e){
		//console.log(this.props.batch)
		this.props.valueChanged(this.props.batch, e.target.name, e.target.value)
		
	}

	handleSubmit(e){
		e.preventDefault()
		if (_.isEmpty(this.props.batch.batchname)){
			this.props.failedSave("Please enter batch name!")	
			return
		}else if (_.isEmpty(this.props.batch.yearfrom)){
			this.props.failedSave("Please enter year from")	
			return
		}else if (_.isEmpty(this.props.batch.yearto)){
			this.props.failedSave("Please enter year to")	
			return
		}	

		// let data =  {  "id": 0,
		// 			   "batchname": this.refs.batchname.value,				 
		// 			   "yearfrom": this.refs.yearfrom.value,
		// 			   "yearto": this.refs.yearto.value
		// 			}

		this.props.saveForm(this.props.params.id, this.props.batch)
	}

	handleCancel(e){
		e.preventDefault()
		this.context.router.push('/settings/batch')
	}

	render(){

		const { hasError, message, batch } = this.props

		//console.log(batch.batchname)

		return(
				<div className="panel panel-default">
				  <div className="panel-heading">				  
					   <h3 className="panel-title" ref="title"></h3>
						<div className="pull-right minusTop">
						  
						</div>
				  </div>
				  <div className="panel-body">
				       <Alert hasError={hasError} message={message}/>
				    	<form onSubmit={this.handleSubmit.bind(this)}>
							 <div className="row form-group">							    
							    <div className="col-sm-8">
							    	<label>Batch Name</label>
							    	<input ref="batchname" name="batchname" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={batch.batchname}/>
							    </div>
							 </div>
							 <div className="row form-group">							    
							    <div className="col-sm-3">
							    	<label>School Year</label>
							    	<input ref="yearfrom" name="yearfrom" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={batch.yearfrom}/>
							    </div>
							    <div className="col-sm-3">
							    	<label>&nbsp;</label>
							    	<input ref="yearto" name="yearto" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={batch.yearto}/>
							    </div>
							 </div>
							 <div className="row form-group">							    
							    <div className="col-sm-3">
							    	<button type="submit" className="btn btn-success"><strong>Save Batch</strong></button>
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