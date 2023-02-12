import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Projects() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, x: -1290 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -1290 }}
			transition={{ duration: 0.5 }}
			className="main projects"
		>
			<div className="spacer">
				<h2 className="fadedTitle">PROJECTS</h2>
			</div>
			<div className="content withBtn">
				<h2 className="title">NZ Plane</h2>
				<p className="info">
					Design of our first prototype model airplane is complete. We
					are assembling it when we can spare time from our
					universities. You can see the prototype on the right and if
					you have any questions and suggestions, feel free to tell
					us!
				</p>
				{/* <motion.div
					layout
					data-isOpen={isOpen}
					onClick={() => setIsOpen(!isOpen)}
					className="learnMore"
				>
					<div className="cursor"></div>
					<p>zort</p>
				</motion.div> */}
			</div>
			<div className="spacer"></div>
			<div className="content threeD"></div>
			<NavLink className={'navBtn'} to="/about">
				<img src="/img/AboutBtn.svg" alt="" />
			</NavLink>
		</motion.div>
	);
}
