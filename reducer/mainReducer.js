import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILED} from '../actions'
import { LOAD_FILTER, LOAD_FILTER_SUCCESS, LOAD_FILTER_FAILED, FILTER_VALUE_CHANGED} from '../actions'

const initialstate = {
	isFetching: false,
	isFailed: false,
	message: '',
	data: [],
	filterdata: [],
	selectedFilter:''
}


const mainReducer = (state = initialstate , action)=>{
	switch(action.type){
		case LOAD_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed:action.isFailed,
				message: ''
			})

		case LOAD_LIST_SUCCESS:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,
				data: action.data,
				message: ''
			})
		case LOAD_LIST_FAILED:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,			
				message: action.message
			})
		case LOAD_FILTER:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,			
				message: ''
			})
		case LOAD_FILTER_SUCCESS:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,			
				message: '',
				filterdata: action.data
			})
		case LOAD_FILTER_FAILED:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,			
				message: action.message
			})
		case FILTER_VALUE_CHANGED:
			return Object.assign({}, state,{
				selectedFilter: action.id
			})

		default:
			return state
	}

}

export default mainReducer