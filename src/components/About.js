import React from 'react'
import man01 from '../assets/images/me-01-alt.png'

function About() {
	return (
		<>
			<section id="about" className="section-padding alt-color">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-title underline">
								<h2>About Me</h2>
								<p className="title-desc">
									Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum standard dummy text.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div
							className="col-lg-5 text-center wow fadeInLeft"
							data-wow-delay="0.2s"
						>
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
								<div className="col-lg-6">
									<div className="contact-info">
										<strong><span>Name:</span></strong>
										<p>Jonathan Doe</p>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="contact-info">
										<strong><span>Email:</span></strong>
										<p>
											<a
												href="https://themebing.com/cdn-cgi/l/email-protection"
												className="__cf_email__"
												data-cfemail="791c01181409151c391d1614181017571a1614"
											>[email&#160;protected]</a>
										</p>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="contact-info">
										<strong><span>Phone:</span></strong>
										<p>+1 023 454 345</p>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="contact-info">
										<strong><span>LinkedIn:</span></strong>
										<p>Jonathan_123</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About
