import React, {Component,PropTypes} from 'react'
import {Cell} from 'fixed-data-table'
import FontIcon from 'material-ui/FontIcon'
import {checkedStyle, uncheckedStyle} from '../../../styles'
import Checkbox from 'material-ui/Checkbox'
import { connect } from 'react-redux'
import { listCheckedChanged } from '../../actions'

class CheckCell extends Component {
  constructor(props){
    super(props)
    this.onselect = this.onselect.bind(this)
  }

  checkedChanged(e, value){    
    this.onselect(value)
  }
  
  onselect(value){
   // console.log(this.props.rowIndex)
    this.props.dispatch(listCheckedChanged(this.props.rowIndex, value))
  }


  render() {
    const {rowIndex, field, data} = this.props   
    const selected = data[rowIndex][field]==1?true:false
    return (
            <div className="fixed-dt-checkbox">
               <Checkbox checked={selected} onCheck={this.checkedChanged.bind(this)} checkedIcon={<FontIcon className="fa fa-check-square" style={checkedStyle} />} uncheckedIcon={<FontIcon className="fa fa-square-o" style={uncheckedStyle} />}/>      
            </div>
          )
  }
}

CheckCell  = connect()(CheckCell)
export default CheckCell


