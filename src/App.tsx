import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { CatFactPage } from './features/catFact/CatFact';
import { CatFactComponent } from "./components/CatFactComponent";
import { WeatherComponent } from "./components/WeatherComponent";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/catfact" element={<CatFactComponent />} />
					<Route path="/weather" element={<WeatherComponent />} />
					<Route path="/" element={<Counter />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
