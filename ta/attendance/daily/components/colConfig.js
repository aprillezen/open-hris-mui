import RowLink from './RowLink'
		
export const cols = [ "transdate","transtime","transtype"]

// table [department] = id, description		

export const colmetadata = [
					{
						"columnName": "id",
					    "order": 1,
					    "locked": false,
					    "visible": true,
					    "displayName": "",					    
					},
					{
						"columnName": "transdate",
					    "order": 2,
					    "locked": false,
					    "visible": true,
					    "displayName": "Date",					    
					},
					{
						"columnName": "transtime",
					    "order": 3,
					    "locked": false,
					    "visible": true,
					    "displayName": "Time",					    
					}
					,
					{
						"columnName": "transtype",
					    "order": 4,
					    "locked": false,
					    "visible": true,
					    "displayName": "Type",					    
					}
				]