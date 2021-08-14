import React from 'react'

//this is the group of top 100 memes from img filp that are availbale to use. If you click it will populate the image part of MemeBuild

function Images(props) {
    return (
        <img 
            className={props.size} 
            src={props.url} 
            alt={props.name}
            onClick={props.handleClick}
        >
        </img>
    )
}

function MemeGroup(props) {

    const images = props.allImg.map((data) => {
        return (
            <Images 
                url={data.url} 
                key={data.id} 
                name={data.name}
                handleClick={props.handleClick}
            />
        )
    })

    return (
        <div className="meme-group">
            {images}
        </div>
    )
}

export default MemeGroup