import './App.css';
import './components/dark.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ToolsAndTech from './components/ToolsAndTech';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Home />
			<ToolsAndTech />
			<Projects />
			<Footer />
		</div>
	);
};

export default App;
