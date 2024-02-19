import React, { useEffect, useRef } from "react";
import "./projects.scss";
import { mainProjects, otherProjects } from "../assets.js";
import gsap from "gsap";

function Card({ title, text, arr, github, live, projectImg, index }) {
	return (
		<div className={`card project-card ${index%2===0 ? "even-card" : "odd-card"}`} key="title">
			<div className="card-img">
				<a href={live} target="_blank">
					<img src={projectImg} alt="projectimage" />
				</a>
			</div>
			<div className="card-details">
				<p>Featured Project</p>
				<h2>{title}</h2>
				<div className="box">{text}</div>
				<div className="techs">
					{arr.map((tech) => {
						return <p key={tech}>{tech}</p>;
					})}
				</div>
				<div className="links">
					<a href={github} target="_blank">
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
					<a href={live} target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-external-link"
						>
							<title>Live Website</title>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
							<polyline points="15 3 21 3 21 9"></polyline>
							<line x1="10" y1="14" x2="21" y2="3"></line>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}

function OtherCard({ title, text, arr, github, live }) {
	return (
		<div className="other-card project-card">
			<div className="icons">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-folder"
				>
					<title>Folder</title>
					<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
				</svg>
				<div>
					<a href={github} target="_blank">
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
					<a href={live} target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-external-link"
						>
							<title>Live Website</title>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
							<polyline points="15 3 21 3 21 9"></polyline>
							<line x1="10" y1="14" x2="21" y2="3"></line>
						</svg>
					</a>
				</div>
			</div>
			<a href={live} target="_blank">
				<h2>{title}</h2>
			</a>
			<p>{text}</p>
			<div className="techs">
				{arr.map((tech) => {
					return <p key={tech}>{tech}</p>;
				})}
			</div>
		</div>
	);
}

function Projects() {
	const projectsRef = useRef(null);

	// useEffect(() => {
	// 	const config = { threshold: 0.5 };
	// 	const observer = new IntersectionObserver((entries) => {
	// 		const targets = entries
	// 			.filter((entry) => entry.isIntersecting)
	// 			.map((entry) => {
	// 				observer.unobserve(entry.target);
	// 				return entry.target;
	// 			});

	// 		gsap.to(
	// 			targets,{
	// 				opacity: 1,
	// 				y: 0,
	// 				stagger: 0.2,
	// 				duration: 1,
	// 			}
	// 		);
	// 	}, config);

	// 	const projectCards = document.querySelectorAll(".project-card");
	// 	projectCards.forEach((box) => {
	// 		observer.observe(box);
	// 	});

	// 	return () => {
	// 		observer.disconnect();
	// 	};
	// }, []);

	useEffect(() => {
		function animate(entries) {
			let targets = entries
				.filter((entry) => entry.isIntersecting)
				.map((entry) => {
					observer.unobserve(entry.target);
					return entry.target;
				});

			if (targets.length) {
				gsap.to(targets, {
					opacity: 1,
					y: 0,
					stagger: 0.2,
					ease: "power2.out",
					duration: 1,
				});
			}
		}
		const observer = new IntersectionObserver(animate, { threshold: 0 });

		document.querySelectorAll(".project-card").forEach((box) => {
			observer.observe(box);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div id="projects" className="projects-container" ref={projectsRef}>
			<div className="heading">
				<h1 className="numbered-heading">Projects</h1>
			</div>
			<div className="projects">
				{mainProjects.map((proj, index) => {
					return <Card key={index} {...proj} index={index} />;
				})}
			</div>
			<div className="other-projects-container">
				<h2>Other Noteworthy Projects</h2>
				<div className="other-projects">
					{otherProjects.map((proj, index) => (
						<OtherCard key={index} {...proj} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
