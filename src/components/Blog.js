import React from 'react'

import blog1 from "../assets/images/blog-1.jpg"
import blog2 from "../assets/images/blog-2.jpg"
import blog3 from "../assets/images/blog-3.jpg"



function Blog() {

	return (
		<>
			<section id="blog" className="section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-title wow fadeInUp" data-wow-delay="0.2s">
								<span>Latest Post</span>
								<h2>Latest blog<span className="span-inline"></span></h2>
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
						<div className="col-lg-4 col-md-6">
							<div className="blog-item mb-50 wow fadeInLeft" data-wow-delay="0.2s">
								<div className="blog-thumb">
									<a href="single.html"
									><img
											src={blog1}
											alt="Ten Secrets You Will Not Want To Know"
										/></a>
								</div>
								<div className="blog-content s-blog-content">
									<div className="blog-meta mb-15">
										<ul className="list-inline">
											<li className="list-inline-item">
												<i className="fa fa-user"></i>By<a href="javascript"> admin</a>
											</li>
											<li className="list-inline-item">
												<i className="fa fa-calendar-o"></i>Tuesday
											</li>
											<li className="list-inline-item">
												<i className="fa fa-comments"></i>3
											</li>
										</ul>
									</div>
									<h5>
										<a href="single.html"
										>Ten Secrets You Will Not Want To Know</a>
									</h5>
									<a href="single.html"
									>Read More<i className="fa fa-fw fa-arrow-circle-right"></i></a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="blog-item mb-50 wow fadeInLeft" data-wow-delay="0.4s">
								<div className="blog-thumb">
									<a href="single.html"
									><img
											src={blog2}
											alt="You&#8217;ve gotta dance like there&#8217;s nobody watching"
										/></a>
								</div>
								<div className="blog-content s-blog-content">
									<div className="blog-meta mb-15">
										<ul className="list-inline">
											<li className="list-inline-item">
												<i className="fa fa-user"></i>By<a href="javascript"> admin</a>
											</li>
											<li className="list-inline-item">
												<i className="fa fa-calendar-o"></i>Wednesday
											</li>
											<li className="list-inline-item">
												<i className="fa fa-comments"></i>3
											</li>
										</ul>
									</div>
									<h5>
										<a href="single.html">You&#8217;ve gotta dance like there&#8217;s nobody
											watching</a>
									</h5>
									<a href="single.html"
									>Read More<i className="fa fa-fw fa-arrow-circle-right"></i></a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="blog-item mb-50 wow fadeInLeft" data-wow-delay="0.6s">
								<div className="blog-thumb">
									<a href="single.html"
									><img
											src={blog3}
											alt="I must explain to you how all this mistaken idea"
										/></a>
								</div>
								<div className="blog-content s-blog-content">
									<div className="blog-meta mb-15">
										<ul className="list-inline">
											<li className="list-inline-item">
												<i className="fa fa-user"></i>By<a href="javascript"> admin</a>
											</li>
											<li className="list-inline-item">
												<i className="fa fa-calendar-o"></i>Saturday
											</li>
											<li className="list-inline-item">
												<i className="fa fa-comments"></i>3
											</li>
										</ul>
									</div>
									<h5>
										<a href="single.html"
										>I must explain to you how all this mistaken idea</a>
									</h5>
									<a href="single.html"
									>Read More<i className="fa fa-fw fa-arrow-circle-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Blog
