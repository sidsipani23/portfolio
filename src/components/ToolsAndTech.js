import React from 'react';

const ToolsAndTech = () => {
	return (
		<div className='container tools-div div-main-tools'>
			<p className='sub-heading-3 text-center tools-and-tech-heading'>
				Tools and Technologies Used:{' '}
			</p>
			<div className='tools-and-tech'>
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
					className='tools-icon'>
					<i class='fab fa-html5 fa-4x '></i>
				</a>
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/CSS'
					className='tools-icon'>
					<i class='fab fa-css3-alt fa-4x'></i>
				</a>
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
					className='tools-icon'>
					<i class='fab fa-js-square fa-4x'></i>
				</a>
				<a href='https://reactjs.org/' className='tools-icon'>
					<i class='fab fa-react fa-4x'></i>
				</a>
				<a href='https://nodejs.org/en/' className='tools-icon'>
					<i class='fab fa-node fa-4x'></i>
				</a>
				<a href='https://www.npmjs.com/' className='tools-icon'>
					<i class='fab fa-npm fa-4x '></i>
				</a>
			</div>
		</div>
	);
};

export default ToolsAndTech;
