import React from "react"
import TitleBar from "./TitleBar"
import Legends from "./LegendBar"
import Table from "./Table"
import BFS from "../algorithms/BFS"
import DFS from "../algorithms/DFS"
import { ResetBoard }from "../algorithms/ResetBoard"
import  "../components/componentStyles/Table.css"

class App extends React.Component{

    state = {
        currentHome : '10-17',
        currentDest : '10-33',
    }

    setHome = (home) => {
        this.setState( { currentHome: home} )
    }

    setDest = (dest) => {
        this.setState( {currentDest : dest} )
    }   

    componentDidMount() {
        const home = document.getElementById(this.state.currentHome); //setting initial home and destination
        const dest = document.getElementById(this.state.currentDest);

        home.classList.add("homes")
        dest.classList.add("dests")
    }
    componentDidUpdate(){
        const home = document.getElementById(this.state.currentHome); //setting initial home and destination
        const dest = document.getElementById(this.state.currentDest);

        home.classList.add("homes")
        dest.classList.add("dests")
    }
    handleFindClick = (algo) => {

        if(algo === "BFS"){
            BFS(this.state.currentHome, this.state.currentDest);
        }
        else if(algo === "DFS"){
            DFS(this.state.currentHome, this.state.currentDest);
        }
        
    }

    handleClearWall = () => {
       
        let wallCells = document.getElementsByClassName("wall")
        console.log(wallCells.length, typeof(wallCells))
    
        for(let i = 0; i < wallCells.length; i++){
            document.getElementById(wallCells[i].id).classList.remove("wall")
            //wallCells[i].classList.remove("wall")
        }
    }

    handleClearBoard = async () => {
        const home = this.state.currentHome
        const dest = this.state.currentDest    
        ResetBoard(home, dest)
        this.setState({ currentHome: '10-17', currentDest : '10-33' } )
    }

    render(){

        return (
            <div>
                <TitleBar  onFindClick={this.handleFindClick} onClearWall={this.handleClearWall} onClearBoard = {this.handleClearBoard} /> 
                <Legends onClick={this.handleFindClick}/>    
                <Table currentHome={this.state.currentHome} currentDest={this.state.currentDest}
                    setHomeInApp={this.setHome} setDestInApp={this.setDest} onFindClick={this.handleFindClick} 
                    onPathChangeAfterFindPath={this.handlePathChangeAfterFindPath} />
            </div>
        )
    }
}

export default App

