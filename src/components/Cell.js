import React from "react"
import "./componentStyles/Cell.css"

class Cell extends React.Component{

    state = {canEnter : false}

    render(){
       
        const cellID = this.props.rowID.toString() + "-" + this.props.colID.toString() 
        
        return (
        <td id={cellID} 
            onMouseDown={this.props.onMouseDown} 
            onMouseEnter={this.props.onMouseEnter} 
            onMouseUp={this.props.onMouseUp}>
        </td>            
        )
    }

}

export default Cell;