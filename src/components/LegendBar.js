import React from "react"
import Legend from "./Legend"

class Legends extends React.Component{

    render(){
        return (
            <div style={{margin : "5px 0px", width : "100%", padding : "1%", backgroundColor : "#e0e1e2"}}>
                
                <Legend  text="Home" icon="home icon" onClick={null}/>
                <Legend text="Target" icon="map marker icon" onClick={null} />    
            </div>
        )
    }
}

export default Legends