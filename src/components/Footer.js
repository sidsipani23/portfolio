import React from 'react';
import Resume from '../Resume_Siddhartha.pdf';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='text-center'>
				<span className='sub-heading-3'>Let's Work Together!</span>
				<div>
					<i class='far fa-copyright copyright'></i>
					<a href={Resume}>
						<span className='name-sid'> Siddhartha Sipani 2020</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
