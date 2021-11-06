import React from 'react'
import man01 from '../assets/images/me-01-alt.png'
import SectionHeader from '../utils/SectionHeader'

function About() {
	const Contacts = [
		{
			name: 'Full Name:',
			value: 'Mclean Classic Kasambala',
		},
		{
			name: 'Phone:',
			value: '+265 9915 93 543',
		},
		{
			name: 'Email:',
			value: 'mcleankasambala@gmail.com',
		},
		{
			name: 'LinkedIn:',
			value: 'Mclean Kasambala',
		},
	];

	return (
		<>
			<section id="about-me" className="section-padding alt-color">
				<div className="container">
					<SectionHeader title="About Me" />
					<div className="row">
						<div className="col-lg-5 text-center wow fadeInLeft" data-wow-delay="0.2s">
							<img src={man01} title="me-01" alt="me-01" />
						</div>
						<div className="col-lg-7 my-auto wow fadeInRight" data-wow-delay="0.2s">
							<h3><strong>Hi There</strong></h3>
							<div className="about-me-description">
								<p>
									In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui
									at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
									efficitur sagittis, urna est ultricies eros, ac porta sem turpis
								</p>
								<p>
									nunc id efficitur sagittis, urna est ultricies eros, ac porta
									sem turpis porta sem turpis quis leo. Nulla in feugiat elit
								</p>
							</div>
							<div className="row">
								{
									Contacts.map((contact, index) => {
										return (
											<div className="col-lg-6" key={index}>
												<div className="contact-info">
													<strong><span>{contact.name}</span></strong>
													<p>{contact.value}</p>
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>

			</section>
		</>
	)
}

export default About
