import style from "../style/Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<>
			<header className="header">
				<h1 className={style.logo}>Mj</h1>
				<nav>
					<ul className={style.listItems}>
						<li className={style.item}>
							<Link href="/#home">
								<a>
									<FontAwesomeIcon icon={faHome} />
								</a>
							</Link>
						</li>
						<li className="item">
							<Link href="/#works">
								<a>Works</a>
							</Link>
						</li>
						<li className="item">
							<Link href="/#competances">
								<a>Competances</a>
							</Link>
						</li>
						<li className="item">
							<Link href="/contact">
								<a>Contact</a>
							</Link>
						</li>
						<div className="menus">
							<div className="bar un"></div>
							<div className="bar deux"></div>
							<div className="bar trois"></div>
						</div>
					</ul>
				</nav>
			</header>
		</>
	);
};
export default Header;
