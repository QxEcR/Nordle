import React from "react"
import "../styles/Board.css"
import Tile from "./Tile"

// this is a stateless component
// This component is responsible for rendering the board.
// using the Tile component
// every row represents a word
// every tile represents a letter
// the tile's id is the index of the letter in the word
// every row has a className of "row" + the word number
// there are 7 rows in the board
const Board = () => {
	return (
		<div className='Board'>
			<div id='row1' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>
			<div id='row2' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>
			<div id='row3' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>
			<div id='row4' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>
			<div id='row5' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>

			<div id='row6' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>

			<div id='row7' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>

			<div id='row8' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>

			<div id='row9' className='Board-row'>
				<Tile id='0' />
				<Tile id='1' />
				<Tile id='2' />
				<Tile id='3' />
				<Tile id='4' />
			</div>
		</div>
	)
}

export default Board
