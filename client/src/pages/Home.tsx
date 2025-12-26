import React from 'react';
import SlCard from '@shoelace-style/shoelace/dist/react/card/index.js';

const Home: React.FC = () => {
	return (
		<div>
			<h1>Welcome to this simple To-Do list application!</h1>
			<SlCard className="card-overview">
				<div slot='header'>
					<b>Frontend Scope:</b>
				</div>
				<p>This frontend was developed using the following technologies:</p>
				<ul>
					<li>React with TypeScript for building the user interface.</li>
					<li>Shoelace for UI components and styling.</li>
					<li>React Router for client-side routing.</li>
					<li>TanStack (formerly React Query) for data fetching and state management.</li>
				</ul>
			</SlCard>
		</div>
	);
};

export default Home;