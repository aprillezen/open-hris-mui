import React, {Component} from 'react'
import WorkingHoursTab from './workingHoursTab'
import TardinessTab from './tardinessTab'
import UndertimeTab from './undertimeTab'

var tabData = [
  { id: 0, name: 'Working Hours', isActive: true },
  { id: 1, name: 'Tardiness', isActive: false },
  { id: 2, name: 'Undertime', isActive: false }
];

class Tabs extends Component{
	render(){
		return(
				<ul className="nav nav-tabs">
					{
						tabData.map(function(tab){
				          return (
				            <Tab key={tab.id} data={tab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(this,tab)} />
				          )
			        }.bind(this))}  
				</ul>
			)
	}
}

class Tab extends Component{
	render(){
		return(
			<li onClick={this.props.handleClick} className={this.props.isActive ? "active" : null}>
	        	<a href="#">{this.props.data.name}</a>
	      	</li>
			)
	}
}

class Content extends Component{
	render(){
		return(
				<div>
					<br/>
			        {
			        	this.props.activeTab.name === 'Working Hours' ? <WorkingHoursTab/> : null
			    	} 
			        {
			        	this.props.activeTab.name === 'Tardiness' ? <TardinessTab/> :null
				    } 
			        {
			        	this.props.activeTab.name === 'Undertime' ? <UndertimeTab/> :null
			       	} 
			      </div>
			)
	}
}

class ContentTabs extends Component{
	constructor(props){
		super(props)
		this.state = {
						activeTab: tabData[0]
					}
	}

	handleClick(tab){
		this.setState({
			activeTab: tab
		})
	}

	render(){
		return(
			<div>
		        <Tabs activeTab={this.state.activeTab} changeTab={this.handleClick.bind(this)} />
		        <Content activeTab={this.state.activeTab} />
		    </div>
			)
	}
}

export default ContentTabs


