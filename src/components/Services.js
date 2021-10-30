import React from 'react'
import MyServices from '../database/Services';

function Services() {

	return (
		<>
			<section id="services" className="section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-title underline">
								<span>Services</span>
								<h2>My Services <span className="span-inline"></span></h2>
								<p className="title-desc">
									Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum standard dummy text.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row justify-content-center">
						{
							MyServices.map((service, index) => {
								return (
									<div className="col-lg-4 col-md-6" key={index}>
										<div className="item-service wow fadeInLeft" data-wow-delay="0.2s">
											<div className="item-service-icon">
												<i className="fa fa-github" aria-hidden="true"></i>
											</div>
											<div className="item-service-content">
												<h5>Web Development</h5>
												<p>
													Lorem Ipsum is simply dummy text of the printing typesetting
													industry. simply dummy
												</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default Services
