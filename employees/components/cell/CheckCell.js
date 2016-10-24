import React, {Component,PropTypes} from 'react'
import {Cell} from 'fixed-data-table'
import FontIcon from 'material-ui/FontIcon'
import {checkedStyle, uncheckedStyle} from '../../../styles'
import Checkbox from 'material-ui/Checkbox'

class CheckCell extends Component {
  constructor(props){
    super(props)
    this.onselect = this.onselect.bind(this)
  }

  checkedChanged(e, value){    
    this.onselect(value)
  }
  
  onselect(value){
    console.log(this.props.rowIndex)
  }


  render() {
    const {rowIndex, field, data, check, ...props} = this.props    
    var selected=false
    if (data[rowIndex][field]==1) selected=true
    return (
            <Cell {...props} >
               <Checkbox onCheck={this.checkedChanged.bind(this)} checkedIcon={<FontIcon className="fa fa-check-square" style={checkedStyle} />} uncheckedIcon={<FontIcon className="fa fa-square-o" style={uncheckedStyle} />}/>      
            </Cell>
          )
  }
}

CheckCell.propTypes = {
  check: PropTypes.func 
}

export default CheckCell


