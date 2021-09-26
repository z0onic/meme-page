import React from 'react'
import MemeWordControl from './MemeWordControl'
import MemeWord from './MemeWord'
import domtoimage from 'dom-to-image'

//each MemeWord will inherit text content and color from a MemeWordController
//This MemeBuild function will contain all the state for any component associated with users making a meme

function MemeBuild(props) {
    const [controls, setControls] = React.useState([
        {
            value: 'text',
            fill: '#FFFFFF',
            stroke: '#000000',
            fsize: "35px",
            activeMove: false,
            checkedStroke: true
        }
    ])
    const [controlCount, setControlCount] = React.useState(2)

    React.useEffect(() => {
        window.addEventListener('click', e => {})
    }, [])

    React.useEffect( () => {
        const defaultWord = {
            value: 'text',
            fill: '#FFFFFF',
            stroke: '#000000',
            fsize: "35px",
            activeMove: 'false',
            checkedStroke: true
        }
        setControls(prev => controlCount >= prev.length ? prev.concat(defaultWord) : prev.slice(0, -1))
    }, [controlCount])

    const handleChange = e => {
        let {name, value} = e.target
        setControls(prev => {
            // eslint-disable-next-line eqeqeq
            return prev.map((d, i) => i == name ? {...d, value: value} : d)
        })
    }

    const handleIncrease = e => {
        e.preventDefault()
        setControlCount(prev => prev + 1)
    }

    const handleDecrease = e => {
        e.preventDefault()
        setControlCount(prev => prev > 0 ? prev - 1 : 0)
    }

    const handleSave = e => {
        e.preventDefault()
        domtoimage.toJpeg(document.querySelector('.meme'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a')
                link.download = 'meme.jpeg'
                link.href = dataUrl
                link.click()
        })
        window.scrollTo({top: 0})
    }

    const controlGroup = controls.map((data, i) => {
        return (
            <MemeWordControl 
                key={i}
                name={i}
                value={data.value}
                fill={data.fill}
                stroke={data.stroke}
                fsize={data.fsize}
                activeMove={data.activeMove}
                checkedStroke={data.checkedStroke}
                setControls={setControls}
                handleChange={handleChange}
            />
        )
    })

    const wordGroup = controls.map((data) => {
        return (
            <MemeWord 
                key={controls.indexOf(data)}
                name={controls.indexOf(data)}
                value={data.value}
                fill={data.fill}
                stroke={data.stroke}
                fsize={data.fsize}
                active={data.active}
                checkedStroke={data.checkedStroke}
            />
        )
    })

    return (
        <div id="meme-builder">
            <div className="meme">
                <img className="img" src={props.currentImg} alt="" />
                <div className="words">
                    {wordGroup}
                </div>
            </div>
            <div className="image-buttons">
                <button onClick={props.handleSubmit}>Random</button>
                <button onClick={handleSave}>Save</button>
            </div>
            <form className="meme-form">
                {controlGroup}
            </form>
            <div className="up-down-container">
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>
        </div>
    )
}

export default MemeBuild