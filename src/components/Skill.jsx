import React, { useEffect, useRef } from "react";
import "./skill.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skill() {

	const skillsRef = useRef(null)
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => { 
		const ctx = gsap.context(() => {
			gsap.from([".languages div"], {
				x: -30,
				opacity: 0,
				stagger: 0.1,
				duration: 0.7,
				scrollTrigger: {
					trigger: ".languages",
					start: "top 70%",
					scrub: false,
				}
			})
			gsap.from([".libraries div"], {
				x: -20,
				opacity: 0,
				stagger: 0.1,
				duration: 1,
				scrollTrigger: {
					trigger: ".libraries",
					start: "top 70%",
					scrub: false,
				}
			})
		 }, skillsRef);

		return () => ctx.revert();
	}, [])

	return (
		<div id="skills" className="skills-container" ref={skillsRef}>
			<div className="heading">
				<h1 className="numbered-heading">Skills</h1>
			</div>
			<div className="skills">
          <h3>Languages</h3>
        <div className="languages">
					<div>HTML </div>
					<div>CSS</div>
					<div>JavaScript</div>
					<div>Node.js</div>
					<div>C++</div>
					<div>mySQL</div>
        </div>
        <h3>Libraries/Frameworks</h3>
        <div className="libraries">
					<div>React</div>
					<div>TailwindCSS</div>
					<div>Redux</div>
					<div>GSAP</div>
					<div>Locomotive-Scroll</div>
					<div>Express</div>
					<div>Mongoose</div>
				</div>
			</div>
		</div>
	);
}

export default Skill;
