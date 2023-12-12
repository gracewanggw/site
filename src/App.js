import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {

	return (
		<main>
			<Navbar />
			<About />
			<Experience />
			<Projects />
		</main>
	);
}

export default App;
