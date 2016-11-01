import React, {Component} from 'react'
import {Table, Column, Cell} from 'fixed-data-table'
import {checkedStyle, uncheckedStyle} from '../../styles'
import Checkbox from 'material-ui/Checkbox'
import FontIcon from 'material-ui/FontIcon'
import { connect } from 'react-redux'
import ButtonCell from './cell/ButtonCell'
import CheckCell from './cell/CheckCell'
import DateCell from './cell/DateCell'
import DropdownCell from './cell/DropdownCell'
import TextCell from './cell/TextCell'
import ImageCell from './cell/ImageCell'
import ColumnCheckCell from './cell/ColumnCheckCell'

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
			        				 <ColumnCheckCell/>
			        			</Cell>
			        			} 
			        	cell={<CheckCell data={data} field="selected"/>} 
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

