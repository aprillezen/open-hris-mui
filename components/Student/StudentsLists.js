import React from 'react'
import Grid from 'griddle-react'
import { cols, colmetadata, fakedata} from './columnConfig'

class StudentsLists extends React.Component{

	render(){

		return <Grid results={fakedata} tableClassName="table" columnMetadata={colmetadata} columns={cols}/>
	}
}

export default StudentsLists