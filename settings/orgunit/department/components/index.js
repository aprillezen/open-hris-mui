import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Grid from 'griddle-react'
import { cols, colmetadata, fakedata} from './colConfig'
import { SkyLightStateless } from 'react-skylight'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'

class index extends Component {

	constructor(props){
		super(props)
		props.fetch()
	}
			
	handleSubmit(e){
		e.preventDefault()
		if (_.isEmpty(this.props.department.description)){
			this.props.failedSaved("Please enter description!")	
			return
		}		
	}

	handleCreate(e){
		this.props.add()		
	}

	handleCloseEvent(){
		this.props.cancel()
	}

	handleCloseModal(e){		
		e.preventDefault()
		this.props.cancel()
	}

	handleValueChanged(e){
		this.props.valueChanged(e.target.value)
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.isDialogOpen)	{
			//console.log(this.refs)
		}

	}
	

	render(){

		var formDialog = {		      		    
		      width: '40%',
		      height: '300px',
		      marginTop: '-200px',
		      marginLeft: '-20%',
		      paddingLeft: 30,
		      paddingRight: 30
	    }

		const { isFetching, isFetchFailed, message, data, hasError, dataForm, isDialogOpen, isSaving} = this.props 

		console.log(dataForm.description)

		
		let body= <div className="row">		 				
						<div className="panel panel-default">
	  						<div className="panel-heading">&nbsp;<button className="btn btn-success" onClick={this.handleCreate.bind(this)}>Create</button></div>
							<div className="panel-body">
							    <Alert hasError={isFetchFailed} message={message}/>
							    <Grid results={data} tableClassName="griddle-table" showTableHeading={false} useGriddleStyles={false} columnMetadata={colmetadata} columns={cols}/>
							</div>						 	
						</div>			 		
			 		</div>			

		if (isFetching){
			body = <div>
        			  <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i><span>&nbsp;Loading...</span>
        		   </div>
		}

		return(<div>

			 		{ body }	

			 		<SkyLightStateless dialogStyles={formDialog} hideOnOverlayClicked ref="dialog" title="" isVisible={isDialogOpen} onCloseClicked={this.handleCloseEvent.bind(this)}>			 		   
					    <div className="dialogTitle">Create Department</div>
		         		<form onSubmit={this.handleSubmit.bind(this)}>		         		    
							 <div className="row form-group smallForm">							    
							    <div className="col-sm-12">
							    	<label>Name</label>
							    	<input ref="desc" name="desc" type="text" className="form-control" onChange={this.handleValueChanged.bind(this)} value={dataForm.description}/>
							    </div>
							   
							 </div>	
							 <div className="pull-right">
								 <button className="btn btn-default" onClick={this.handleCloseModal.bind(this)}>Cancel</button>			          							 							 
								 &nbsp;&nbsp;<SaveButton isSaving={isSaving} caption="Submit" />
							 </div>
				    	</form>			          			          
			        </SkyLightStateless>	

			  </div>
			)
	}
}


export default index
