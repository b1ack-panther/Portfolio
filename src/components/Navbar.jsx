import React, { useLayoutEffect, useRef, useState } from "react";
import "./Navbar.scss";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skill from "./Skill";
import gsap from "gsap";

function Navbar() {
	const [menu, setMenu] = useState(false);
	const rightnavRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
			tl.from(".right-nav *", {
				y: -40,
				stagger: 0.1,
				duration: 0.4,
				opacity: 0,
			});
			tl.from(".left-sidebar, .right-sidebar", {
				opacity: 0
			}, "+=1.3")
		}, rightnavRef);
		return () => ctx.revert();
	}, []);

	return (
		<div className="layout" ref={rightnavRef}>
			<div className="navbar">
				<div className="left-nav">
					<svg
						id="slogo"
						viewBox="0 0 150 150"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="logo">
							<path
								id="outline"
								d="M16.0481 40.9641L75 6.9282L133.952 40.9641V109.036L75 143.072L16.0481 109.036V40.9641Z"
								stroke="currentColor"
								strokeWidth="12"
							/>
							<text
								id="name"
								fill="currentColor"
								xmlSpace="preserve"
								style={{
									whiteSpace: "pre",
									fontFamily: "Inter",
									fontSize: 70,
									fontWeight: 900,
									letterSpacing: "0em",
								}}
							>
								<tspan x="51" y="100.455">
									S
								</tspan>
							</text>
						</g>
					</svg>
				</div>
				<div className={`right-nav ${menu ? "show" : ""}`}>
					<ol className="links">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<div className="resume">
							<button
								onClick={() => {
									window.open(
										"https://drive.google.com/file/d/1kMkXg3yznKIMhBryAh3Ewj1Qrq5PhQFH/view?usp=sharing",
										"_blank"
									);
								}}
							>
								Resume
							</button>
						</div>
					</ol>
				</div>
				<button className="hamburger-btn" onClick={() => setMenu(!menu)}>
					<div className={`hamburger-icon ${menu ? "show" : ""}`}></div>
				</button>
			</div>
			<div className="left-sidebar">
				<ul className="social-media">
					<li>
						<a
							target="_blank"
							href="https://github.com/b1ack-panther"
							aria-label="GitHub"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-github"
							>
								<title>GitHub</title>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://www.instagram.com/saurabh_singh8604"
							aria-label="Instagram"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-instagram"
							>
								<title>Instagram</title>
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
							</svg>
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://twitter.com/b1ack_pan1her"
							aria-label="Twitter"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-twitter"
							>
								<title>Twitter</title>
								<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
							</svg>
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/saurabh-singh-6b60a321b/"
							aria-label="Linkedin"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-linkedin"
							>
								<title>LinkedIn</title>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect x="2" y="9" width="4" height="12"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						</a>
					</li>
					<li>
						<a target="_blank" href="#codepen" aria-label="Codepen">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-codepen"
							>
								<title>CodePen</title>
								<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
								<line x1="12" y1="22" x2="12" y2="15.5"></line>
								<polyline points="22 8.5 12 15.5 2 8.5"></polyline>
								<polyline points="2 15.5 12 8.5 22 15.5"></polyline>
								<line x1="12" y1="2" x2="12" y2="8.5"></line>
							</svg>
						</a>
					</li>
				</ul>
				<span className="verticle-line"></span>
			</div>
			<div className="main-body">
				<Hero />
				<About />
				<Skill />
				<Projects />
				<Contact />
			</div>
			<div className="right-sidebar">
				<a href="mailto:saurabh8604vns@gmail.com">saurabh8604vns@gmail.com</a>
				<span className="verticle-line"></span>
			</div>
		</div>
	);
}

export default Navbar;
