import React from "react"
import Row from "./Row"
import "./componentStyles/Table.css"


class Table extends React.Component{

    state = {
        canEnter : false, 
        prevHome : '10-17',
        currentHome : '10-17',
        movingHome : false,
        prevDest : '10-33',
        currentDest : '10-33',
        movingDest : false
    }

    componentDidMount(){

        const home = document.getElementById("10-17"); //setting initial home and destination
        const dest = document.getElementById('10-33');

        home.classList.add("homes")
        dest.classList.add("dests")
    }

    handleMouseDown = (event) => {

        const eventTarget = event.target
        if(eventTarget.classList.contains("homes")){ //if we have mousedown on home
             this.setState({movingHome : true})
        }else if(eventTarget.classList.contains("dests")){ //if we have mousedown on dest
            this.setState({movingDest : true})
        }
        else{
            event.target.classList.add("wall")
        }
        this.setState({canEnter : true})
    }

    handleMouseEnter = (event) => {
        
        const id = event.target.id
        if(this.state.movingHome){  
            //if mouse was entered on a cell which is not already is marked as destination or which is not a wall
            if(id !== this.state.currentDest && !event.target.classList.contains("wall")){ 
                this.setState({prevHome : this.state.currentHome, currentHome : id})
                document.getElementById(this.state.currentHome).classList.add("homes")
                document.getElementById(this.state.prevHome).classList.remove("homes")
            }
        }
        else if(this.state.movingDest){  
            if(id !== this.state.currentHome && !event.target.classList.contains("wall")){
                this.setState({prevDest : this.state.currentDest, currentDest : id})
                document.getElementById(this.state.currentDest).classList.add("dests")
                document.getElementById(this.state.prevDest).classList.remove("dests")
            }
        }
        else{
            if(id !== this.state.currentDest && id !== this.state.currentHome){
                event.target.classList.add("wall")
            }
        }
    }

    handleMouseUp = (event) => {
        if(this.state.movingHome){
            this.setState({movingHome : false})
        }
        else if(this.state.movingDest){
            this.setState({movingDest : false})
        }
        // else{
        //     event.target.classList.add("wall")
        // }
        this.setState({canEnter : false})
    }

    render(){
        const table = []
        const canEnter = this.state.canEnter
        for(let num=1; num<=20; num++){
            table.push(<Row 
                            onMouseDown = {this.handleMouseDown} 
                            onMouseUp = {this.handleMouseUp}
                            onMouseEnter={canEnter ? this.handleMouseEnter : undefined}
                            key={num} rowID={num}
                        /> )
        }
        return (
            <div>
            <button onClick={() => this.props.onFindClick(this.state.currentHome, this.state.currentDest)} >Tedede</button>
            <table>
                <tbody>
                    {table}
                </tbody>
            </table>
            </div>
           
        )
    }
}
export default Table