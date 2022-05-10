import { useState } from 'react'
import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import Start from './components/Start'
import Settings from './components/Settings'
import ShowCart from './components/ShowCart'

const App = () => (
	<div className="app">
		<header>
			<nav>
				<NavLink to="/"> Hem </NavLink>
				<NavLink to="/settings"> Inställningar </NavLink>
				<NavLink to="/cart"> Kundvagn </NavLink>
			</nav>
		</header>
		<main>
			<Routes>
				<Route path="/settings/*" element={<Settings/>} />
				<Route path="/cart" element={<ShowCart />} />
				<Route path="/" element={<Start />} />
			</Routes>
		</main>
	</div>
)

/*
// Backend
// GET /products/windmill
app.get('/products/:name', (req, res) => {
	let name = req.params.name
})

// Frontend
let { name } = useParams()
*/

export default App
