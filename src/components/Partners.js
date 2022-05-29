import React from 'react'

import logo01 from '../assets/images/logo-01-w.png';
import logo02 from '../assets/images/logo-02-w.png';
import logo03 from '../assets/images/logo-03-w.png';
import logo04 from '../assets/images/logo-04-w.png';
import logo05 from '../assets/images/logo-05-w.png';

function Partners() {
	return (
		<>
			<section className="section-partner alt-color">
				<div className="container">
					<ul className="list-inline partner justify-content-center">
						<li className="list-inline-item">
							<a target='"_blank"' href="javascript">
								<img src={logo01} alt="client logo"
								/></a>
						</li>
						<li className="list-inline-item">
							<a target='"_blank"' href="javascript">
								<img src={logo04} alt="client logo"
								/></a>
						</li>
						<li className="list-inline-item">
							<a target='"_blank"' href="javascript">
								<img src={logo03} alt="client logo"
								/></a>
						</li>
						<li className="list-inline-item">
							<a target='"_blank"' href="javascript">
								<img src={logo02} alt="client logo"
								/></a>
						</li>
						<li className="list-inline-item">
							<a target='"_blank"' href="javascript">
								<img src={logo05} alt="client logo"
								/></a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}

export default Partners
