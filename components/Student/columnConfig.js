import RowLink from './rowLink'

export const fakedata =  [
				  {
				    "id": 0,
				    "studentid": "00001",
				    "fullname": "Kaissieh Louella Abion",
				    "gender": "Female",
				    "birthdate": "April 5, 2004",
				    "address": "Magalasang, Imus, Cavite",
				    "email": "kc@yahoo.com",
				    "contactno": '0938374903',
				  },
				  {
				    "id": 1,
				    "studentid": "00002",
				    "fullname": "Aprille Zen Abion",
				    "gender": "Female",
				    "birthdate": "April 4, 2012",
				    "address": "Magalasang, Imus, Cavite",
				    "email": "zen@yahoo.com",
				    "contactno": '0938374903',
				  }
		]




export const cols = [ "id", "studentid", "fullname", "gender", "birthdate", "address", "email"]
		
export const colmetadata = [
					{
						"columnName": "id",
					    "order": 0,
					    "locked": false,
					    "visible": true,
					    "displayName": "",
					    "customComponent": RowLink
					},
					{
						"columnName": "studentid",
					    "order": 1,
					    "locked": false,
					    "visible": true,
					    "displayName": "Student Id"
					},
					{
						"columnName": "fullname",
					    "order": 2,
					    "locked": false,
					    "visible": true,
					    "displayName": "Name"
					},
					{
						"columnName": "gender",
					    "order": 3,
					    "locked": false,
					    "visible": true,
					    "displayName": "Gender"
					},
					{
						"columnName": "gender",
					    "order": 4,
					    "locked": false,
					    "visible": true,
					    "displayName": "Gender"
					},
					{
						"columnName": "birthdate",
					    "order": 5,
					    "locked": false,
					    "visible": true,
					    "displayName": "Birthdate"
					},
					{
						"columnName": "address",
					    "order": 6,
					    "locked": false,
					    "visible": true,
					    "displayName": "Address"
					},
					{
						"columnName": "email",
					    "order": 6,
					    "locked": false,
					    "visible": true,
					    "displayName": "Email"
					}

				]