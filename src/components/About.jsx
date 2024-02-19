import React, { useEffect, useRef } from "react";
import "./about.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
	const aboutRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".photo", {
				opacity: 0,
				duration: 0.6,
				delay: 0.2,
				y: 50,
				scrollTrigger: {
					trigger: ".photo",
					start: "top 80%",
					scrub: false,
				},
			});

			gsap.to(".about-text p", {
				backgroundSize: "100% 100%",
				scrollTrigger: {
					trigger: ".about-text p",
					start: "top 80%",
					end: "top 10%",
					scrub: true,
				},
			});
		}, aboutRef);
		return () => ctx.revert();
	}, []);

	return (
		<div id="about" className="about-container" ref={aboutRef}>
			<div className="heading">
				<h1 className="numbered-heading">About Me</h1>
			</div>
			<div className="text">
				<div className="about-text">
					<p>
						Hello! My name is Saurabh Singh, and I enjoy creating things that
						exist on the internet. I take pleasure in learning new techniques to
						craft websites. <br /> <br /> My interest in web development began
						back in 2021 when I encountered an interactive 3D website. Although
						those are my ultimate goals, I am confident that with my current
						skill level, I can develop websites that will astound you. <br />{" "}
						<br />
						Presently, I am pursuing my B.Tech. from IIT Roorkee (2024). I am
						open to job/internship opportunities where I can contribute, learn,
						and grow. If you have a fitting opportunity that aligns with my
						skills and experience, please do not hesitate to contact me.
					</p>
				</div>
				<div className="photo">
					<img src="/profile_photo.png" alt="profile_photo" />
				</div>
			</div>
		</div>
	);
}

export default About;
