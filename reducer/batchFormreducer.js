import { LOAD_BATCH_FORM, SAVE_BATCH_FORM, SAVE_FAILED_BATCH_FORM,SAVE_SUCCESS_BATCH_FORM} from '../actions//BatchActions'

const initialstate = {
	isSaving: false,
	hasError: false,
	message: '',
	batch: {}
}

const batchFormreducer = (state = initialstate , action)=>{
	switch(action.type){
		case LOAD_BATCH_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving				
			})

		case SAVE_BATCH_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				batch: action.batch
			})
		case SAVE_FAILED_BATCH_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				message: action.message
			})
		case SAVE_SUCCESS_BATCH_FORM:
			return Object.assign({}, state,{
				isSaving: action.isSaving,
				hasError: action.hasError,
				batch: action.batch
			})
		default:
			return state
	}

}

export default batchFormreducer