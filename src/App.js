import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
	const [theme, setTheme] = useState("");
	useEffect(() => {
		checkDark();
	}, [theme]);

	function checkDark() {
		let theme = localStorage.getItem("theme");
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}
	function changeMode(value) {
		localStorage.setItem("theme", value);
		setTheme(value);
	}

	return (
		<>
			<Router>
				<div className="flex flex-col items-center w-full">
					<div className="container transition-colors duration-300 bg-lightmodeBg dark:bg-darkmodeBg">
						<Navbar changeMode={changeMode} />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/detail/:slug" element={<Detail />} />
						</Routes>
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
