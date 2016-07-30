import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILED} from '../actions'

const initialstate = {
	isFetching: false,
	isFailed: false,
	message: '',
	data: {}
}


const batchreducer = (state = initialstate , action)=>{
	switch(action.type){
		case LOAD_LIST:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed:action.isFailed
			})

		case LOAD_LIST_SUCCESS:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,
				data: action.data
			})
		case LOAD_LIST_FAILED:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,			
				message: action.message
			})
		default:
			return state
	}

}

export default batchreducer