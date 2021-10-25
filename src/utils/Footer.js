import React from 'react'

import Logo from '../assets/images/logo.png';


function Footer() {
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
							<p className="footer-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exe- rcitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
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
				Copyright © 2020 <a href="void()">Ami.Ke</a> All Rights Reserved by
				ThemeBing.
			</div>
		</footer>
	)
}

export default Footer
