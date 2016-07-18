export const LOAD_BATCH="INIT_BATCH";
export const LOAD_FAILED="LOAD_FAILED";
export const LOAD_SUCCESS="LOAD_SUCCESS";

export function loadBatch(batches){
	return{
		type: LOAD_BATCH,
		isFetching: true,
		isFailed: false
	}
}

export function loadSuccess(batches){
	return{
		type: LOAD_BATCH,
		isFetching: true,
		isFailed: false,
		batches
	}
}

export function loadFailed(batches){
	return{
		type: LOAD_BATCH,
		isFetching: true,
		isFailed: false,
		batches
	}
}


//https://www.youtube.com/watch?v=DVEsNYS1Cgo