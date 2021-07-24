import Layout from "../components/Layout";
import "../style/reset.css";
import "../style/global.css";
const App = ({ Component, pageProps }) => {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};
export default App;
