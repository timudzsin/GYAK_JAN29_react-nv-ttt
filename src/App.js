import { useState } from "react";
import "./App.css";
import JatekTer from "./components/JatekTer";

function App() {
	//const jatekAllapotTomb = ["X", "X", "X", "O", "O", "O", "", "", ""];
	const [jatekAllapotTomb, setJatekAllapotTomb] = useState([
		"x",
		"x",
		"x",
		"o",
		"o",
		"o",
		"",
		"",
		"",
	]);

	function elemAppKattintas(index) {
		console.log("App.js-ből kiírva", index);

		const temp = [...jatekAllapotTomb];
		temp[index] = "f";
		setJatekAllapotTomb([...temp]);
	}

	return (
		<div className="App">
			<JatekTer
				jatekAllapotTomb={jatekAllapotTomb}
				elemAppKattintas={elemAppKattintas}
			/>
		</div>
	);
}

export default App;
