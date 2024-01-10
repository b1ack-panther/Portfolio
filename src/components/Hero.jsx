import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Hero.scss";
import gsap from "gsap";

function Hero() {
	const heroRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".greet, .hero-text h1, .hero-para, .scroll-below", {
				opacity: 0,
				y: 30,
				duration: 1,
				stagger: 0.1,
			}, "+=0.6");
		}, heroRef);
		return () => ctx.revert();
	}, []);

	useEffect(() => {
		const para = document.querySelector(".hero-para p");
		let percent = -30;

		const timeline = setInterval(() => {
			para.style.backgroundSize = percent + "% 100%";
			percent += 2;
			if (percent > 100) {
				clearInterval(timeline);
			}
		}, 50);
		return () => clearInterval(timeline);
	}, []);
	return (
		<div className="hero-container" ref={heroRef}>
			<p className="greet">Hi, my name is</p>
			<div className="hero-text">
				<h1>Saurabh Singh.</h1>
				<h1>I specialize in frontend development.</h1>
			</div>
			<div className="hero-para">
				<p>
					I'm Frontend focused Web Developer combining beautiful design with
					codes and building exceptional Web Applications that leads to the
					success of the overall product.
				</p>
			</div>
			<div className="scroll-below">
				<button
					onClick={() => {
						window.location.href = "#about";
					}}
				>
					See my Portfolio
				</button>
			</div>
		</div>
	);
}

export default Hero;
