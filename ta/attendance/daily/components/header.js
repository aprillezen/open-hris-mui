import React, {Component} from 'react'

class Header extends Component {

	render(){
		return(<div>				 				
					<div className="panel panel-default add_padding_tb">	  								  				
						<div className="panel-body">
							<div className="col-md-12">
								<div className="col-md-2">
									<img className="img-rounded" src="/images/rsz_no-image.png"/>
								</div>
								<div className="col-md-10 pull-right">
									<button className="btn btn-primary">Select employee</button>								
								</div>
							</div>						   
						</div>						 	
					</div>	
				</div>		 				 		
		)
	}
}

Header.contextTypes={
	router: React.PropTypes.object
}


export default Header