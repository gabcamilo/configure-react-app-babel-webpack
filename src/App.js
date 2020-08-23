import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';

import heartIcon from './assets/heart-icon.png';

import './App.css';
const App = () => {
	return(
		<>
			<Header />
			<LandingPage />
			<Footer>
				<p>Made with <img className="mini-icon" src={heartIcon} alt="Purple heart icon"/> by Gabriela Carvalho Camilo</p>
			</Footer>
		</>
	)
}

export default App;