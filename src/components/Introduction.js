import React from 'react'
import man from '../assets/images/man-01.png';

function Introduction() {
	return (
		<>
			<section className="banner section-padding">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-7">
							<ul className="list-inline social">
								<li className="list-inline-item">
									<a href="javascript"><i className="fa fa-facebook"></i></a>
								</li>
								<li className="list-inline-item">
									<a href="javascript"><i className="fa fa-twitter"></i></a>
								</li>
								<li className="list-inline-item">
									<a href="javascript"><i className="fa fa-pinterest"></i></a>
								</li>
								<li className="list-inline-item">
									<a href="javascript"><i className="fa fa-instagram"></i></a>
								</li>
								<li className="list-inline-item">
									<a href="javascript"><i className="fa fa-behance"></i></a>
								</li>
							</ul>
							<div className="align-middle">
								<h1>I am Jonathan Doe</h1>
								<p>
									i,m Jonathan, professional web developer with long time
									experience in this field
								</p>
								<ul className="list-inline">
									<li className="list-inline-item">
										<a href="javascriptportfolio">My Portfolio </a>
									</li>
									<li className="list-inline-item">
										<a
											className="play-btn popup-video"
											href="https://www.youtube.com/watch?v=JI2r_WVRucU"
										><i className="fa fa-play"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="about_me_image wow fadeInUp" data-wow-delay="0.2s">
								<img width={508}
									height={729}
									src={man}
									className="attachment-full size-full"
									alt="about me" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Introduction;