import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Start from './components/Start'
import Settings from './components/Settings'

const App = () => (
	<div className="app">
		<header>
			<nav>
				<Link to="/"> Hem </Link>
				<Link to="/settings"> Inställningar </Link>
			</nav>
		</header>
		<main>
			<Routes>
				<Route path="/settings" element={<Settings/>} />
				<Route path="/" element={<Start />} />
			</Routes>
		</main>
	</div>
)

export default App
