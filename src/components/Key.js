import React from "react"
import "../styles/Key.css"

// this is a stateless component
// this component represents a single key on the keyboard
// the click handler will call the passed function to append the letter to the word
// the key maybe wide or narrow depending on the isWide prop
// the letter will be the letter passed as props
const Key = ({ letter, isWide, clickHandler }) => {
	if (isWide) {
		return (
			<div onClick={() => clickHandler(letter)} className='Key wide'>
				{letter}
			</div>
		)
	}
	return (
		<div onClick={() => clickHandler(letter)} className='Key'>
			{letter}
		</div>
	)
}

export default Key
