import { useState } from "react"
import "./styles/App.css"
import Game from "./components/Game"
import About from "./components/About"
import bmac from "./Assets/bmac.png"

const App = () => {
	const [isGameOn, setGameOn] = useState(true)

	const toggleAbout = () => {
		setGameOn(!isGameOn)
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<div className='App-title'>
					<p>Nordle</p>
					<p className='App-day-counter'>
						Day #<span id='App-day-counter'></span>
					</p>
				</div>
				<div className='App-header-side'>
					<a href='https://www.buymeacoffee.com/nordlethegame' target='_blank'>
						<img
							className='mbacImg'
							src={bmac}
							alt='Buy me a coffe'
							width='24px'
						/>
					</a>
					<svg
						onClick={() => {
							toggleAbout()
						}}
						xmlns='http://www.w3.org/2000/svg'
						height='24'
						viewBox='0 0 24 24'
						width='24'>
						<path
							fill='white'
							d='M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z'></path>
					</svg>
				</div>
			</header>
			<hr />
			<div className='App-body'>{isGameOn ? <Game /> : <About />}</div>
		</div>
	)
}

export default App
