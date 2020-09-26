import React from "react"
import "./componentStyles/TitleBar.css"

function TitleBar () {

    return (
        <div className="titleBar">
           <div className="ui label projectTitle">Neighbours</div> 
            <select className="ui dropdown">
                <option className="dropdownOption" value="" >Select Algorithm</option>
                <option className="dropdownOption" value="BFS">Breadth First Search</option>
                <option className="dropdownOption" value="DFS">Depth First Search</option>
            </select>
            <button className="ui primary button"> Find Path </button>
            <button className="ui primary button clrbrd">Clear Board</button>
            <button className="ui primary button clrbrd">Clear Walls</button>
           </div>
    )
}

export default TitleBar