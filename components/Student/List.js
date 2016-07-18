import React from 'react'
import Grid from 'griddle-react'
import { cols, colmetadata, fakedata} from './columnConfig'
import LeftNav from './LeftNav' 

class List extends React.Component{
	btnEnrollClick(e){
		//console.log(this.props)
		this.context.router.push('/student/add')
	}
	render(){

		return(
			<div className="container-fluid">
				<div className="row-fluid">
		  			<div className="col-sm-10">
		  			    <h3>Students</h3>
		  			</div>
		  			<div className="col-sm-2 addTop">
		  				<button type="button" className="btn btn-primary btn-block" onClick={this.btnEnrollClick.bind(this)}>Enroll Student</button>
		  			</div>
				</div>
				<div className="row-fluid">
					<div className="col-sm-3"><LeftNav/></div>
					<div className="col-sm-9">
						<Grid results={fakedata} tableClassName="table" columnMetadata={colmetadata} columns={cols}/>
					</div>
				</div>
			 </div>
			) 
	}
}

List.contextTypes = {
    router: React.PropTypes.object
}

export default List