import { connect } from 'react-redux'
import { fetchBranches,loaddAdd,valueChangeForm,saveFailedForm,
		 headvalueChangeForm, saveBranch,loadEdit,
		 loadDeleteDialog, cancelDelete} from './actions'
import List from './components/list'
import BranchForm from './components/branchForm'

const mapStateToProps = (state)=>{
	
	return{
		isFetching: state.branch.isFetching,
		isFetchFailed: state.branch.isFetching,
		hasError: state.branch.hasError,
		message: state.branch.message,
		data: state.branch.data,
		deleteSuccess: state.branch.deleteSuccess
	}
}

const mapDispatchToProps= (dispatch)=>{
	return {
		fetch: ()=>{
			dispatch(fetchBranches())
		}
	}

}


export const Branch_List_Container = connect(mapStateToProps, mapDispatchToProps)(List)

const mapStateToPropsForm=(state)=>{
	return{
		editMode : state.branchForm.editMode,
		isFetching : state.branchForm.isFetching,	
		isSaving : state.branchForm.isSaving,
		hasError : state.branchForm.hasError,
		message : state.branchForm.message,
		data : state.branchForm.data,		
		title: state.branchForm.title,
		employees: state.branchForm.employees,
		saveAddSuccess: state.branchForm.saveAddSuccess,
		updateSuccess: state.branchForm.updateSuccess
	}
}

const mapDispatchToPropsForm = (dispatch)=>{
	const blankdata = { 
						"id": 0, 
						"branchname":'', 
						"address":'',						
						"city":'',
						"province":'',
						"zipcode":'',
						"phoneno": '',
						"head": ''
					   }
	return {
		add: ()=>{
			dispatch(loaddAdd(blankdata, "Create new branch"))
		},
		save: (data,editMode)=>{
			dispatch(saveBranch(data, editMode))
		},
		valueChanged: (data, field, value)=>{
			dispatch(valueChangeForm(data, field, value))
		},
		saveFailed: (message)=>{
			dispatch(saveFailedForm(message))
		},
	 	headChange: (val)=>{
	 		dispatch(headvalueChangeForm(val))
	 	},
	 	edit: (id)=>{
	 		dispatch(loadEdit(id,"Edit Branch"))
	 	}
	}

}

export const Branch_Form_Container = connect(mapStateToPropsForm, mapDispatchToPropsForm)(BranchForm)





