import React, {useState} from "react"
import "./componentStyles/TitleBar.css"
import Dropdown from "./Dropdown"


const algos = [
    {
        label : "Breadth First Search",
        value : "BFS"
    }, 
    {
        label : "Depth First Search",
        value : "DFS"
    },
    {
        label : "Djikstra's Algorithm",
        value : "DJK"
    }
]
    
function TitleBar ( {onFindClick, onClearWall, onClearBoard} ) {

    const [algo, setAlgo] = useState(algos[0])
       
    return (
        <div className="titleBar">
           <div className="ui label projectTitle">Neighbours</div> 
           <Dropdown currentAlgo={algo} onCurrentAlgoChange={setAlgo} allalgos={algos}/>
            <button className="ui primary button" onClick={() => onFindClick(algo.value) }> Find Path </button>
            {/* <button onClick = {onClearBoard} className="ui primary button clrbrd">Clear Board</button> */}
            <button onClick={onClearWall} className="ui primary button clrbrd">Clear Walls</button>
           </div>
    )
}

export default TitleBar