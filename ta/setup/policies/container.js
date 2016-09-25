import { connect } from 'react-redux'
import { fetchPolicy,loadAddForm,valueChangeForm,saveFailedForm,
		 savePolicy,loadEdit,
		 loadDeleteDialog, cancelDelete} from './actions'
import List from './components/list'
import PolicyForm from './components/policyForm'

const mapStateToProps = (state)=>{
	
	return{
		isFetching: state.policy.isFetching,
		isFetchFailed: state.policy.isFetching,
		hasError: state.policy.hasError,
		message: state.policy.message,
		data: state.policy.data,
		deleteSuccess: state.policy.deleteSuccess,
		deletemsg: state.policy.deletemsg,
		currentyear: state.policy.currentyear
	}
}

const mapDispatchToProps= (dispatch)=>{
	return {
		fetch: (val)=>{
			dispatch(fetchPolicy(val))
		}
	}

}

export const PolicyListContainer = connect(mapStateToProps, mapDispatchToProps)(List)

const mapStateToPropsForm=(state)=>{
	return{
		editMode : state.policyForm.editMode,
		isFetching : state.policyForm.isFetching,	
		isSaving : state.policyForm.isSaving,
		hasError : state.policyForm.hasError,
		message : state.policyForm.message,
		data : state.policyForm.data,		
		title: state.policyForm.title,		
		saveAddSuccess: state.policyForm.saveAddSuccess,
		updateSuccess: state.policyForm.updateSuccess,
		currentyear: state.policyForm.currentyear
	}
}

const mapDispatchToPropsForm = (dispatch)=>{
	const blankdata = { 
						"id": 0, 
						"transyear":'', 						
						"description":'',
						"transdate": null,
						"holidaytype": 0,
						"requiredworkdate": null					
					   }
	return {
		add: (yr)=>{
			blankdata.transyear = yr
			dispatch(loadAddForm(blankdata, "Create new policy"))
		},
		save: (data,editMode)=>{
			dispatch(savePolicy(data, editMode))
		},
		valueChanged: (data, field, value)=>{
			dispatch(valueChangeForm(data, field, value))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedForm(message))
		},	 
	 	edit: (id)=>{
	 		dispatch(loadEdit(id,"Edit Policy"))
	 	}
	}

}

export const PolicyFormContainer = connect(mapStateToPropsForm, mapDispatchToPropsForm)(PolicyForm)





