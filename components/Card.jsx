import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ id, numero, title, href, title_Card, src, alt }) => {
	let className = "right";
	if (numero % 2 == 0) {
		className = "left";
	}
	return (
		<>
			<article className="card">
				<div className={className}>{numero}</div>
				<div className="presentation">
					<h1>{title_Card}</h1>
					<p>{title}</p>
					<a href={href}>
						about me
						<FontAwesomeIcon icon={faLongArrowAltRight} size="1x" />
					</a>
				</div>
				<img src={src} alt={alt} />
			</article>
		</>
	);
};

export default Card;
