import React, { useState, useEffect } from "react"
import Key from "./Key"
import "../styles/Keyboard.css"

/*
	this is a statful component

	all params are passed from Game.js
	params index: the index of the tile that is currently selected
	params setIndex: a function that sets the index of the tile
	params submitWord: a function that submits the word
	params wordNo: the number of the word that is currently being typed
	NOTE: the wordNo represents the row of the board since the wordNo == the row of the board


*/
const Keyboard = ({ index, setIndex, submitWord, wordNo }) => {
	// the state of the word that is currently being typed
	// this word will be passed to the submitWord function
	// if the user presses the enter key
	const [word, setWord] = useState("")

	// the deleteLetter function will remove the last letter from the word
	// deleteLetter function will be called from the useEffect hook
	// the useEffect hook will be called every time the index changes (increment or decrement)
	// the state is used for determining is it okay to delete a letter or not (true == okay to delete)
	const [attemptToDelete, setAttemptToDelete] = useState(false)

	useEffect(() => {
		if (attemptToDelete) {
			deleteLetter()
			setAttemptToDelete(false)
		}
	}, [index])

	// this function for confirming that the current tile is empty and can be typed in
	const isTileEmpty = (id) => {
		// get the tile that is currently selected in the row and the the index
		const tile = document.getElementById(`row${wordNo}`).children[id]
		if (tile) {
			return tile.innerHTML === ""
		}
		return false
	}

	// this function is for appeding a letter to the tile (NOT THE WORD STATE)
	// this function is called from the handleClickToAppendLetter function
	/*
		params letter: the letter that is being appended to the tile
		params id: the index of the tile that is currently selected
		params isCorrect: a boolean that determines if the place is correct to add the "correct" CSS class
		params isMissed: a boolean that determines if the letter is in the targeted word but miss placed to add the "wrong-place" CSS class
	*/
	const appendLetter = (letter, id, isCorrect, isMissPlaced) => {
		const tile = document.getElementById(`row${wordNo}`).children[id]
		tile.innerHTML = letter.toUpperCase()
		if (isCorrect) {
			tile.classList.add("correct")
		}
		if (isMissPlaced) {
			tile.classList.add("wrong-place")
		}
	}

	// this function is for handling the logic before and after appending a letter
	// this function is passed to all "letters" Key component as a prop
	// it will check the row can hold another letter, if not it will return
	// if the row can hold another letter, it will append the letter to the tile after checking if the place is empty
	// if the place is empty, it will append the letter to the tile
	// then add the letter to the word state
	// and increment the index of the tile to the next tile
	const handleClickToAppendLetter = (letter) => {
		if (index !== 0 && index % 5 === 0) return
		if (isTileEmpty(index)) {
			appendLetter(letter, index.toString(), false, false)
			setWord((prev) => prev + letter)
			setIndex((prev) => prev + 1)
		}
	}

	// this function is for submitting the word to the submitWord function in Game.js
	// all the logic is done in submitWord function
	// this function will call the submitWord function in Game.js
	// then reset the word state to an empty string
	// and reset the index of the tile to 0
	// this function is passed to the "Enter" Key component as a prop
	const handleClickToSubmitWord = () => {
		if (word.length === 5) {
			submitWord(word.toLowerCase())
			setWord("")
			setIndex(0)
		}
	}

	// this function is for deleting the last letter from the word
	// this function is called from the useEffect hook
	// first get the last tile then check if the tile is not undefined and not empty
	// then delete the last letter from the tile it self
	// and delete the last letter from the word state
	const deleteLetter = () => {
		const tile = document.getElementById(`row${wordNo}`).children[index]
		if (tile && !isTileEmpty()) {
			tile.innerHTML = ""
			tile.classList.remove("correct")
			tile.classList.remove("wrong-place")
			setWord((prev) => prev.slice(0, -1))
		}
	}

	// this function is for handling the logic before deleting a letter
	// if the index is 0, it will return, because that mean that the first tile is empty
	// if the index is not 0, it will set the attemptToDelete state to true, to take an effect in the useEffect hook
	// this function is passed to the "Delete" Key component as a prop
	// the delete process is in the deleteLetter function which is called from the useEffect hook if the attemptToDelete state is true
	const handleClickToDeleteLetter = () => {
		if (index === 0) return
		setIndex((prev) => (prev === 0 ? 0 : prev - 1))
		setAttemptToDelete(true)
	}

	return (
		<div className='keyboard'>
			<div className='Keyboard-row'>
				{["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => (
					<Key
						key={letter}
						letter={letter}
						clickHandler={handleClickToAppendLetter}
					/>
				))}
			</div>
			<div className='Keyboard-row'>
				{["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
					<Key
						key={letter}
						letter={letter}
						clickHandler={handleClickToAppendLetter}
					/>
				))}
			</div>
			<div className='Keyboard-row'>
				<Key
					clickHandler={handleClickToSubmitWord}
					letter='Enter'
					isWide={true}
				/>
				{["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
					<Key
						key={letter}
						letter={letter}
						clickHandler={handleClickToAppendLetter}
					/>
				))}

				<Key
					clickHandler={handleClickToDeleteLetter}
					letter='Delete'
					isWide={true}
				/>
			</div>
		</div>
	)
}

export default Keyboard
