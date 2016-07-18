import React,{Component} from 'react'

class Students extends Component{
	render(){
		return(
			 <div>{this.props.children}</div>
		)
	}
}

export default Students

//<div className="col-sm-9"><StudentsContainer/></div>