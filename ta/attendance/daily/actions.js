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

export function loadSearchEmployee(){	
	return{
		type: ACT.DAILY_LOAD_SEARCH_EMPLOYEE,
		isSearchDialogOpen: true,		
		isFetchingSearch: true,
		isFetchSearchFailed: false,
		searchDialogMessage:''
	}
}

export function loadSearchEmployeeSuccess(data){	
	return{
		type: ACT.DAILY_LOAD_SEARCH_EMPLOYEE_SUCCESS,		
		isFetchingSearch: false,
		isFetchSearchFailed: false,
		searchDialogMessage:'',
		data
	}
}

export function loadSearchEmployeeFailed(message){	
	return{
		type: ACT.DAILY_LOAD_SEARCH_EMPLOYEE_FAILED,		
		isFetchingSearch: false,
		isFetchSearchFailed: true,
		message
	}
}

export function closeSearchEmployee(message){	
	return{
		type: ACT.DAILY_SEARCH_EMPLOYEE_CLOSED,
		isSearchDialogOpen: false,		
		isFetchingSearch: false,
		isFetchSearchFailed: false		
	}
}

export function selectSearchEmployee(id){	
	return{
		type: ACT.DAILY_SEARCH_EMPLOYEE_SELECT,
		isSearchDialogOpen: false,
		id	
	}
}
export function fetchEmployees(){	
	let fakedata =[
					{ "id":0, "employeeId":'00001', "fullname": 'Dondon Abion' },
					{ "id":1, "employeeId":'00002', "fullname": 'Aprille Abion' }
				  ] 

	return dispatch=>{		
		return setTimeout(()=>{
			dispatch(loadSearchEmployeeSuccess(fakedata))	
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
