import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import Account from 'material-ui/svg-icons/action/account-circle'
import Help from 'material-ui/svg-icons/action/help'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Notif from 'material-ui/svg-icons/social/notifications'
import People from 'material-ui/svg-icons/social/people'
import LeaveIco from 'material-ui/svg-icons/maps/local-mall'
import TaIco from 'material-ui/svg-icons/av/av-timer'
import PayIco from 'material-ui/svg-icons/editor/monetization-on'
import { white } from 'material-ui/styles/colors'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import {List, ListItem} from 'material-ui/List'

const btnStyles = {
  smallIcon: {
    width: 22,
    height: 22,
  },
  small: {
    width: 40,
    height: 40,
    padding: 10    
  },
}

const iconContainerStyle = {
	marginTop:2,
	marginRight: 16
}

const rightIcons = <div style={iconContainerStyle}>	
						<IconButton tooltip="Notifications" iconStyle={btnStyles.smallIcon} style={btnStyles.small}>
							<Notif color={white}/>
						</IconButton>	
						<IconButton tooltip="Help" iconStyle={btnStyles.smallIcon} style={btnStyles.small}>
							<Help color={white}/>
						</IconButton>											
						<IconMenu
					      iconButtonElement={<IconButton iconStyle={btnStyles.smallIcon} style={btnStyles.small}><MoreVertIcon color={white} /></IconButton>}
					      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
					      targetOrigin={{horizontal: 'right', vertical: 'bottom'}} >
					      	  <MenuItem primaryText="Profile" href="/settings" />
					      	  <MenuItem primaryText="Settings" href="/settings" />
						      <MenuItem primaryText="Organization" />
						      <MenuItem primaryText="Security" />
					    </IconMenu>

						<IconButton tooltip="Account" iconStyle={btnStyles.smallIcon} style={btnStyles.small}>
							<Account color={white}/>
						</IconButton>						
				  </div>



class Appnav extends React.Component{
	constructor(props) {
    	super(props)
    	this.state = {open: false};
	}

	handleLeftIconClick(e){
		this.setState({open: !this.state.open})
	}

	render(){
		return(
			<div>
				<AppBar 
			    	title="" 
			    	onLeftIconButtonTouchTap={this.handleLeftIconClick.bind(this)} 
			    	showMenuIconButton={true}
					iconElementRight = {rightIcons}
			    	/>
				<div>    			
					{ this.props.children }
				</div>				
				<Drawer 
					docked={false}					
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})} 
					width={300}>

					<AppBar 
				    	title="Open Hris"
				    	showMenuIconButton={false} />		

				    <MenuItem primaryText="Dashboard"/>			
				    <List>
				    	<Subheader>MAIN</Subheader>	
				    	<ListItem primaryText="Employees" href="/employees" leftIcon={ <People/>}/>
				        <ListItem primaryText="Leave" href="/leave" leftIcon={ <LeaveIco/>}/>
				        <ListItem primaryText="Time and Attendance" href="/ta" leftIcon={ <TaIco/>}/>
				        <ListItem primaryText="Manage Payroll" href="/py" leftIcon={ <PayIco/>}/>
				    </List>			                			        		       			        
			        <Divider/>
		        </Drawer>
			 </div>

		)
	}

}

export default Appnav;