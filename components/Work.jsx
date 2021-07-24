import Card from "./Card";
const Work = ({ works }) => {
	return (
		<>
			<div className="Works" id="works">
				<h2>latest Work</h2>
				<div className="container">
					{works.map(({ id, src, title, title_card, href, alt }, index) => (
						<Card
							key={id}
							id={id}
							numero={`0${index + 1}`}
							src={src}
							alt={alt}
							title={title}
							title_Card={title_card}
							href={href}
						/>
					))}
				</div>
			</div>
		</>
	);
};
export default Work;
