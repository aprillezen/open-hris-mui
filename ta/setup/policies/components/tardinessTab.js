import React, {Component} from 'react'
import GracePeriod from './gracePeriod'

const tableRd = {
  width: '60%'
}

class TardinessTab extends Component{

	render(){		
		return(
				<div>					
					<div className="form-group">	
				 		<div className="checkbox">										 
						    <input type="checkbox" ref="isdefault" name="isdefault" value='1'/> <span className="settingTitle">Compute tardiness</span>						     
						    <p className="text-muted">Allows the system to compute the tardiness incurred to be deducted to payroll</p>
						</div>
					</div>	
					<legend/>
					<div className="form-group">	
				 		<label className="settingTitle">Basis of computation</label>	
				 		<p className="text-muted">Select basis of computation of tardiness</p>				 		
				 		<table style={tableRd}>
				 			<tbody>
				 				<tr>
						 			<td>
								 		<div className="radio">										  
									   		 <input type="radio" name="tardinessbasis" value="0"/>Actual tardiness								    
									    </div>						  								    
									</td>
									<td>
								 		<div className="radio">										  
									   		 <input type="radio" name="tardinessbasis" value="0"/>Grace period								    
									    </div>	
									</td>
									<td>
								 		<div className="radio">										  
									   		 <input type="radio" name="tardinessbasis" value="0"/>Tardiness bracket	table					    
									    </div>	
									</td>																					
								</tr>
							</tbody>								
						</table>
					</div>	

					<GracePeriod/>	
				</div>
			)
	}
}

export default TardinessTab


