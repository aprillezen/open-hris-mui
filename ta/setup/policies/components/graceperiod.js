import React, {Component} from 'react'

const desc = {
  width: '80px'
}	

class GracePeriod extends Component{

	render(){		
		return(
				<div>					
					<div className="form-group">	
			 			<div className="form-group">										
					 		<label className="settingTitle">Allowed grace period</label>					 		
					    	<input ref="garceperiod" name="garceperiod" type="text" className="form-control" style={desc} />
						</div>	
					</div>	
					<div className="form-group">	
			 			<div className="form-group">										
					 		<label className="settingTitle">Maximum Tardiness</label>			
					 		<p className="text-muted">* Tardiness that exceeds to maximum will be treated as absences.</p>		 		
					    	<input ref="garceperiod" name="garceperiod" type="text" className="form-control" style={desc} />
						</div>	
					</div>	
					<div className="form-group">	
				 		<div className="checkbox">										 
						    <input type="checkbox" ref="isdefault" name="isdefault" value='1'/> <span className="settingTitle">Include grace period in tardiness</span>						     
						    <p className="text-muted">Include the grace period to the actual tardiness</p>
						</div>
					</div>	
				
				</div>
			)
	}
}

export default GracePeriod


