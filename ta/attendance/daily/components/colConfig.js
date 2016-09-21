import RowLink from './RowLink'
import ColumnLink from './columnLink'
		
export const cols = [ "transdate","transtime","transtype"]
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


export const empcols = [ "employeeId","fullname", "id" ]
export const empcolmetadata = [
					{
						"columnName": "id",
					    "order": 3,
					    "locked": false,
					    "visible": true,
					    "displayName": "",	
					    "customComponent": ColumnLink				    
					},
					{
						"columnName": "employeeId",
					    "order": 1,
					    "locked": false,
					    "visible": true,
					    "displayName": "Employee No",					    
					},
					{
						"columnName": "fullname",
					    "order": 2,
					    "locked": false,
					    "visible": true,
					    "displayName": "Employee Name",					    
					}					
				]