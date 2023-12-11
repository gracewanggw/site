import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
		<Navbar />
		<About />
		<Projects />
		<Skills />
	</main>
  );
}

export default App;
