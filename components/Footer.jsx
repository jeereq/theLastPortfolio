import Link from "next/link";
const Footer = () => {
	return (
		<>
			<div className="footer">
				<h2 className="logos">MJ</h2>
				<div className="liens">
					<a href="" className="item">
						linkedin
					</a>
					<a href="" className="item">
						facebook
					</a>
					<a href="" className="item">
						github
					</a>
					<a href="mailto:mingandajeereq@gmail.com" className="item">
						gmail
					</a>
				</div>
				<h3>copyright 2021 by mj jeereq</h3>
			</div>
		</>
	);
};
export default Footer;
