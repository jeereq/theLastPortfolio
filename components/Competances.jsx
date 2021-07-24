import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
const Competances = () => {
	return (
		<>
			<div className="competances" id="competances">
				<h2>my competances</h2>
				<div className="container">
					<div className="carre">
						<div className="boule">
							<FontAwesomeIcon icon={faAtom} color="blue" size="4x" />
						</div>
					</div>
					<div className="carre">
						<div className="boule">
							<FontAwesomeIcon icon={faMeteor} color="yellow" size="4x" />
						</div>
					</div>
					<div className="carre">
						<div className="boule">
							<FontAwesomeIcon icon={faUserNinja} size="4x" />
						</div>
					</div>
					<div className="carre">
						<div className="boule">
							<FontAwesomeIcon icon={faAtom} size="4x" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Competances;
