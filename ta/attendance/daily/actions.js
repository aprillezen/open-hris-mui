import * as ACT from './actionTypes'
import moment from 'moment'

// ********************************************************************************
// 
// ********************************************************************************
export function loadList(dateStart, dateEnd){	
	return{
		type: ACT.DAILY_LOAD_LIST,
		isFetching: true,
		isFetchFailed: false,		
		message: '',
		hasError: false,
		dateStart,
		dateEnd

	}
}

export function loadListSuccess(data){
	return{
		type: ACT.DAILY_LOAD_LIST_SUCCESS,
		isFetching:false,
		isFetchFailed: false,	
		message: '',
		hasError: false,		
		data
	}
}

export function loadListFailed(message){
	return{
		type: ACT.DAILY_LOAD_LIST_FAILED,
		isFetching: false,
		isFetchFailed: true,
		hasError: false,
		message
	}
}

export function changeDateStart(dateStart){	
	return{
		type: ACT.DAILY_CHANGE_DATE_START,	
		dateStart
	}
}

export function changeDateEnd(dateEnd){	
	return{
		type: ACT.DAILY_CHANGE_DATE_END,	
		dateEnd
	}
}

export function fetchDailyIO(dateStart, dateEnd){	
	let fakedata =[
					{ "id":1,"transdate": '09/20/206', "transtime":'8:15 AM', "transtype":'IN' },
					{ "id":2,"transdate": '09/20/206', "transtime":'6:15 PM', "transtype":'OUT' }
				  ] 

	return dispatch=>{
		dispatch(loadList(dateStart, dateEnd))
		return setTimeout(()=>{
			dispatch(loadListSuccess(fakedata))	
			//dispatch(loadListFailed("test error"))
		}, 1000)
		// fetch('http://localhost:8081/shift')
		// .then(response=>response.json()
		// 	.then(ret=>({ ret, response }))
		//  ).then(({ ret, response })=>{		 	
		//  	if (parseInt(ret.status)==1){
		// 		dispatch(loadListSuccess(ret.data))	
		//  	}else{
		//  		dispatch(loadListFailed(data.message))
		//  	}		 	
		//  })
		// .catch(error => { 
		// 	dispatch(loadListFailed('Database error'))			
		// })
	}
}



