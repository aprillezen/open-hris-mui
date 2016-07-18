import React, {Component} from 'react'
import Form from './Form'
class Add extends Component{

	btnSaveClick(e){

	}

	btnCancelClick(e){
		this.context.router.push('/student')
	}

	render(){
		return(
			<div className="container-fluid">
				<div className="row-fluid">
		  			<div className="col-sm-9">
		  			    <h3>Add Student</h3>
		  			</div>
		  			<div className="col-sm-3 addTop">
		  				<div className="pull-right">
		  					<button type="button" className="btn btn-primary" onClick={this.btnSaveClick.bind(this)}>Save Profile</button>
		  					&nbsp;<button type="button" className="btn btn-default" onClick={this.btnCancelClick.bind(this)}>Cancel</button>
		  				</div>
		  			</div>
				</div>
				<div className="row-fluid">
					
						<Form/>
					
				</div>
			 </div>
		)
	}
}

Add.contextTypes = {
    router: React.PropTypes.object
}

export default Add