import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { BottomNavigation, Divider, Typography } from '@mui/material';

function App() {

	return (
		<main>
			<Navbar />
			<About />
			<Experience />
			<Projects />
			<Skills />
			<Divider style={{marginTop:'24px'}}></Divider>
			<BottomNavigation
				style={{ backgroundColor: 'rgb(245, 245, 243)' }}
			>
				<Typography
						variant="caption"
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100%', // Ensure the Typography takes up the full height of BottomNavigation
							color: '#aaa',
							textDecoration: 'none',
						  }}
					>
						© 2023 Grace Wang
					</Typography>
			</BottomNavigation>
		</main>
	);
}

export default App;
