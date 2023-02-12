import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function About() {
	return (
		<motion.div
			initial={{ opacity: 0, x: +1290 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: +1290 }}
			transition={{ duration: 0.5 }}
			className="main about "
		>
			<NavLink className={'navBtn'} to="/">
				<img src="/img/ProjectsBtn.svg" alt="" />
			</NavLink>
			<div className="content hkd">
				<h2 className="title">Hakan Kayra Dogan</h2>
				<p className="info">
					I'm a self-thought developer who is currently studying
					Information Systems Engineering at Atılım University. I
					enjoy experimenting, prototyping new and practical ideas to
					solve any problem.
				</p>
			</div>
			<div className="spacer"></div>
			<div className="content aek">
				<h2 className="title">Ali Eren Kilinc</h2>
				<p className="info">
					Design of our first prototype model airplane is complete. We
					are assembling it when we can spare time from our
					universities. You can see the prototype on the right and if
					you have any questions and suggestions, feel free to tell
					us!
				</p>
			</div>
			<div className="spacer">
				<h2 className="fadedTitle">ABOUT</h2>
			</div>
		</motion.div>
	);
}
