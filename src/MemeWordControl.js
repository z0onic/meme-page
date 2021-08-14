import React from 'react'
import ColorPicker from './ColorPicker'
import Transform from './Transform'

function MemeWordControl(props) {
    const [colorPickActive, setColorPickActive] = React.useState(false)
    const [checkedColor, setCheckedColor] = React.useState(false)

    // React.useEffect(() => {
    //     window.addEventListener('click', clickEvent)
    //     return () => window.removeEventListener('click', clickEvent)
    // }, [])

    const handleClick = e => {
        setColorPickActive(prev => !prev)
    }
    
    // const clickEvent = e => {
    //     let colorSwitch = document.querySelector('.color-button')
    //     if(!colorSwitch.contains(e.target)) {
    //         setColorPickActive(false)
    //     }
    // }

    const handleFontChange = e => {
        const {value} = e.target
        props.setControls(prev => {
            // eslint-disable-next-line eqeqeq
           return prev.map((d, i) => i == props.name ? value <= 100 ? {...d, fsize: `${value}px`} : d : d)
        })
    }

    return (
        <div className="meme-word-control">
            <input
                className="meme-input"
                name={props.name}
                type="text"
                value={props.value}
                onChange={props.handleChange}
            />
            {/* <label htmlFor="font-size">Font</label> */}
            <input type="number" class="font-size" min="25" max="100" value={props.fsize.replace("px", "")} onChange={handleFontChange}/>
            <div className="controls">
                <div 
                    className="color-button"
                    name={props.name}
                    onClick={handleClick}
                    style={{background: props.fill, borderColor: props.stroke}}
                ></div>
                    {colorPickActive === true ? <ColorPicker 
                                            name={props.name}
                                            fill={props.fill}
                                            stroke={props.stroke}
                                            setControls={props.setControls} 
                                            checkedColor={checkedColor}
                                            setCheckedColor={setCheckedColor}
                                            checkedStroke={props.checkedStroke}
                                        /> : null}
                <Transform 
                    name={props.name}
                    setControls={props.setControls}
                />
            </div>
        </div>
    )
}

export default MemeWordControl