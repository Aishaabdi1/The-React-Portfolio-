import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'film-go',
			description:
				'This project allows you to browse films and save it on a wishlist.',
			image: 'filmgoproject.jpg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Web APIs',
			],
			github: 'https://github.com/RamiElsayed/film-go',
			deployed: 'https://ramielsayed.github.io/film-go/',
		},
		{
			name: 'Code College',
			description:'A learning tracker to help users track their progress when learning programming languages.',
			image: 'codecollege.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github:'https://github.com/mohamedisaaq0/Code-College',
			deployed: 'https://desolate-reef-02788.herokuapp.com/',
		},
		{
			name: 'Spa 404 getaway',
			description:
				'A lean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: 'spa.png',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/AliceBryer/Spa-Retreat-Project',
			deployed: 'https://spa-retreat-app.herokuapp.com/',
		},
		{
			name: 'Weather dashboard',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'Weather-Dashboard_.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/Aishaabdi1/Weather-Dashboard',
			deployed: 'https://aishaabdi1.github.io/Weather-Dashboard/',
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
