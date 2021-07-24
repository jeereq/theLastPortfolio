import Banniere from "../components/Banniere";
import Work from "../components/Work";
import Competances from "../components/Competances";

export const getStaticProps = async () => {
	const res = await fetch("http://localhost:4000/works");
	const works = await res.json();
	return {
		props: { works }
	};
};
const Home = ({ works }) => {
	return (
		<>
			<Banniere />
			<Work works={works} />
			<Competances />
		</>
	);
};
export default Home;
