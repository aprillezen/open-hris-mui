import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'

class TextCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props    
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}

export default TextCell
