import React from "react"
import TitleBar from "./TitleBar"
import Legends from "./LegendBar"
import Table from "./Table"
import BFS from "../algorithms/BFS"

class App extends React.Component{

    state = {
        currentHome : '10-17',
        currentDest : '10-33'
    }

    handleFindClick = (home, dest) => {

        BFS(home, dest);
    }
    render(){

        return (
            <div>
                <TitleBar /> 
                <Legends onClick={this.handleFindClick}/>    
                <Table onFindClick={this.handleFindClick} />
            </div>
        )
    }
}

export default App

