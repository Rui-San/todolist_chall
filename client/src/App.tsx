// adding Shoelace as stated in https://shoelace.style/frameworks/react
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/');

import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

import './index.css';


function App() {
return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="tasks" element={<Tasks />} />
				<Route path="*" element={<div>Page Not Found</div>} />
			</Route>
		</Routes>
	);
}

export default App;
