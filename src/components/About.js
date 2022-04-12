import React from "react"
import "../styles/About.css"
import "../styles/Tile.css"

const About = () => {
	return (
		<div className='About'>
			<h1 className='about-header'>How to play</h1>
			<p>The goal is to find to correct word in seven tries.</p>
			<p>Each word must be a valid 5 letter word</p>
			<p>There are 2 words</p>
			<p>One word is the correct word</p>
			<p>The other word is a decoy word</p>
			<p>There are no shared letter between the words</p>
			<p>After each guess every tile's color will change</p>
			<p>Green: the letter is in one of two words, in the same place</p>
			<p>Yellow: the letter is in one of two words, but in different place</p>
			<p>No change: the letter is not in any of the two words</p>
			<p>
				Note: this game is designed to be harder than the other varients, So
				some of the rules does not apply here
			</p>
			<hr />
			<h1 className='about-header'>Example</h1>
			<p>The letter "G" is in the correct place</p>
			<div className='about-row'>
				<div className='Tile correct'>G</div>
				<div className='Tile '>A</div>
				<div className='Tile '>M</div>
				<div className='Tile '>E</div>
				<div className='Tile '>S</div>
			</div>
			<br />
			<p>The letter "R" is not in the correct place</p>
			<div className='about-row'>
				<div className='Tile '>E</div>
				<div className='Tile '>A</div>
				<div className='Tile wrong-place'>R</div>
				<div className='Tile '>T</div>
				<div className='Tile '>H</div>
			</div>
			<br />
			<p>There are no letter in nither of the correct nor the decoy word </p>
			<div className='about-row'>
				<div className='Tile '>A</div>
				<div className='Tile '>W</div>
				<div className='Tile '>A</div>
				<div className='Tile '>R</div>
				<div className='Tile '>D</div>
			</div>
			<br />
			<hr />
			<br />
			<p>There are no daily words yet, every visit will generate new words</p>
			<p>
				Thanks for playing Nordle, Please consider
				<a href='https://www.buymeacoffee.com/nordlethegame'>donating</a>
				if you enjoyed
			</p>
			<br />
			<br />
			<br />
			<br />
		</div>
	)
}

export default About
