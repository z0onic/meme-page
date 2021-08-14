import React from 'react'
import ReinventedColorWheel from 'reinvented-color-wheel/react'
import "reinvented-color-wheel/css/reinvented-color-wheel.min.css"

function ColorPicker(props) {
    const hex = props.checkedColor ? props.stroke : props.fill 
    // const hex = props.hex
    return (
        <div className="color-picker-container">
            <ReinventedColorWheel
                hex={hex}
                wheelDiameter={200}
                wheelThickness={20}
                handleDiameter={16}
                wheelReflectsSaturation={false}
                // eslint-disable-next-line eqeqeq
                onChange={({hex}) => props.setControls(prev => prev.map((d, i) => props.name == i ? !props.checkedColor ? {...d, fill: hex} : {...d, stroke: hex} : d))}
            />
            <div className="stroke-switch">
                <label>Stroke Active</label>
                <input 
                    type="checkbox" 
                    value="stroke-on" 
                    checked={props.checkedStroke} 
                    // eslint-disable-next-line eqeqeq
                    onChange={() => props.setControls(prev => prev.map((d, i) => props.name == i ? {...d, checkedStroke: !props.checkedStroke} : d))}></input>
                <label>Stroke Color</label>
                <input type="checkbox" className="stroke-check" value="stroke-color" checked={props.checkedColor} onChange={() => props.setCheckedColor(!props.checkedColor)}></input>
            </div>
        </div>
    )
}

export default ColorPicker