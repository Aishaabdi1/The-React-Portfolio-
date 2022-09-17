import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
                I am an aspiring full stack web developer looking to gain a software
                engineering apprenticeship. I have been enrolled in the University of
               Birmingham's full-stack development bootcamp.I have learnt front end
              and back end technologies through a dynamic full stack curriculum,
              including HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js,
               React.js, Node.js, Database Theory, MongoDB, MySQL, Git, and more. 
				</p>
				<p>
                I applied aspects of front and back end development in a recent project. I
               worked on a team of five to{" "}
					<a
						href="https://github.com/P3T2-Realty-Rogues/living-real"
						target="_blank"
					>
						develop
					</a>{' '}
					a{' '}
					<a
						href="https://living-real.herokuapp.com/"
						target="_blank"
					>
						single-page MERN app
					</a>{' '}
					that helps property owners advertise their properties,
					manage their tenants and manage their real estate all
					in one place. I’m excited to leverage my skills as part
					of a fast-paced, quality-driven team to build better
					experiences on the web.
				</p>
			</div>
		</section>
	);
}

export default About;