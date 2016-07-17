import React,{Component} from 'react'
import StudentsContainer from '../containers/StudentsContainer'
import LeftNav from '../components/Student/LeftNav' 

class Students extends Component{
	render(){
		return(
			<div className="container-fluid">
				<div className="row-fluid">
		  			<div className="col-sm-10">
		  			    <h3>Students</h3>
		  			</div>
		  			<div className="col-sm-2 addTop">
		  				<button type="button" className="btn btn-primary btn-block">Enroll Student</button>
		  			</div>
				</div>
				<div className="row-fluid">
					<div className="col-sm-3"><LeftNav/></div>
		  			<div className="col-sm-9"><StudentsContainer/></div>
				</div>
			 </div>

			
			
		)
	}
}

export default Students