import React from 'react'

function Nav() {
	return (
		<>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul id="menu-primary" className="navbar-nav ml-auto">
					<li>
						<a href="./" className="nav-link">Home</a>
					</li>
					<li>
						<a href="#about" className="nav-link">About</a>
					</li>
					<li>
						<a href="#services" className="nav-link">Services</a>
					</li>
					<li>
						<a href="#skills" className="nav-link">Skills</a>
					</li>
					<li>
						<a href="#contact" className="nav-link">Contact Me</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Nav
