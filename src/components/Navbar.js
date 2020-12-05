/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import useThemeSwitcher from '../context/useThemeSwitcher';
function Navbar() {
	const [closed, setClosed] = useState(true);

	const ThemeSwitcher = useThemeSwitcher();
	const openHam = () => {
		if (closed) {
			setClosed(false);
		} else if (!closed) {
			setClosed(true);
		}
	};

	return (
		<div>
			<nav className={closed ? '' : 'open'}>
				<div
					className={closed ? 'hamburger ham-closed' : 'hamburger'}
					onClick={openHam}>
					<div className={closed ? 'line' : 'line line-1-open'}></div>
					<div className={closed ? 'line' : 'line line-2-open'}></div>
					<div className={closed ? 'line' : 'line line-3-open'}></div>
				</div>
				<ul className={closed ? 'nav-links closed-nav-links' : 'nav-links '}>
					<li className='nav-item centered '>
						<a
							className='nav-link '
							data-toggle='tooltip'
							title='GitHub'
							data-placement='bottom'
							href='https://github.com/sidsipani23'>
							<i className='fab fa-github fa-2x  '></i>
						</a>
					</li>
					<li className='nav-item centered'>
						<a
							className='nav-link'
							data-toggle='tooltip'
							title='LinkedIn'
							data-placement='bottom'
							href='https://www.linkedin.com/in/siddhartha-sipani-1248461b1/'>
							<i className='fab fa-linkedin fa-2x'></i>
						</a>
					</li>
					<li className='nav-item centered'>
						<a
							className='nav-link'
							data-toggle='tooltip'
							title='Blog'
							data-placement='bottom'
							href='http://siddharthakablog.blogspot.com'>
							<i className='fas fa-blog fa-2x'></i>
						</a>
					</li>
					<li className='nav-item centered'>
						<a
							className='nav-link'
							data-toggle='tooltip'
							title='Facebook'
							data-placement='bottom'
							href='https://www.facebook.com/siddhartha.sipani23/'>
							<i className='fab fa-facebook fa-2x'></i>
						</a>
					</li>
					<li className='nav-item centered'>
						<a
							className='nav-link'
							data-toggle='tooltip'
							title='Instagram'
							data-placement='bottom'
							href='https://www.instagram.com/sid_sipani/?hl=en'>
							<i className='fab fa-instagram fa-2x'></i>
						</a>
					</li>
					{ThemeSwitcher}
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
