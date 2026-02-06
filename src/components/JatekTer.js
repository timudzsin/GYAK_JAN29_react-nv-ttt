import Elem from "./Elem";
import "./JatekTer.css";

function JatekTer(props) {
	return (
		<div className="jatekter">
			{props.jatekAllapotTomb.map((jel, index) => (
				<Elem
					key={index}
					jel={jel}
					index={index}
					elemAppKattintas={props.elemAppKattintas}
				/>
			))}
		</div>
	);
}

export default JatekTer;
