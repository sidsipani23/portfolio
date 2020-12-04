import React from 'react';
import myImg from '../Images/IMG_9231.JPG';
import programmer from '../Images/programmer.png';
const Home = () => {
	return (
		<div className={'container'}>
			<div className='row'>
				<div className='col-md first-half'>
					<div className='heading text-center'>
						<span className='hello'>Hello!</span>
					</div>
					<p className='sub-heading text-center'>
						<span>I am </span>
						<span class='name'>Siddhartha Sipani.</span>
					</p>
					<p className='sub-heading-2 text-center'>
						<span className='prog'>Progammer </span>
						<span>| </span>
						<span className='writ'>Writer</span>
					</p>
					<i className='fas fa-code fa-3x icon prog'></i>
					<i class='fas fa-pen-nib fa-3x icon writ'></i>
					<img
						src={programmer}
						className='programmer_img '
						alt='programmer_img'
					/>
					<p className='sub-heading-3 text-center'>Scroll down to know more </p>

					<i class='far fa-arrow-alt-circle-down fa-2x arrow-down'></i>
				</div>
				<div className='col-md second-half'>
					<img src={myImg} className='profile_img' alt='profile_img' />
				</div>
			</div>
		</div>
	);
};

export default Home;
