import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Projects from '../routes/Projects';
import About from '../routes/About';

//* components / routes

export default function AnimatedRouter() {
	const location = useLocation();

	return (
		<AnimatePresence mode="sync">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Projects />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</AnimatePresence>
	);
}
