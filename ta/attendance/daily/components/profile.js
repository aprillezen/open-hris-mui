import React, {Component} from 'react'

class Profile extends Component {

	render(){

		if (_.isEmpty(this.props.data)){		
			return <div></div>
		}else{
			return(
				<div className="small_profile_tbl">
					<table>
						<tbody>
							<tr>
								<td><img className="img-rounded" src="/images/rsz_no-image.png"/></td>
								<td>
									<h3>{this.props.data.fullname}</h3>
									<p>{this.props.data.jobtitle}</p>
								</td>
							</tr>					
						</tbody>
					</table>	
				</div>	 				 		
			)
		}		
	}
}

Profile.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Profile