import React, {Component} from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import _ from 'lodash'
import Grid from 'griddle-react'
import { cols, colmetadata, empcols, empcolmetadata} from './colConfig'
import { SkyLightStateless } from 'react-skylight'
import Profile from './profile'

class List extends Component {

	constructor(props){
		super(props)	
		let empId=0
		if (!_.isEmpty(this.props.selectedEmployee)){
			empId = this.props.selectedEmployee.id
		}					
		this.props.fetch(this.props.dateStart, this.props.dateEnd, empId)	
	}

	handleChangeStart(val){				
		if (_.isEmpty(this.props.selectedEmployee)){
			this.props.changeStart(val)
		}else{
			this.props.fetch(val,this.props.dateEnd)
		}
	}

	handleChangeEnd(val){
		if (_.isEmpty(this.props.selectedEmployee)){
			this.props.changeEnd(val)
		}else{
			this.props.fetch(this.props.dateStart, val)
		}
		
	}

	browseEmployee(e){		
		this.props.loadSearch()
		this.props.fetchEmp()
	}

	closeClick(e){
		this.props.closeSearch()
	}
	render(){

		var browseDialog = {		      		    
		      width: '60%',
		      height: '450px',
		      marginTop: '-230px',
		      marginLeft: '-30%',
		      paddingLeft: 30,
		      paddingRight: 30
	    }

		const { isFetching, isFetchFailed, hasError, dateStart, dateEnd, data, 
				isSearchDialogOpen,employees, isFetchingSearch, isFetchSearchFailed, searchDialogMessage, selectedEmployee } = this.props

		let grid = <Grid results={data} tableClassName="griddle-table" showTableHeading={true}
						 useGriddleStyles={true} columnMetadata={colmetadata} columns={cols}/>
		if (isFetching){
			grid = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}

		let gridSearch = <Grid results={employees} tableClassName="griddle-table" showTableHeading={true} useGriddleStyles={true} columnMetadata={empcolmetadata} columns={empcols}/>
		if (isFetchingSearch){
			gridSearch = <div>
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
							     <div className="col-sm-3">
							    	<button className="btn btn-default pull-right"><i className="fa fa-download" aria-hidden="true"></i> &nbsp; Import from file</button>
							    </div>							    						  
							 </div>	
							 <div className="form-group minusLeft">	
							 	<label className="col-sm-2 control-label field_label">Employee</label>					    
							    <div className="col-sm-7">	
							    	 <Profile data={selectedEmployee}/>
									<button onClick={this.browseEmployee.bind(this)} className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i> &nbsp; Browse...&nbsp;</button>
							    </div>	

							 </div>	
						</div>	
					</div>	

					<div className="col-md-12">
						{grid}
					</div>

					<SkyLightStateless dialogStyles={browseDialog} hideOnOverlayClicked ref="dialog" title="" isVisible={isSearchDialogOpen} onCloseClicked={this.closeClick.bind(this)}>			 		   					   
	         			{gridSearch}
						 <div className="pull-right">
							 <button className="btn btn-default" onClick={this.closeClick.bind(this)}>Close</button>								
						 </div>			          			          
		        	</SkyLightStateless>
			  </div>
		 )
	}
}

List.contextTypes={
	router: React.PropTypes.object
}


export default List