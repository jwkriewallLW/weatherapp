import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/weather">Weather</NavLink>
			<NavLink to="/catFact">Cat Fact</NavLink>
		</div>
	);
}
