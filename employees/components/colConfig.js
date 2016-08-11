import RowLink from './RowLink'
		
export const cols = [ "id"]

export const fakedata =  [
				  {
				    "id": 0,
				    "employeeid": "00001",
				    "fullname": "Kaissieh Louella Abion"				    
				  },
				  {
				     "id": 1,
				     "employeeid": "00002",
				     "fullname": "Aprille Abion"
				  }
		]


export const colmetadata = [
					{
						"columnName": "id",
					    "order": 0,
					    "locked": false,
					    "visible": true,
					    "displayName": "",
					    "customComponent": RowLink
					}
				]