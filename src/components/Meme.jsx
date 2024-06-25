import memesData from "../../memesData.js"
import React from 'react';

export default function Meme() {
	const [memeImage, setMemeImage] = React.useState()

	function getMemeImage() {
		const memesArray = memesData.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		setMemeImage(memesArray[randomNumber].url)
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
				<button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
			</div>
			<img src={memeImage} className="meme-image" />
		</main>
	)
}