import React, {Component} from 'react'

const tdCaptionRd = {
  width: '270px',
  paddingBottom: '30px'
}

const tableRd = {
  width: '80%'
}	

const tableWh = {
  width: '15%'
}	

const tdCaption = {
  width: '150px',
  paddingBottom: '30px'
}	

const tdHours = {
  width: '60px'
}

const tdTime = {
  width: '150px'
}	


class WorkingHoursTab extends Component{

	render(){		
		return(
				<div>
					<div className="form-group">						 	
				    	<table>
				    		<tbody>
					    		<tr>
					    			<td style={tdCaptionRd}><label className="settingTitle">Required working hours per day<sup className="required_asterisk">*</sup> </label></td>
					    			<td style={tdHours}><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">hours</span></td>
					    			<td style={tdHours}><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">minutes</span></td>
					    		</tr>
					    	</tbody>
				    	</table>							    									    								    
					</div>						
					<div className="form-group">	
				 		<label className="settingTitle">Employee's Timeoff <sup className="required_asterisk">*</sup></label>	
				 		<p className="text-muted">Choose which days of the week where employee can have their restday. As prescribed by labor law, en employee is entitled to have at least one restday in the week. Note that daily paid employees is no work no pay.</p>
				 		<table style={tableRd}>
				 			<tbody>
				 				<tr>
						 			<td>
								 		<div className="checkbox">										 
										  <input type="checkbox" ref="isdefault" name="isdefault" 	 value='1'/> Monday
										</div>
									</td>
									<td>
								 		<div className="checkbox">										 
										  <input type="checkbox" ref="isdefault" name="isdefault" 	 value='1'/> Tuesday
										</div>
									</td>
									<td>
								 		<div className="checkbox">										 
										  <input type="checkbox" ref="isdefault" name="isdefault" 	 value='1'/> Wednesday
										</div>
									</td>												
									<td>
								 		<div className="checkbox">										 
										  <input type="checkbox" ref="isdefault" name="isdefault" 	 value='1'/> Thursday
										</div>
									</td>
									<td>
								 		<div className="checkbox">										 
										  <input type="checkbox" ref="isdefault" name="isdefault" 	 value='1'/> Friday
										</div>
									</td>
									<td>
								 		<div className="checkbox">										 
										  <input type="checkbox" ref="isdefault" name="isdefault" 	 value='1'/> Saturday
										</div>
									</td>
									<td>
								 		<div className="checkbox">										 
										  <input type="checkbox" ref="isdefault" name="isdefault" 	 value='1'/> Sunday
										</div>
									</td>
								</tr>
							</tbody>								
						</table>
					</div>	
					
					<legend/>

					<div className="form-group">	
				 		<div className="checkbox">										 
						    <input type="checkbox" ref="isdefault" name="isdefault" value='1'/> <span className="settingTitle">Allow overtime work</span>
						    <p className="text-muted">Employee is paid to a work rendered in excess of regular working hours.</p>					    								   						 
						    <table>
					    		<tbody>
						    		<tr>
						    			<td style={tdCaption}><label className="control-label">Minimum overtime</label></td>
						    			<td style={tdHours}><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">hours</span></td>
						    			<td style={tdHours}><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">minutes</span></td>
						    			<td style={tdHours}></td>
						    		</tr>
						    	</tbody>
				    		</table>
				    		<table>
					    		<tbody>
						    		<tr>
						    			<td style={tdCaption}><label className="control-label">Minimum early OT</label></td>
						    			<td style={tdHours}><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">hours</span></td>
						    			<td style={tdHours}><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">minutes</span></td>
						    			<td style={tdHours}></td>
						    		</tr>
						    	</tbody>
				    		</table>						    								    
						</div>
					</div>	
					
					<legend/>

					<div className="form-group">	
					 	<label className="settingTitle">Start/End of Night differential<sup className="required_asterisk">*</sup> </label>						    								    					 	
				    	<table>
				    		<tbody>
					    		<tr>
					    			<td style={tdTime}><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">From</span></td>
					    			<td style={tdTime}><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">To</span></td>
					    		</tr>
					    	</tbody>
				    	</table>							    									    								    
					</div>	

					<div className="form-group">	
					 	<label className="settingTitle">Minimum night differential<sup className="required_asterisk">*</sup> </label>						    								    
					 	<p className="text-muted">The minimum working hours allowed during night differential.</p>
				    	<table style={tableWh}>
				    		<tbody>
					    		<tr>
					    			<td><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">hours</span></td>
					    			<td><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">minutes</span></td>
					    		</tr>
					    	</tbody>
				    	</table>							    									    								    
					</div>	
					
					<div className="form-group">	
					 	<label className="settingTitle">Early in threshold<sup className="required_asterisk">*</sup> </label>						    								    
					 	<p className="text-muted">The allowed time for clocking in before schedule.</p>
				    	<table style={tableWh}>
				    		<tbody>
					    		<tr>
					    			<td><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">hours</span></td>
					    			<td><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">minutes</span></td>
					    		</tr>
					    	</tbody>
				    	</table>							    									    								    
					</div>	

					<div className="form-group">	
					 	<label className="settingTitle">Required working hours before holiday<sup className="required_asterisk">*</sup> </label>						    								    
					 	<p className="text-muted">The required working hours before holiday so that holiday will be paid.</p>
				    	<table style={tableWh}>
				    		<tbody>
					    		<tr>
					    			<td><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">hours</span></td>
					    			<td><input ref="shift" name="shift" type="text" className="form-control"/><span className="help-block">minutes</span></td>
					    		</tr>
					    	</tbody>
				    	</table>							    									    								    
					</div>	

				</div>
			)
	}
}

export default WorkingHoursTab


