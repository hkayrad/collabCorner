import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';

export default function About() {
	return (
		<motion.div
			initial={{ opacity: 0.5, x: 0 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: +860 }}
			transition={{ duration: 0.5 }}
			className="about"
		>
			<NavLink className={'projectsBtn'} to="/">
				Projects
			</NavLink>
		</motion.div>
	);
}
