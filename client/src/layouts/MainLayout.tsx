import { Outlet } from 'react-router-dom';
import { Topbar, type NavOption } from '../component/Topbar';

const navOptions: NavOption[] = [
	{ name: 'Home', icon: 'house', route: '/' },
	{ name: 'Tasks', icon: 'list-task', route: '/tasks' },
	{ name: 'Login', icon: 'person', route: '/login', isLogin: true },
];

// decouple layout from pages for reusability
const MainLayout: React.FC = () => {
	return (
		<>
			<Topbar navOptions={navOptions} />
			<div style={{ padding: '24px' }}>
				<Outlet />
			</div>
		</>	
	);
};

export default MainLayout;