import React from 'react'
import SectionHeader from '../utils/SectionHeader'

function Contact() {
	return (
		<section id="contact" className="section-padding" >

			<SectionHeader title="Contact Me" />

			<div className="container">
				<div className="row">
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
	)
}

export default Contact
