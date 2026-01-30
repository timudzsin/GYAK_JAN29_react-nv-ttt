import "./Elem.css";

function Elem(props) {
	function elemKatintas() {
		if (props.jel === "") {
			props.elemAppKattintas(props.index);
		}
	}

	return (
		<div className="elem" onClick={elemKatintas}>
			{props.jel}
		</div>
	);
}

export default Elem;
