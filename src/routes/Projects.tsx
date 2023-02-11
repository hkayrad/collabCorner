import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0.5, x: 0 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -860 }}
			transition={{ duration: 0.5 }}
			className="projects"
		>
			<NavLink className={'aboutBtn'} to="/about">
				About
			</NavLink>
		</motion.div>
	);
}
