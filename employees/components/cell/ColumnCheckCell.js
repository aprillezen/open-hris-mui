import React, {Component,PropTypes} from 'react'
import {Cell} from 'fixed-data-table'
import FontIcon from 'material-ui/FontIcon'
import {checkedStyle, uncheckedStyle} from '../../../styles'
import Checkbox from 'material-ui/Checkbox'
import { connect } from 'react-redux'
import { listCheckedUnCheckedAll } from '../../actions'

class ColumnCheckCell extends Component {
  constructor(props){
    super(props)
    this.onselect = this.onselect.bind(this)    
  }

  checkedChanged(e, value){    
    this.onselect(value)    
  }
  
  onselect(value){   
   this.props.dispatch(listCheckedUnCheckedAll(value))   
  }


  render() {       
    return (
            <div className="column-fixed-dt-checkbox">
               <Checkbox onCheck={this.checkedChanged.bind(this)} checkedIcon={<FontIcon className="fa fa-check-square" style={checkedStyle} />} uncheckedIcon={<FontIcon className="fa fa-square-o" style={uncheckedStyle} />}/>      
            </div>
          )
  }
}

ColumnCheckCell  = connect()(ColumnCheckCell)
export default ColumnCheckCell


