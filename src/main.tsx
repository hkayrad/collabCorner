import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AnimatedRouter from './components/AnimatedRouter';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<AnimatedRouter />
		</BrowserRouter>
		<BackgroundVideo />
	</React.StrictMode>
);
