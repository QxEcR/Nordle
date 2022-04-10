import React, { useState } from "react"
import "../styles/Game.css"
import Board from "./Board"
import Keyboard from "./Keyboard"

// this is a stateful component
// this component represents the entire game
// it has a state of the current index of the word
// it has a state of the current word number
const Game = () => {
	// the current index of the word
	// this is used to highlight the current letter in the word
	// the min value is 0, the max value is 4
	// since the word is 5 letters long, the max value is 4
	const [index, setIndex] = useState(0)

	// the current word number represent the current row of the board
	// if the word number is 1, the current row to input in is the first row, and so on
	const [wordNo, setWordNo] = useState(1)

	// this function will be called in the Keyboard component
	// it will be passed down to the Keyboard component as a prop
	// this function will handle the logic of submitting the word
	// it will check if the word is correct
	// or sum letters are ok
	const submitWord = (word) => {
		console.log(word)
		// since the previous word was submitted, the word number will be incremented
		// so the board moves to the next row
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
