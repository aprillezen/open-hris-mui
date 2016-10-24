import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'
import IconButton from 'material-ui/IconButton'
import EditIco from 'material-ui/svg-icons/editor/mode-edit'
import { tableIcon} from '../../../styles'

class ButtonCell extends Component {
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
export default ButtonCell
