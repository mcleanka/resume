import React from 'react'
import Logo from '../assets/images/logo.png';
import $ from "jquery";
import Nav from './Nav';

function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<a href="index.html" className="custom-logo-link" rel="home">
						<img src={Logo} className="custom-logo" alt="Amike" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<Nav />
				</div>
			</nav>
		</header>
	)
}

$(document).ready(() => {
	$(window).on('scroll', function () {
		if ($(document).scrollTop() > 80) {
			$('.navbar').addClass('fixed-top');
		} else {
			$('.navbar').removeClass('fixed-top');
		}
	});
})

export default Header
