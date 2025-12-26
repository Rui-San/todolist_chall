import React from 'react';
import SlCard from '@shoelace-style/shoelace/dist/react/card/index.js';
import '../styles/overview.css';

const Home: React.FC = () => {
	return (
		<div>
			<h1>Welcome to this simple To-Do list application!</h1>
			<div className='overview-wrapper'>
				<SlCard className="overview-card">
					<div slot='header'>
						<b>Frontend Scope:</b>
					</div>
					<p>This frontend was developed using the following technologies:</p>
					<ul>
						<li><b>React</b> with <b>TypeScript</b> for building the user interface.</li>
						<li><b>Shoelace</b> and raw <b>CSS</b> for UI components and styling respectively.</li>
						<li><b>React Router</b> for client-side routing (between pages).</li>
						<li><b>Axios</b> to handle HTTP requests.</li>
						<li><b>TanStack</b> (formerly React Query) for data fetching and state management.</li>
					</ul>
				</SlCard>
				<SlCard className="overview-card">
					<div slot='header'>
						<b>Key takeaways from this challenge:</b>
					</div>
					<p>This challenge allowed me to deepen my understanding of React and use TanStack, a library I've never used before.</p>
					<p>It was also a great opportunity to apply OOP* and DDD* principles on a backend using a stack I've been working with recently (NodeJS with Express).</p>
					<div slot='footer'>
						* OOP: 
							<a href="https://en.wikipedia.org/wiki/Object-oriented_programming" target="_blank">Object-Oriented Programming</a>; 
						  DDD: 
						  	<a href="https://en.wikipedia.org/wiki/Domain-driven_design" target="_blank">Domain-Driven Design</a>
					</div>
				</SlCard>
			</div>
			
		</div>
	);
};

export default Home;