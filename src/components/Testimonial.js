import React from 'react'

function Testimonial() {
	return (
		<>
			<section className="section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div
								className="section-title mb-lg-0 mb-md-5 wow fadeInLeft"
								data-wow-delay="0.2s"
							// style="text-align: left"
							>
								<span>Our Testimonials</span>
								<h2>Happy Clients Says<span></span></h2>
								<p>
									Phasellus accumsan scelerisque dolor, quis mattis justo&nbsp;
									varius. Vestibulum ante ipsum primis in faucibus orci luctus et
									ultrices posuere cubilia Curae
								</p>
								<p>
									enim elementum varius. Vestibulum ante ipsum primis in faucibus
									orci luctus et ultrices posuere
								</p>
								<div
								//  style="text-align: left"
								>

									<a className="amike-btn bordered mt-3" href="#">Learn More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1 my-auto">
							<div className="testimonial wow fadeInRight" data-wow-delay="0.2s">
								<div className="testimonial-item">
									<div className="testimonial-content">
										<p>
											“In promotion and of advertising testimonial show consiss of
											a person,s written orsoken statement extollig the virtue”
										</p>
										<div className="testimonial-rating">
											<i className="fa fa-star"></i><i className="fa fa-star"></i
											><i className="fa fa-star"></i><i className="fa fa-star"></i
											><i className="fa fa-star"></i>
										</div>
									</div>
									<div className="testimonial-avatar">
										<div className="testimonial-avatar-img">
											<img src="assets/images/2.jpg" alt="img" />
										</div>
										<div className="testimonial-avatar-info">
											<h5>Maria Doe</h5>
											<span>Co Founder of Axis</span>
										</div>
									</div>
								</div>
								<div className="testimonial-item">
									<div className="testimonial-content">
										<p>
											“In promotion and of advertising testimonial show consiss of
											a person,s written orsoken statement extollig the virtue”
										</p>
										<div className="testimonial-rating">
											<i className="fa fa-star"></i><i className="fa fa-star"></i
											><i className="fa fa-star"></i><i className="fa fa-star"></i
											><i className="fa fa-star"></i>
										</div>
									</div>
									<div className="testimonial-avatar">
										<div className="testimonial-avatar-img">
											<img src="assets/images/1.jpg" alt="img" />
										</div>
										<div className="testimonial-avatar-info">
											<h5>Emaley Mcculloch</h5>
											<span>Founder of Woo</span>
										</div>
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

export default Testimonial
