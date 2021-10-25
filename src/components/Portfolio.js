import React from 'react'

import image1 from '../assets/images/p-1.jpg';
import image2 from '../assets/images/p-2.jpg';
import image3 from '../assets/images/p-3.jpg';
import image4 from '../assets/images/p-4.jpg';
import image5 from '../assets/images/p-5.jpg';
import image6 from '../assets/images/p-6.jpg';
import image7 from '../assets/images/p-7.jpg';
import image8 from '../assets/images/p-8.jpg';

function Portfolio() {
	return (
		<>
			<section id="portfolio" className="section-padding alt-color">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-title underline">
								<h2>Portfolio Showcase<span className="span-inline"></span></h2>
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
						<div className="col-sm-12">
							<div className="portfolio-filter wow fadeInUp" data-wow-delay="0.2s">
								<ul className="list-inline">
									<li className="select-cat list-inline-item active" data-filter="*">
										All Works
									</li>
									<li className="list-inline-item" data-filter=".art-direction">
										Art Direction
									</li>
									<li className="list-inline-item" data-filter=".branding">
										Branding
									</li>
									<li className="list-inline-item" data-filter=".design">Design</li>
									<li className="list-inline-item" data-filter=".web">Web</li>
								</ul>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="isotope_items row wow fadeInUp" data-wow-delay="0.4s">
								<a
									href={image1}
									className="col-md-4 col-sm-4 col-xs-6 single_item art-direction"
									data-source={image1}
									title="Rock"
								>
									<img src={image1} alt="Rock" />
									<div className="single_item_content">
										<span>Art Direction</span>
										<h6>Rock</h6>
									</div>
								</a>

								<a
									href={image2}
									className="col-md-4 col-sm-4 col-xs-6 single_item branding"
									data-source={image2}
									title="In Time"
								>
									<img src={image2} alt="In Time" />
									<div className="single_item_content">
										<span>Branding</span>
										<h6>In Time</h6>
									</div>
								</a>

								<a
									href={image3}
									className="col-md-4 col-sm-4 col-xs-6 single_item design"
									data-source={image3}
									title="Mockup"
								>
									<img src={image3} alt="Mockup" />
									<div className="single_item_content">
										<span>Design</span>
										<h6>Mockup</h6>
									</div>
								</a>

								<a
									href={image4}
									className="col-md-4 col-sm-4 col-xs-6 single_item web"
									data-source={image4}
									title="Treasure"
								>
									<img src={image4} alt="Treasure" />
									<div className="single_item_content">
										<span>Web</span>
										<h6>Treasure</h6>
									</div>
								</a>

								<a
									href={image5}
									className="col-md-4 col-sm-4 col-xs-6 single_item art-direction"
									data-source={image5}
									title="Daily Note"
								>
									<img src={image5} alt="Daily Note" />
									<div className="single_item_content">
										<span>Art Direction</span>
										<h6>Daily Note</h6>
									</div>
								</a>

								<a
									href={image6}
									className="col-md-4 col-sm-4 col-xs-6 single_item branding"
									data-source={image6}
									title="Handcraft"
								>
									<img src={image6} alt="Handcraft" />
									<div className="single_item_content">
										<span>Branding</span>
										<h6>Handcraft</h6>
									</div>
								</a>

								<a
									href={image7}
									className="col-md-4 col-sm-4 col-xs-6 single_item design"
									data-source={image7}
									title="Pencil"
								>
									<img src={image7} alt="Pencil" />
									<div className="single_item_content">
										<span>Design</span>
										<h6>Pencil</h6>
									</div>
								</a>

								<a
									href={image8}
									className="col-md-4 col-sm-4 col-xs-6 single_item web"
									data-source={image8}
									title="Focus"
								>
									<img src={image8} alt="Focus" />
									<div className="single_item_content">
										<span>Web</span>
										<h6>Focus</h6>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Portfolio
