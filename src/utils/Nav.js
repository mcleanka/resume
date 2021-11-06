import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import NavLinks from '../database/NavLinks';

function Nav() {
	return (
		<Router>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul id="menu-primary" className="navbar-nav ml-auto">
					{
						NavLinks.map((link, index) => {
							return (
								<li key={index}>
									<Link to={link.url} className="nav-link">{link.label}</Link>
								</li>
							);
						})
					}
				</ul>
			</div>
		</Router>
	)
}

export default Nav
