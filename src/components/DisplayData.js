import React, { Component } from 'react'
import DisplayItem from './DisplayItem'


class DisplayData extends Component {
    render() {
        return this.props.zipData.map((zip) => (
                <DisplayItem 
                key = {zip.RecordNumber}
                zipData = {zip} 
                />
        ))
    }
}



export default DisplayData;