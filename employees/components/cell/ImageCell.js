import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'
import Avatar from 'material-ui/Avatar'

class ImageCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props    
    return (
      <Cell {...props}>
        <Avatar size={32}>{data[rowIndex]['lname'].substring(0,1)}</Avatar>
      </Cell>
    )
  }
}

export default ImageCell