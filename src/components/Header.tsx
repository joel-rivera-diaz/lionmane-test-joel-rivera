import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div className='Header'>
			<div className='logo'>
				<img src="https://lionmane.com/assets/svg/lionmane_logo_white_web.svg" id='logo' />
			</div>
			<div className='app-name'>
				<h1>Dog App</h1>
			</div>
			<div className='nav'>
				<nav><Link to="/" className="btn btn-primary">Home</Link></nav>
			</div>
			
			
		</div>
	);
}