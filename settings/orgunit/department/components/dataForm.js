import React, {Component}from 'react'
import { SkyLightStateless } from 'react-skylight'
import Alert from '../../../../shared/Alert'
import SaveButton from   '../../../../shared/SaveButton'


class dataForm extends Component{

	handleSubmit(e){
		e.preventDefault()
		if (_.isEmpty(this.props.data.description)){
			this.props.failedSaved("Please enter description!")	
			return
		}	
		this.props.save(this.props.data, this.props.editMode)
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

	render(){
		
		var formDialog = {		      		    
		      width: '40%',
		      height: '300px',
		      marginTop: '-200px',
		      marginLeft: '-20%',
		      paddingLeft: 30,
		      paddingRight: 30
	    }

	    const { data,message, isDialogOpen, isSaving, saveError,title} = this.props 				

		return(
		 		<SkyLightStateless dialogStyles={formDialog} hideOnOverlayClicked ref="dialog" title="" isVisible={isDialogOpen} onCloseClicked={this.handleCloseEvent.bind(this)}>			 		   
				    <div className="dialogTitle">{title}</div>
	         		<form onSubmit={this.handleSubmit.bind(this)}>		         		    
						 <div className="row form-group smallForm">							    
						    <div className="col-sm-12">
						    	<label>Name</label>
						    	<input ref="desc" name="desc" type="text" className="form-control" onChange={this.handleValueChanged.bind(this)} value={data.description}/>
						    </div>
						    <Alert hasError={saveError} message={message}/>
						 </div>	
						 <div className="pull-right">
							 <button className="btn btn-default" onClick={this.handleCloseModal.bind(this)}>Cancel</button>	
							 &nbsp;&nbsp;<SaveButton isSaving={isSaving} caption="Submit" />
						 </div>
			    	</form>			          			          
		        </SkyLightStateless>	
			)
	}
}

export default dataForm
