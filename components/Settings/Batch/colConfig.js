import RowLink from './rowLink'
import { connect } from 'react-redux'
import {initDeleteBatch, deleteBatch}  from '../../../actions/BatchActions'

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
		initDelete:()=>{
			dispatch(initDeleteBatch())
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