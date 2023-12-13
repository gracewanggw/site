import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {

	return (
		<main>
			<Navbar />
			<About />
			<Experience />
			<Projects />
			<Skills />
		</main>
	);
}

export default App;
