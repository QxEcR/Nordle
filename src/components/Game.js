import React, { useState, useEffect } from "react"
import words from "../data/words.json"
import datedWords from "../data/datedWords.json"
import "../styles/Game.css"
import Board from "./Board"
import Keyboard from "./Keyboard"
import { binarySearch } from "../utils/binarySearch"
import getTodayDate from "../utils/getTodayDate"

// this is a stateful component
// this component represents the entire game
// it has a state of the current index of the word
// it has a state of the current word number
const Game = () => {
	// the day since the game became daily
	// the day comes from the datedWords.json
	const [day, setDay] = useState()

	// the current index of the word
	// this is used to highlight the current letter in the word
	// the min value is 0, the max value is 4
	// since the word is 5 letters long, the max value is 4
	const [index, setIndex] = useState(0)

	// the current word number represent the current row of the board
	// if the word number is 1, the current row to input in is the first row, and so on
	const [wordNo, setWordNo] = useState(1)

	// the state for the current target word to guess and the decoy
	const [targetWord, setTargetWord] = useState("")
	const [decoyWord, setDecoyWord] = useState("")

	// the state for the is the one of the words are found, based on this state, the message will be shown by Keyboard.js
	const [isTargetWordFound, setIsTargetWordFound] = useState(false)
	const [isDecoyWordFound, setIsDecoyWordFound] = useState(false)

	// constant for the number of letters in the target and decoy word
	const WORD_LENGTH = 5

	// when the component mounts, the target word is set randomly
	useEffect(() => {
		const todayDate = getTodayDate()
		const dataObject = datedWords[todayDate]
		setDay(dataObject["day"])
		setTargetWord(dataObject["target"])
		setDecoyWord(dataObject["decoy"])
	}, [])

	useEffect(() => {
		if (targetWord) console.log(`targetWord is ${targetWord}`)
	}, [targetWord])
	useEffect(() => {
		if (decoyWord) console.log(`decoyWord is ${decoyWord}`)
	}, [decoyWord])
	useEffect(() => {
		if (day) document.getElementById("App-day-counter").innerText = day
	}, [day])

	const CheckLetterPlacesForCorrects = (word) => {
		let corrects = []
		for (let i = 0; i < WORD_LENGTH; i++) {
			if (targetWord.includes(word[i]) && word[i] === targetWord[i]) {
				corrects.push("correct")
			} else if (decoyWord.includes(word[i]) && word[i] === decoyWord[i]) {
				corrects.push("correct")
			} else {
				corrects.push(null)
			}
		}
		return corrects
	}

	const CheckLetterPlacesForWrongs = (word) => {
		let wrongs = []
		for (let i = 0; i < WORD_LENGTH; i++) {
			if (targetWord.includes(word[i]) && word[i] !== targetWord[i]) {
				wrongs.push("wrong-place")
			} else if (decoyWord.includes(word[i]) && word[i] !== decoyWord[i]) {
				wrongs.push("wrong-place")
			} else {
				wrongs.push(null)
			}
		}
		return wrongs
	}

	// this function will be called in the Keyboard component
	// it will be passed down to the Keyboard component as a prop
	// this function will handle the logic of submitting the word
	// it will check if the word is target or decoy word
	// and call CheckLetterPlaces function to check if any letter is in the correct place or not
	const submitWord = (word) => {
		if (!binarySearch(words, word, 0, words.length - 1)) {
			return false
		}

		if (word === targetWord) {
			setIsDecoyWordFound(false)
			setIsTargetWordFound(true)

			return [true, ["correct", "correct", "correct", "correct", "correct"]]
		}
		if (word === decoyWord) {
			setIsDecoyWordFound(true)
			setTimeout(() => {
				setIsDecoyWordFound(false)
			}, 3000)
		}
		// since the previous word was submitted, the word number will be incremented
		// so the board moves to the next row
		setWordNo((prev) => prev + 1)
		return [
			true,
			CheckLetterPlacesForCorrects(word),
			CheckLetterPlacesForWrongs(word),
		]
	}

	return (
		<div className='Game'>
			<Board />
			<Keyboard
				index={index}
				setIndex={setIndex}
				submitWord={submitWord}
				wordNo={wordNo}
				isTargetWordFound={isTargetWordFound}
				isDecoyWordFound={isDecoyWordFound}
			/>
		</div>
	)
}

export default Game
