import { connect } from 'react-redux'
import { fetchTaxStatus,loadAddForm,valueChangeForm,saveFailedForm,
		 saveTaxStatus,loadEdit,
		 loadDeleteDialog, cancelDelete} from './actions'
import List from './components/list'
import TaxStatusForm from './components/taxStatusForm'

const mapStateToProps = (state)=>{
	
	return{
		isFetching: state.taxstatus.isFetching,
		isFetchFailed: state.taxstatus.isFetching,
		hasError: state.taxstatus.hasError,
		message: state.taxstatus.message,
		data: state.taxstatus.data,
		deleteSuccess: state.taxstatus.deleteSuccess,
		deletemsg: state.taxstatus.deletemsg
	}
}

const mapDispatchToProps= (dispatch)=>{
	return {
		fetch: ()=>{
			dispatch(fetchTaxStatus())
		}
	}

}

export const TaxStatus_List_Container = connect(mapStateToProps, mapDispatchToProps)(List)

const mapStateToPropsForm=(state)=>{
	return{
		editMode : state.taxstatusForm.editMode,
		isFetching : state.taxstatusForm.isFetching,	
		isSaving : state.taxstatusForm.isSaving,
		hasError : state.taxstatusForm.hasError,
		message : state.taxstatusForm.message,
		data : state.taxstatusForm.data,		
		title: state.taxstatusForm.title,		
		saveAddSuccess: state.taxstatusForm.saveAddSuccess,
		updateSuccess: state.taxstatusForm.updateSuccess
	}
}

const mapDispatchToPropsForm = (dispatch)=>{
	const blankdata = { 
						"id": 0, 
						"taxcode":'', 						
						"description":''
					   }
	return {
		add: ()=>{
			dispatch(loadAddForm(blankdata, "Create new tax status"))
		},
		save: (data,editMode)=>{
			dispatch(saveTaxStatus(data, editMode))
		},
		valueChanged: (data, field, value)=>{
			dispatch(valueChangeForm(data, field, value))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedForm(message))
		},	 
	 	edit: (id)=>{
	 		dispatch(loadEdit(id,"Edit job title"))
	 	}
	}

}

export const TaxStatus_Form_Container = connect(mapStateToPropsForm, mapDispatchToPropsForm)(TaxStatusForm)





