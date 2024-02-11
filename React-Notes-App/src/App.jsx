import { useEffect } from "react"
import Foreground from "./component/Foreground"
import Header from "./component/Header"

// import React from 'react'

function App() {
	
    const farFutureDate = new Date('2038-01-01T00:00:00Z');
	useEffect(() => {
		const cookie = () => {
			window.onload = () => {
				if (document.cookie === '')
				{
					document.cookie = `i = 0; expires = ${farFutureDate.toUTCString()}; priority = high`;
				}
			}
			
		}
		cookie();
	}, [])
	
	return (
		<>
			<div className="relative text-white bg-zinc-800 w-full h-screen">
				<Header />
				<Foreground/>
			</div>
		</>
	)
}

export default App 