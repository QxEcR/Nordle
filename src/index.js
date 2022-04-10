import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

function AppWithCallbackAfterRender() {
	return <App tab='home' />
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<AppWithCallbackAfterRender />)
