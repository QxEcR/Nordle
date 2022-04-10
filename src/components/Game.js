import React, { useState } from "react"
import "../styles/Game.css"
import Board from "./Board"
import Keyboard from "./Keyboard"
const Game = () => {
	const [index, setIndex] = useState(0)
	const [wordNo, setWordNo] = useState(1)

	const submitWord = (word) => {
		console.log(word)
		setWordNo((prev) => prev + 1)
	}

	return (
		<div className='Game'>
			<Board />
			<Keyboard
				index={index}
				setIndex={setIndex}
				submitWord={submitWord}
				wordNo={wordNo}
			/>
		</div>
	)
}

export default Game
