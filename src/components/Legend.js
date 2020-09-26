import React from "react"
import "./componentStyles/Legend.css"

class Legend extends React.Component{

    render(){
        return (
            // <div onClick= {this.props.onClick} className="ui label">
            //     <div className="hidden content">{this.props.text}</div>
            //     <div className="visible content"><i className={this.props.icon}></i></div>
            // </div>
            <div className="ui label">
            <i className = {this.props.icon}></i>{this.props.text}
          </div>
        )
    }
}

export default Legend