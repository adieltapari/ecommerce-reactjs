import React from 'react';
import './Header.css';

import img from './logo.png';

const Header = (props) => {
	console.log(props);
	return (
		<div  className='Header'>
			<img src={img} alt='logo coder house' />
		</div>
	);
};

export default Header;
