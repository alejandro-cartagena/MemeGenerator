import React, { useEffect, useState } from 'react'

function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  }) 

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        setAllMemes(data.data.memes)
      })
  }, [])

  function handleChange(event) {
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value
      }
    })
  }

  function getRandomMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const memeUrl = allMemes[randomNum].url

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: memeUrl
      }
    })
  }


  return (
    <div className="container">
      <main>
        <div className="form">
            <div className="input-text-container">
                <input 
                    className="input-text-box" 
                    placeholder="Top text"
                    type="text" 
                    name="topText" 
                    id="topText"
                    onChange={handleChange} />
                <input 
                    className="input-text-box" 
                    placeholder="Bottom text"
                    type="text" 
                    name="bottomText" 
                    id="bottomText" 
                    onChange={handleChange}/>
            </div>
            <button onClick={getRandomMemeImage} className="generate-meme-btn">Get new meme image 🖼</button>
        </div>
        <div className="meme">
          <img className="meme--image" src={meme.randomImage} alt="" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </div>
  )
}

export default Form