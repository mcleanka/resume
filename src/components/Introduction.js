import React from 'react'

import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";

import { FaPlay } from 'react-icons/fa';
import man from '../assets/images/man-01.png';
import SocialLinks from '../database/SocialLinks';
import Typical from 'react-typical';

function Introduction() {
	const Intro = {
		header: "Hello, Welcome!!!",
		description: "Get your professional, mobile friendly and secure website 💻",
		links: [
			{
				name: "About Me",
			},
			{
				href: "https://www.youtube.com/channel/UCkU30EjfzqaCeGZGU6qTtew",
				icon: <FaPlay />,
				class: "play-btn popup-video"
			},
		]
	};

	return (
		<Router>
			<section className="banner section-padding pt-0">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-7">

							<ul className="list-inline social">
								{
									SocialLinks.map((link, index) => {
										return (
											<li className="list-inline-item" key={index}>
												<Link target={"_blank"} to={{ pathname: link.url }}>{link.icon}</Link>
											</li>
										);
									})
								}
							</ul>

							<div className="align-middle mt-5">

								<Typical
									loop={Infinity}
									steps={[
										"Welcome!!!",
										1000,
										"I'm Mclean Kasambala 😎",
										1000,
										"Full Stack Developer!📱",
										1000,
										"Computer Engineer!💻",
										1000
									]}
									wrapper="h2"
									className="h1"
								/>

								<p>{Intro.description}</p>

								<ul className="list-inline">
									{
										Intro.links.map((link, key) => {
											return (
												<li className="list-inline-item" key={key}>
													<Link target={"_blank"} className={link.class ?? null} to={{ pathname: link.href ?? null }}>{link.name ?? null} {link.icon ?? null}</Link>
												</li>
											)
										})
									}
								</ul>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="about_me_image wow fadeInUp" data-wow-delay="0.2s">
								<img width={508} height={400} src={man} className="attachment-full size-full" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Router>
	)
}

export default Introduction;