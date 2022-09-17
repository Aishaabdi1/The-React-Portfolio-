import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Living Real',
			description:
				'This is a property management system that is used by landlords viewing and managing their properties and for tenants to allow for maintenance requests and pay rent.',
			image: 'living-real-image.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku & AWS S3',
				'React.js',
				'MERN Stack',
			],
			github: 'https://github.com/',
			deployed: '',
		},
		{
			name: 'Auto Tracker',
			description:
				'This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on any web-enabled device.',
			image: 'auto-tracker-image.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com/',
			deployed: '',
		},
		{
			name: 'Flash Beats',
			description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: 'flash-beats-image.gif',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/',
			deployed: '',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget-tracker-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/',
			deployed: '',
		},
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				
			</div>
		</section>
	);
}

export default Portfolio;
