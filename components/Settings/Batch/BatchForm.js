import React, {Component} from 'react'
import _ from 'lodash'
import  Alert from '../../Alert'

class BatchForm extends Component {

	getItem(id){
	   var ret
	   this.props.batches.map(function(item){
			if (id==item.id){	
			   //console.log(item)			
				 ret = item
			}			
		})

	   return ret
	}

	componentDidMount(){
		
		if (this.props.params.id!='add'){
			var data = this.getItem(this.props.params.id)
			this.refs.batchname.value = data.batchname
			this.refs.yearfrom.value = data.yearfrom
			this.refs.yearto.value = data.yearto
			//console.log(data)
		}
	
	}

	handleSubmit(e){
		e.preventDefault()
		if (_.isEmpty(this.refs.batchname.value)){
			this.props.failedSave("Please enter batch name!")	
			return
		}else if (_.isEmpty(this.refs.yearfrom.value)){
			this.props.failedSave("Please enter year from")	
			return
		}else if (_.isEmpty(this.refs.yearto.value)){
			this.props.failedSave("Please enter year to")	
			return
		}	

		let data =  {  "id": 0,
					   "batchname": this.refs.batchname.value,				 
					   "yearfrom": this.refs.yearfrom.value,
					   "yearto": this.refs.yearto.value
					}

		this.props.saveForm(data)
	}

	handleCancel(e){
		e.preventDefault()
		this.context.router.push('/settings/batch')
	}

	render(){

		const { hasError, message } = this.props

		return(
				<div className="panel panel-default">
				  <div className="panel-heading">				  
					   <h3 className="panel-title">Create Batch</h3>
						<div className="pull-right minusTop">
						  
						</div>
				  </div>
				  <div className="panel-body">
				       <Alert hasError={hasError} message={message}/>
				    	<form onSubmit={this.handleSubmit.bind(this)}>
							 <div className="row form-group">							    
							    <div className="col-sm-8">
							    	<label>Batch Name</label>
							    	<input ref="batchname" type="text" className="form-control" id="txtName"/>
							    </div>
							 </div>
							 <div className="row form-group">							    
							    <div className="col-sm-3">
							    	<label>School Year</label>
							    	<input ref="yearfrom" type="text" className="form-control" id="txtName"/>
							    </div>
							    <div className="col-sm-3">
							    	<label>&nbsp;</label>
							    	<input ref="yearto" type="text" className="form-control" id="txtName"/>
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