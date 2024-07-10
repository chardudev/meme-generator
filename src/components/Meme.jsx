import memesData from "../../memesData.js"
import React from 'react';

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: ""
	})

	const [allMemeImages, setAllMemeImages] = React.useState(memesData)

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		const url = memesArray[randomNumber].url
		setMeme(prevMeme => {
			return {
				...prevMeme,
				randomImage: url
			}
		})
	}

	function handleChange(event) {
		const { name, value } = event.target
		setMeme(prevMeme => {
			return {
				...prevMeme,
				[name]: value
			}
		})
	}

	return (
		<main>
			<div className="form">
				<div>
					<label>Top Text:
						<input
							className="form-input"
							type="text"
							placeholder="Shut up"
							name="topText"
							value={meme.topText}
							onChange={handleChange}
						>
						</input>
					</label>
				</div>
				<div>
					<label>Bottom Text:
						<input
							className="form-input"
							type="text"
							placeholder="Take my money"
							name="bottomText"
							value={meme.bottomText}
							onChange={handleChange}>
						</input>
					</label>
				</div>
				<button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} className="meme-image" />
				<h2 className="meme-text top">{meme.topText}</h2>
				<h2 className="meme-text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	)
}