import React from 'react'

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
									href="assets/images/p-1.jpg"
									className="col-md-4 col-sm-4 col-xs-6 single_item art-direction"
									data-source="assets/images/p-1.jpg"
									title="Rock"
								>
									<img src="assets/images/p-1.jpg" alt="Rock" />
									<div className="single_item_content">
										<span>Art Direction</span>
										<h6>Rock</h6>
									</div>
								</a>

								<a
									href="assets/images/p-2.jpg"
									className="col-md-4 col-sm-4 col-xs-6 single_item branding"
									data-source="assets/images/p-2.jpg"
									title="In Time"
								>
									<img src="assets/images/p-2.jpg" alt="In Time" />
									<div className="single_item_content">
										<span>Branding</span>
										<h6>In Time</h6>
									</div>
								</a>

								<a
									href="assets/images/p-3.jpg"
									className="col-md-4 col-sm-4 col-xs-6 single_item design"
									data-source="assets/images/p-3.jpg"
									title="Mockup"
								>
									<img src="assets/images/p-3.jpg" alt="Mockup" />
									<div className="single_item_content">
										<span>Design</span>
										<h6>Mockup</h6>
									</div>
								</a>

								<a
									href="assets/images/p-4.jpg"
									className="col-md-4 col-sm-4 col-xs-6 single_item web"
									data-source="assets/images/p-4.jpg"
									title="Treasure"
								>
									<img src="assets/images/p-4.jpg" alt="Treasure" />
									<div className="single_item_content">
										<span>Web</span>
										<h6>Treasure</h6>
									</div>
								</a>

								<a
									href="assets/images/p-5.jpg"
									className="col-md-4 col-sm-4 col-xs-6 single_item art-direction"
									data-source="assets/images/p-5.jpg"
									title="Daily Note"
								>
									<img src="assets/images/p-5.jpg" alt="Daily Note" />
									<div className="single_item_content">
										<span>Art Direction</span>
										<h6>Daily Note</h6>
									</div>
								</a>

								<a
									href="assets/images/p-6.jpg"
									className="col-md-4 col-sm-4 col-xs-6 single_item branding"
									data-source="assets/images/p-6.jpg"
									title="Handcraft"
								>
									<img src="assets/images/p-6.jpg" alt="Handcraft" />
									<div className="single_item_content">
										<span>Branding</span>
										<h6>Handcraft</h6>
									</div>
								</a>

								<a
									href="assets/images/p-7.jpg"
									className="col-md-4 col-sm-4 col-xs-6 single_item design"
									data-source="assets/images/p-7.jpg"
									title="Pencil"
								>
									<img src="assets/images/p-7.jpg" alt="Pencil" />
									<div className="single_item_content">
										<span>Design</span>
										<h6>Pencil</h6>
									</div>
								</a>

								<a
									href="assets/images/p-8.jpg"
									className="col-md-4 col-sm-4 col-xs-6 single_item web"
									data-source="assets/images/p-8.jpg"
									title="Focus"
								>
									<img src="assets/images/p-8.jpg" alt="Focus" />
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
