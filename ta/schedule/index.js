import React, {Component} from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class index extends Component {

	render(){

		const myEventsList =[]

		return(<div className="row cal">					
					<h3>Schedule</h3>	

					 <BigCalendar
					      events={myEventsList}			
					      startAccessor='start'			
					      endAccessor='end'		      
					    />
				</div>
			)
	}
}


export default index


// <div className="col-sm-2">
// 	<LeftNav/>					
// </div>
// <div className="col-sm-10">
// 	{this.props.children}		
// </div>