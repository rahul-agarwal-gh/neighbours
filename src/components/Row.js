import React from "react"
import Cell from "./Cell"
import "./componentStyles/Row.css"

class Row extends React.Component{

    render(){
        const row = []
        for(let num=1; num <= 50; num++){
            row.push(<Cell 
                        onMouseDown={this.props.onMouseDown}
                        onMouseEnter={this.props.onMouseEnter}
                        onMouseUp = {this.props.onMouseUp}
                        key={num} rowID={this.props.rowID} colID={num}
                        
                        />) 
        }
        return (
            <tr>
                {row}
            </tr>
        )
    }
}

export default Row;