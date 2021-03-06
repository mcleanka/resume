import React, { useEffect } from 'react'
import MyServices from '../database/Services';
import SectionHeader from '../utils/SectionHeader';
import WOW from 'wow.js'


function Services() {
	useEffect(() => {
		let wow = new WOW(
			{
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 0,
				mobile: false,
				live: true
			}
		);

		return wow.init();
	}, [])

	return (
		<>
			<section id="services" className="section-padding">

				<SectionHeader title="My Services" />

				<div className="container">
					<div className="row justify-content-center">
						{
							MyServices.map((service, index) => {
								return (
									<div className="col-lg-4 col-md-6" key={index}>
										<div className="item-service wow fadeInLeft" data-wow-delay={`0.${index + 2}s`}>
											<div className="item-service-icon">
												<i className="fa" aria-hidden="true">
													{service.icon}
												</i>
											</div>
											<div className="item-service-content">
												<h5>{service.title}</h5>
												<p>
													{service.description}
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
