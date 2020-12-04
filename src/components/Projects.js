import React from 'react';

const Projects = () => {
	return (
		<div className='container text-center project-div'>
			<span className='sub-heading-3'>
				Projects completed <i class='fas fa-arrow-alt-circle-down fa-md'></i>
			</span>{' '}
			<div class='row container project-cards'>
				<div class='col-sm-6'>
					<div class='card '>
						<div class='card-body'>
							<h5 class='card-title'>DevCamper API</h5>
							<p class='card-text'>
								Backend API for the DevCamper application, which is a bootcamp
								directory website. The API supports full CRUD (Create, Read,
								Update and Delete) functionality, with authentication and
								measures to prevent security threats. This was built using
								MongoDB, Express.js, Node.js and many different NPM packages.
							</p>
							<a
								href='https://afternoon-thicket-72695.herokuapp.com/'
								class='btn btn-primary'>
								API
							</a>
							<a
								href='https://github.com/sidsipani23/devcamper-api'
								class='btn btn-dark'>
								<i class='fab fa-github fa-lg'></i>
							</a>
						</div>
					</div>
				</div>
				<div class='col-sm-6'>
					<div class='card '>
						<div class='card-body'>
							<h5 class='card-title'>Contact Keeper</h5>
							<p class='card-text contact-keeper'>
								Contact Keeper is a MERN (MongoDB, Express.js, React.js and
								Node.js) stack application with full CRUD functionality.
								Designed to play with a users' contacts, it stores all the
								contacts info from different users, creating a seperate account
								for all individual users.
							</p>
							<a
								href='https://gentle-ocean-77837.herokuapp.com/'
								class='btn btn-primary'>
								Contact Keeper
							</a>
							<a
								href='https://github.com/sidsipani23/contactkeeper'
								class='btn btn-dark'>
								<i class='fab fa-github fa-lg'></i>
							</a>
						</div>
					</div>
				</div>
				<div class='col-sm-6'>
					<div class='card'>
						<div class='card-body'>
							<h5 class='card-title'>Weather</h5>
							<p class='card-text weather'>
								An application that uses the Open Weather API to display the
								weather of a place, given by the name of the city and the
								country. It is built using vanilla JavaScript, HTML and CSS.
							</p>
							<a
								href='https://sidsipani23.github.io/Weather-JS/'
								class='btn btn-primary'>
								Weather
							</a>
							<a
								href='https://github.com/sidsipani23/Weather-JS'
								class='btn btn-dark'>
								<i class='fab fa-github fa-lg'></i>
							</a>
						</div>
					</div>
				</div>
				<div class='col-sm-6'>
					<div class='card'>
						<div class='card-body'>
							<h5 class='card-title'>GitHub Finder</h5>
							<p class='card-text'>
								GitHub Finder is an application used to find a user's profile on
								GitHub, and access public information about him such as the
								number of followers, repos, and much more. It also lists the top
								five repositories of the use. All this is done using the GitHub
								API, and the application is built using React.js and Node.js.
							</p>
							<a
								href='https://githubfinderreact23.netlify.app/'
								class='btn btn-primary'>
								GitHub Finder
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
