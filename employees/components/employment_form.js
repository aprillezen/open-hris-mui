import React, {Component} from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import ReactDOM from 'react-dom'
import Alert from '../../shared/Alert'
import SaveButton from   '../../shared/SaveButton'

class Employment_Form extends Component{

	cancel(e){
		this.props.cancelEdit(1)
	}

	render(){
		
		const { data, isSaving } = this.props
		//onChange={this.birthdateChanged.bind(this)
		return(
				<div className="col-md-12">
					<form className="form-horizontal">
						 <h3>Employment</h3>	
						 <hr/>		
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Start of Employment</label>					    
						    <div className="col-sm-4">								    	
						    	<DatePicker openToDate={moment('1993-09-28')} className="form-control" showYearDropdown selected={data.startdate} />
						    </div>						    							  
						 </div>	
						 <div className="form-group">
						 	<label className="col-sm-3 control-label field_label">Job Title</label>					    
						    <div className="col-sm-5">								    	
						    	
						    </div>								 									  
						 </div>	
						 <div className="form-group">
						 	<label className="col-sm-3 control-label field_label">Job Level</label>					    
						    <div className="col-sm-5">								    	
						    	
						    </div>								 									  
						 </div>	
						  <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Employee Category</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Payroll Schedule</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>		
						  <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Employment Status</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>		
						<div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Separation Date</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Mode of Payment</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Assignment/Branch</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>		
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Department</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Group</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">S.S.S #</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">PhilHealth #</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>							 
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">PagIbig #</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>		
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">T.I.N.</label>					    
						    <div className="col-sm-4">								    	
						    	
						    </div>								   
						 </div>	
						 <div className="form-group">	
						 	<label className="col-sm-3 control-label field_label">Tax Status</label>					    
						    <div className="col-sm-4">								    	
						    	
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
						 <br/>
						 <br/>				 							 						
					</form>
			    </div>

			)
	}
}

export default Employment_Form



