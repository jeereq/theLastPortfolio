import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Banniere = () => {
	return (
		<>
			<div className="banniere" id="home">
				<div className="boule">
					<div className="fill"></div>
				</div>
				<div className="boule top">
					<div className="fill"></div>
				</div>
				<div className="boule right">
					<div className="fill"></div>
				</div>
				<div className="boule bottom">
					<div className="fill"></div>
				</div>
				<div className="boule middle">
					<div className="fill"></div>
				</div>
				<div className="boule left">
					<div className="fill"></div>
				</div>
				<div className="presentation">
					<h1>Minganda Jeereq</h1>
					<p>front end developper / ui and ux designer / backend developper</p>
					<Link href="/contact">
						<a>
							about me
							<FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
						</a>
					</Link>
				</div>
				<div className="text">mj</div>
			</div>
		</>
	);
};

export default Banniere;
