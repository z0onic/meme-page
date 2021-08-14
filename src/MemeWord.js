import React from 'react'

function MemeWord(props) {
    const [pos, setPos] = React.useState({x: 0, y: 0})
    const [mouseDown, setMouseDown] = React.useState(false)

    const onMouseMove = e => {
        e.preventDefault()
        if(mouseDown) {    
            setPos({
                x: pos.x + e.movementX,
                y: pos.y + e.movementY
            })
        }
    }

    const onClick = () => {
        if(props.active) {
            setMouseDown(!mouseDown)
        }
    }
    
    return (
        <h2  
            style={
                {
                    color : props.fill,
                    fontSize: props.fsize,
                    WebkitTextStrokeColor: props.checkedStroke ? props.stroke : 'rgba(0, 0, 0, 0)',
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    border: props.active ? '2px dashed white' : 'none'
                }
            }
            onClick={onClick}
            onMouseMove={onMouseMove }
            onMouseLeave={ () => setMouseDown(false) }
        >
            {props.value}
        </h2>
    )
}

export default MemeWord