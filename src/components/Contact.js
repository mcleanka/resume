import React from 'react'

function Contact() {
	return (
		<>
			<section id="contact">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-title wow fadeInUp" data-wow-delay="0.2s">
								<span>Have Any Query?</span>
								<h2>Contact Me<span className="span-inline"></span></h2>
								<p className="title-desc">
									Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum standard dummy text.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="address wow fadeInLeft" data-wow-delay="0.2s">
								<a href="javascript">
									<i className="fa-fw fa fa-map-marker"></i>
									<span>Locate us</span>
									<p>King Street, Melbourne Victoria</p>
								</a>
							</div>
						</div>
						<div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
							<div className="address">
								<a href="javascript">
									<i className="fa-fw fa fa-phone"></i>
									<span>Give us a call</span>
									<p>Office: +01-2345-6789</p>
								</a>
							</div>
						</div>
						<div className="col-lg-4 wow fadeInRight" data-wow-delay="0.2s">
							<div className="address">
								<a href="javascript">
									<i className="fa-fw fa fa-envelope-o"></i>
									<span>Get in online</span>
									<p>
										<span
											className="__cf_email__"
											data-cfemail="ee8d81809a8f8d9aae8b968f839e828bc08d8183"
										>[email&#160;protected]</span>
									</p>
								</a>
							</div>
						</div>
						<div className="col-lg-12">
							<form
								action="javascript"
								method="post"
								className="wow fadeInUp"
								data-wow-delay="0.4s"
								novalidate="novalidate"
							>
								<div className="contactform">
									<div className="row">
										<div className="col-lg-6">
											<input
												type="text"
												name="your-name"
												aria-required="true"
												aria-invalid="false"
												placeholder="Your Name"
											/>
										</div>
										<div className="col-lg-6">
											<input
												type="email"
												name="email"
												aria-required="true"
												placeholder="Your Email"
											/>
										</div>
										<div className="col-lg-12">
											<input
												type="text"
												name="subject"
												aria-required="true"
												placeholder="Your Subject"
											/>
											<textarea
												name="textarea"
												aria-required="true"
												placeholder="Your Message"
											></textarea>
											<input
												type="submit"
												value="Send Message"
												className="wpcf7-form-control wpcf7-submit"
											/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact
