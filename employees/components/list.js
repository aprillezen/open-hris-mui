import React, {Component} from 'react'
import {Table, Column, Cell} from 'fixed-data-table'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton';
import EditIco from 'material-ui/svg-icons/editor/mode-edit'
import { tableIcon } from '../../styles'
import moment from 'moment'
import Checkbox from 'material-ui/Checkbox'
import FontIcon from 'material-ui/FontIcon'

const civilStatus = [ "Single","Married","Widowed/Widower","Separated"]
const gender = [ "Male","Female"]

class List extends Component{

	render(){
		const {data} = this.props
		return(
				<Table
					rowsCount={data.length}
			        rowHeight={50}
			        headerHeight={40}
			        width={1500}
			        maxHeight ={800}>					       
			        <Column 
			        	width={35} 
			        	header={<Cell>
			        				 <Checkbox 
			        				 	checkedIcon={<FontIcon className="fa fa-check-square" style={checkedStyle} />} 
			        				 	uncheckedIcon={<FontIcon className="fa fa-square-o" style={uncheckedStyle} />}
			        				 /> 
			        			</Cell>
			        			} 
			        	cell={<CheckCell data={data} field="id"/>} 
			        />
					<Column width={50} header={<Cell>Photo</Cell>} cell={<ImageCell data={data} field="id"/>} />
					<Column width={100} header={<Cell>Employee Id</Cell>} cell={<TextCell data={data} field="employeeId" />} />	  
			        <Column width={130}	header={<Cell>First Name</Cell>} cell={<TextCell data={data} field="fname"/>}/>	   
			        <Column width={130}	header={<Cell>Last Name</Cell>} cell={<TextCell data={data} field="lname"/>}/>	   
			        <Column width={130}	header={<Cell>Middle Name</Cell>} cell={<TextCell data={data} field="mname"/>}/>
			        <Column width={100}	header={<Cell>Birthdate</Cell>} cell={<DateCell data={data} field="birthdate"/>}/>
			        <Column width={90}	header={<Cell>Civil Status</Cell>} align="center" cell={<DropdownCell data={data} arr={civilStatus} field="civilstat"/>}/>
			        <Column width={70}	header={<Cell>Gender</Cell>} align="center" cell={<DropdownCell data={data} arr={gender} field="gender"/>}/>
			        <Column width={50}	header={<Cell>Email</Cell>} flexGrow={1} cell={<TextCell data={data} field="emailadd"/>}/>	   

				</Table>
				)

	}
}

List.propTypes = {
	data: React.PropTypes.array.isRequired
}

export default List

const uncheckedStyle= {
	color: '#acadaf',
	fontSize: 18
}

const checkedStyle= {
	color: '#00b8d4',
	fontSize: 18
}


class CheckCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props    
    return (
      <Cell {...props} >
         <Checkbox checkedIcon={<FontIcon className="fa fa-check-square" style={checkedStyle} />} uncheckedIcon={<FontIcon className="fa fa-square-o" style={uncheckedStyle} />}/>      
      </Cell>
    )
  }
}


class ImageCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props    
    return (
      <Cell {...props}>
        <Avatar size={32}>{data[rowIndex]['lname'].substring(0,1)}</Avatar>
      </Cell>
    )
  }
}

class ButtonCell extends React.Component {
  render() {
    const {rowIndex, data, ...props} = this.props 
    return (
      <Cell {...props}>
      	 <IconButton style={tableIcon.smallIcon}>
         	<EditIco/>
         </IconButton>
      </Cell>
    )
  }
}

class TextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props    
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}

class DateCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props    
    return (
      <Cell {...props}>
      	{ moment(data[rowIndex][field]).format('ll')}        
      </Cell>
    )
  }
}

class DropdownCell extends React.Component {
  render() {
    const {rowIndex, field, data, arr, ...props} = this.props    
    return (
      <Cell {...props}>
      	{arr[data[rowIndex][field]]}
      </Cell>
    )
  }
}