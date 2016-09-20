import React, {Component} from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import _ from 'lodash'
import Grid from 'griddle-react'
import { cols, colmetadata} from './colConfig'

class List extends Component {

	constructor(props){
		super(props)		
		this.props.fetch(this.props.dateStart, this.props.dateEnd)	
	}

	handleChangeStart(val){				
		if (_.isEmpty(this.props.employeeId)){
			this.props.changeStart(val)
		}else{
			this.props.fetch(val,this.props.dateEnd)
		}
	}

	handleChangeEnd(val){
		if (_.isEmpty(this.props.employeeId)){
			this.props.changeEnd(val)
		}else{
			this.props.fetch(this.props.dateStart, val)
		}
		
	}

	browseEmployee(e){

	}

	render(){

		const { isFetching, isFetchFailed, hasError, dateStart, dateEnd, data  } = this.props

		let grid = <Grid results={data} tableClassName="griddle-table" showTableHeading={true} useGriddleStyles={true} columnMetadata={colmetadata} columns={cols}/>
		if (isFetching){
			grid = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}

		return(<div> 
					<div className="col-md-12">
						<div className="form-horizontal">
							<div className="form-group minusLeft">	
							 	<label className="col-sm-2 control-label field_label">Period Covered</label>					    
							    <div className="col-sm-7">								    	
									<DatePicker
										className="form-control"
									    selected={dateStart}
									    startDate={dateStart}
									    endDate={dateEnd}
									    onChange={this.handleChangeStart.bind(this)} />
									    &nbsp;
									<DatePicker
										className="form-control"
									    selected={dateEnd}
									    startDate={dateStart}
									    endDate={dateEnd}
									    onChange={this.handleChangeEnd.bind(this)} />
							    </div>							    						  
							 </div>	
							 <div className="form-group minusLeft">	
							 	<label className="col-sm-2 control-label field_label">Employee</label>					    
							    <div className="col-sm-7">								    	
									<button className="btn btn-default"><i className="fa fa-search" aria-hidden="true" onClick={this.browseEmployee.bind(this)}></i> &nbsp; Browse...&nbsp;</button>
							    </div>							    						  
							 </div>	
						</div>	
					</div>	

					<div className="col-md-12">
						{grid}
					</div>
			  </div>
		 )
	}
}

List.contextTypes={
	router: React.PropTypes.object
}


export default List