import React from 'react'
import MemeBuild from './MemeBuild'
import MemeGroup from './MemeGroup'

//things to think about adding:
//  make sure page is looking sleek
//  make sure page is responsive to different screens
//  be able to change font style
//  be able to use lower case 
//  button for copy meme to clip board
//  user draw on meme
//  user upload their own image
//  layer images
//  transform layers

//this is the top lvl of the content section of the page. Should only have two chil components but
//each of those need access to the api fetched here

function MemePage() {
  const [currentImg, setCurrentImg] = React.useState("https://i.imgflip.com/1bgw.jpg")
  const [allImg, setAllImg] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        setAllImg(memes)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const randomNum = Math.floor(Math.random() * allImg.length)
    const randomImg = allImg[randomNum].url
    setCurrentImg(randomImg)
    window.scrollTo({top: 0})
  }

  const handleClick = (e) => {
    setCurrentImg(e.target.src)
    window.scrollTo({top: 0, behavior: 'smooth'})

  }

  return (
    <div className="content"> 
      <MemeBuild currentImg={currentImg} handleSubmit={handleSubmit} />
      <MemeGroup allImg={allImg} handleClick={handleClick} />
    </div>
  )
}

export default MemePage;
