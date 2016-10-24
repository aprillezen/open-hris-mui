import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'
import moment from 'moment'

class DateCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props    
    return (
      <Cell {...props}>
      	{ moment(data[rowIndex][field]).format('ll')}        
      </Cell>
    )
  }
}

export default DateCell