import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'

class DropdownCell extends Component {
  render() {
    const {rowIndex, field, data, arr, ...props} = this.props    
    return (
      <Cell {...props}>
      	{arr[data[rowIndex][field]]}
      </Cell>
    )
  }
}
export default DropdownCell