import SlMenuItem from '@shoelace-style/shoelace/dist/react/menu-item/index.js';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon/index.js';
import '../styles/topbar.css';
import { useNavigate } from 'react-router-dom';

export interface NavOption {
	name: string;
	icon: string;
	route: string;
	isLogin?: boolean;
}

interface TopbarProps {
	navOptions: NavOption[];
}

// Topbar receives the navigation props and maps them to Shoelace menu items
// which handle navigation via React Router's useNavigate hook
export const Topbar: React.FC<TopbarProps> = ({ navOptions }) => {
	const navigateTo = useNavigate();
	return (
		<div className="topbar">
			{navOptions.map((option) => (
				<SlMenuItem
					key={option.name}
					className={option.isLogin ? 'login' : ''}
					onClick={() => navigateTo(option.route)}
				>
					<SlIcon slot="prefix" name={option.icon} />
					{option.name}
				</SlMenuItem>
			))}
		</div>
	);
};