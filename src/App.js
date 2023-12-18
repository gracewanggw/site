import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { Divider } from '@mui/material';
import Footer from './components/Footer';

function App() {

	return (
		<main>
			<Navbar />
			<About />
			<Experience />
			<Projects />
			<Skills />
			<Divider style={{marginTop:'24px'}}></Divider>
			<Footer />
		</main>
	);
}

export default App;
