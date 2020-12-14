import React from "react"
import Row from "./Row"
import "./componentStyles/Table.css"

class Table extends React.Component{

    state = {
        canEnter : false, 
        prevHome : this.props.currentHome,
        currentHome : this.props.currentHome,
        movingHome : false,
        prevDest : this.props.currentDest,
        currentDest : this.props.currentDest,
        movingDest : false
    }

    componentDidMount(){

        // const home = document.getElementById(this.state.currentHome); //setting initial home and destination
        // const dest = document.getElementById(this.state.currentDest);

        // home.classList.add("homes")
        // dest.classList.add("dests")
        
    }
    componentDidUpdate() {    

            console.log("inside cdu", this.state.currentHome, this.state.currentDest)
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
                this.props.setHomeInApp(this.state.currentHome)
            }
        }
        else if(this.state.movingDest){  
            if(id !== this.state.currentHome && !event.target.classList.contains("wall")){
                this.setState({prevDest : this.state.currentDest, currentDest : id})
                document.getElementById(this.state.currentDest).classList.add("dests")
                document.getElementById(this.state.prevDest).classList.remove("dests")
                this.props.setDestInApp(this.state.currentDest)
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