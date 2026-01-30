import { useState } from "react";
import "./App.css";
import JatekTer from "./components/JatekTer";

function App() {
	const [jatekAllapotTomb, setJatekAllapotTomb] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	]);
	const [lepes, setLepes] = useState(1);

	function elemAppKattintas(index) {
		const temp = [...jatekAllapotTomb];
		temp[index] = lepes % 2 === 0 ? "o" : "x";
		setJatekAllapotTomb([...temp]);

		let temp2 = lepes;
		temp2++;
		setLepes(temp2);
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
