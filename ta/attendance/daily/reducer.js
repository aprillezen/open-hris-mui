import * as ACT from './actionTypes'
import moment from 'moment'

const initialstate = {
	isFetching: false,
	isFetchFailed: false,
	hasError: false,
	message:'',
	data:[],
	isDeleteDialogOpen: false,
	isDeleting: false,
	deleteHasError: false,
	deleteErrorMsg:'',
	deletemsg:'',
	deleteId:0,
	deleteSuccess: false,
	employeeId: '',
	dateStart: moment().subtract(15,'days'),
	dateEnd: moment()
}

const deleteData=(data, id)=>{	
	var newdata = Object.assign([], data)		
	var index = newdata.findIndex((d)=>d.id==id)
	newdata.splice(index,1)
	return newdata
}


export const dailyIOReducer = (state= initialstate, action)=>{
	switch(action.type){
		case ACT.DAILY_LOAD_LIST:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				hasError: action.hasError,
				message: action.message,
				isDeleteDialogOpen: false,
				isDeleting: false,
				deleteHasError: false,
				deleteErrorMsg:'',
				deletemsg:'',
				deleteId:0,
				deleteSuccess: false,
				dateStart: action.dateStart,
				dateEnd: action.dateEnd
			})
		case ACT.DAILY_LOAD_LIST_SUCCESS:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				hasError: action.hasError,
				message: action.message,
				data: action.data
			})
		case ACT.DAILY_LOAD_LIST_FAILED:
			return Object.assign({}, state, {
				isFetching: action.isFetching,
				isFetchFailed: action.isFetchFailed,
				hasError: action.hasError,
				message: action.message
			})		
		case ACT.DAILY_CHANGE_DATE_START:
			return Object.assign({}, state, {
				dateStart: action.dateStart
			})	
		case ACT.DAILY_CHANGE_DATE_END:
			return Object.assign({}, state, {
				dateEnd: action.dateEnd
			})		
		default:
			return state

	}
}

