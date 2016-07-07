import React from 'react'
import ajax from 'superagent'

class Dashboard extends React.Component{
	constructor(){
		super()
		this.state = { data: [] }
	}
	componentWillMount(){
		// ajax.get("/api/users")
		// 	.end((error, response)=>{
		// 		if (!error && response){
		// 			this.setState({ data: response.body })
		// 			console.log(response.body);
		// 		}else{
		// 			console.log("Error on api")
		// 		}
		// 	})

	}
	render(){
		var users = this.state.data.map(function(item){
			return (<div key={item.id}> {item.fullname} </div>)
		})

		return(
			<div>
				{users} 


			</div>

		)
	}

}

export default Dashboard