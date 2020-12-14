import React, {useState, useEffect, useRef} from "react"
import "./componentStyles/TitleBar.css"

function Dropdown({currentAlgo, onCurrentAlgoChange, allalgos}) {

    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect( () =>{

        document.body.addEventListener('click', function (event) {
            if(ref.current.contains(event.target))
            return

            setOpen(false)
        })
    }, [])

    const renderedOptions = allalgos.map( (algo) => {

        if(currentAlgo.value === algo.value) 
        return null

        return (
            <div key={algo.value} 
                onClick={() => { onCurrentAlgoChange(algo) }}
                className="item" style={{fontFamily:" Verdana, Geneva, Tahoma, sans-serif"}}>
                {algo.label}
            </div>
        )
    })
    return (
                <div onClick={() => {setOpen(!open)}} ref={ref} 
                className={`ui selection dropdown ${open ? 'visible active' : ''} `} style={{marginLeft:"10px", marginRight:"10px"}}>
                        <i className="dropdown icon"></i>
                        <div className="text" style={{fontFamily:" Verdana, Geneva, Tahoma, sans-serif"}}>{currentAlgo.label}</div>
                    <div className={`menu visible ${open ? 'transition' : ''} `}>{renderedOptions}</div>
                </div>
    )  
}

export default Dropdown;