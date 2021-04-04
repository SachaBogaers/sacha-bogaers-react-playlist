import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import SongOverview from './SongOverview'
import About from "./About.js"

export default function App() {
	return (
		<Router>
			<div className="router">
				<nav className="main-nav">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<SongOverview />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}



