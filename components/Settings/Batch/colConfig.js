import RowLink from './rowLink'
import { connect } from 'react-redux'
import {deleteBatch}  from '../../../actions/SettingsActionsDispatch'
import { loadDeleteDialog } from '../../../actions'

const mapStateToProp=(state)=>{
	return{
		isDeleting: state.batchForm.isDeleting,
		hasError: state.batchForm.hasError,
		message: state.batchForm.message
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		deleteBatch: (id)=>{
			dispatch(deleteBatch(id))
		},
		loadDeleteDialog:()=>{
			dispatch(loadDeleteDialog())
		}
	}
}

const RowLinkContainer = connect(mapStateToProp,mapDispatchToProps)(RowLink)

export const cols = [ "id"]
		
export const colmetadata = [
					{
						"columnName": "id",
					    "order": 0,
					    "locked": false,
					    "visible": true,
					    "displayName": "",
					    "customComponent": RowLinkContainer
					}
				]