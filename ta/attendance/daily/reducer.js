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
	selectedEmployee: {},
	dateStart: moment().subtract(15,'days'),
	dateEnd: moment(),
	employees: [],
	isSearchDialogOpen: false,
	isFetchingSearch: false,
	isFetchSearchFailed: false,	
	searchDialogMessage:''
}

const deleteData=(data, id)=>{	
	var newdata = Object.assign([], data)		
	var index = newdata.findIndex((d)=>d.id==id)
	newdata.splice(index,1)
	return newdata
}

const searchEmp=(data, id)=>{	
	var ret = data.find((d)=>d.id==id)		
	return ret
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
		case ACT.DAILY_LOAD_SEARCH_EMPLOYEE:
			return Object.assign({}, state, {
				isSearchDialogOpen: action.isSearchDialogOpen,		
				isFetchingSearch: action.isFetchingSearch,
				isFetchSearchFailed: action.isFetchSearchFailed,
				searchDialogMessage:''
			})	
		case ACT.DAILY_LOAD_SEARCH_EMPLOYEE_SUCCESS:
			return Object.assign({}, state, {				
				isFetchingSearch: action.isFetchingSearch,
				isFetchSearchFailed: action.isFetchSearchFailed,
				employees: action.data
			})		
		case ACT.DAILY_LOAD_SEARCH_EMPLOYEE_FAILED:
			return Object.assign({}, state, {				
				isFetchingSearch: action.isFetchingSearch,
				isFetchSearchFailed: action.isFetchSearchFailed,
				searchDialogMessage: action.message
			})		
		case ACT.DAILY_SEARCH_EMPLOYEE_CLOSED:
			return Object.assign({}, state, {		
				isSearchDialogOpen: action.isSearchDialogOpen,			
				isFetchingSearch: action.isFetchingSearch,
				isFetchSearchFailed: action.isFetchSearchFailed
			})		
		case ACT.DAILY_SEARCH_EMPLOYEE_SELECT:
			return Object.assign({}, state, {		
				isSearchDialogOpen: action.isSearchDialogOpen,			
				selectedEmployee: searchEmp(state.employees, action.id)
			})		
		default:
			return state

	}
}

