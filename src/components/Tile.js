import React from "react"
import "../styles/Tile.css"

// this is a stateless component
// this component represents a single tile on the board
// Tile component is used in the Board component
// it has an id that is the index of the letter in the word
// every tile has a className of "Tile"
// the extra className will change depending on what's passed as props
// if the letter is correct, it will have the className 'correct'
// if the letter is wrong placed, it will have the className 'wrong-place'
// if the letter is neither, it will only have the className 'Tile'
const Tile = ({ id, isCorrect, isWrongPlaced }) => {
	if (isCorrect) {
		return <div id={id} className='Tile correct'></div>
	}
	if (isWrongPlaced) {
		return <div id={id} className='Tile wrong-place '></div>
	}
	return <div id={id} className='Tile'></div>
}

export default Tile
