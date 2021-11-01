import React from 'react'

import Logo from '../assets/images/logo.png';


function Footer() {
	const date = new Date();

	return (
		<footer className="text-center">
			<div className="site-footer">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9 col-sm-10 mb-4">
							<div className="mb-5">
								<a href="index.html" className="custom-logo-link" rel="home">
									<img
										width="300"
										height="72"
										src={Logo}
										className="custom-logo"
										alt="Amike"
									/>
								</a>
							</div>
							<div className="footer-social">
								<ul className="list-inline">
									<li className="list-inline-item">
										<a href="void()"><i className="fa fa-facebook"></i></a>
									</li>
									<li className="list-inline-item">
										<a href="void()"><i className="fa fa-twitter"></i></a>
									</li>
									<li className="list-inline-item">
										<a href="void()"><i className="fa fa-instagram"></i></a>
									</li>
									<li className="list-inline-item">
										<a href="void()"><i className="fa fa-pinterest"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright-text">
				© {date.getFullYear()} <a href="void()">Mclean.CK</a> All Rights Reserved.
			</div>
		</footer>
	)
}

export default Footer
