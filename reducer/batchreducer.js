import { LOAD_BATCH, LOAD_FAILED, LOAD_SUCCESS} from '../actions//BatchActions'

const initialstate = {
	isFetching: false,
	isFailed: false,
	message: '',
	batches: {}
}


const batchreducer = (state = initialstate , action)=>{
	switch(action.type){
		case LOAD_BATCH:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed:action.isFailed
			})

		case LOAD_SUCCESS:
			return Object.assign({}, state,{
				isFetching: action.isFetching,
				isFailed: action.isFailed,
				batches: action.batches
			})
		case LOAD_FAILED:
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