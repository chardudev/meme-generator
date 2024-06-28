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

	return (
		<main>
			<div className="form">
				<div>
					<label>Top Text:
						<input
							className="form-input"
							type="text"
							placeholder="Shut up">
						</input>
					</label>
				</div>
				<div>
					<label>Bottom Text:
						<input
							className="form-input"
							type="text"
							placeholder="Take my money">
						</input>
					</label>
				</div>
				<button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} className="meme-image" />
				<h2 className="meme-text top">vrgvrfvr rfvrv rfvvvvvvvvvvvvvvvvvre 1</h2>
				<h2 className="meme-text bottom">2vrfvfc</h2>
			</div>
		</main>
	)
}