import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ReactDOM from 'react-dom'
import Alert from '../../shared/Alert'
import SaveButton from   '../../shared/SaveButton'

class General_CI_FORM extends Component{

	onValueChanged(e){			
		this.props.valueChanged(e.target.name, e.target.value)		
	}

	cancel(e){
		this.props.cancelEdit(this.props.data.id)
	}

	handleSubmit(e){
		e.preventDefault()
		this.props.update(this.props.data)
	}


	render(){

		const textareaStyle = {
		  width: '100%'
		}

		const { data, isSaving, isGeneralEdit, updateSuccess, updateError, errorMessage} = this.props

		return(
				<div className="col-md-12">
					<Alert hasError={updateError} message={errorMessage}/>
					<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
						 <h3>Contact Information</h3>	
						 <hr/>		
						 <div className="editForm">											 
							  <div className="form-group">	
								 	<label className="col-sm-3 control-label">Address</label>						    
								    <div className="col-sm-7">								    	
								    	<textarea ref="address" name="address" style={textareaStyle} className="form-control" rows="2" onChange={this.onValueChanged.bind(this)} defaultValue={data.address}></textarea>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">City</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="city" name="city" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.city}/>
								    </div>								   
								 </div>
								<div className="form-group">	
								    <label className="col-sm-3 control-label">Province</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="province" name="province" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.province}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Zip</label>							    								   						    
								    <div className="col-sm-3">								    	
								    	<input ref="zipcode" name="zipcode" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.zipcode}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Home Phone</label>							    								   						    
								    <div className="col-sm-5">								    	
								    	<input ref="homephone" name="homephone" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.homephone}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Mobile Phone</label>							    								   						    
								    <div className="col-sm-5">								    	
								    	<input ref="mobilephone" name="mobilephone" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.mobilephone}/>
								    </div>								   
								 </div>
								 <div className="form-group">	
								    <label className="col-sm-3 control-label">Email</label>							    								   						    
								    <div className="col-sm-6">								    	
								    	<input ref="emailadd" name="emailadd" type="text" className="form-control" onChange={this.onValueChanged.bind(this)} value={data.emailadd}/>
								    </div>								   
								 </div>
							  <br/>
							  <div className="row form-group">							    
							    <div className="col-sm-3">								    	
							    </div>
							    <div className="col-sm-6">								        
							    	<SaveButton isSaving={isSaving} sStyle="btn btn-success" caption="Save Changes" />
							    	&nbsp;<button className="btn btn-default" type="button" onClick={this.cancel.bind(this)}>Cancel</button>

							    </div>
							 </div>
						</div>
					</form>
			    </div>

			)
	}
}

export default General_CI_FORM



