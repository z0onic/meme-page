import React from 'react'
import cross from "./arrow-cross.svg"

//this will be a button that on pressing will allow the user to adjust the position of the MemeWord corresponding to the MemeWordController

function Transform(props) {
    return (
        <div className="transformer">
            <img 
                src={cross} 
                alt="arrow-cross" 
                className="arrow-cross" 
                // eslint-disable-next-line eqeqeq
                onClick={() => props.setControls(prev => prev.map((d, i) => props.name == i ? {...d, active: d.active ? false : true} : d))}
            >
            </img>
        </div>
    )
}

export default Transform