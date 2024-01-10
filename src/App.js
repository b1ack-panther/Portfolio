import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import gsap from "gsap";

function App() {
	const [preloader, setpreloader] = useState(true);
	const pathRef = useRef(null);
	const loaderRef = useRef(null);

	useEffect(() => {
		if (preloader) {
			setTimeout(() => {
				setpreloader(false);
			}, 2500);

			const ctx = gsap.context(() => {
				const path = pathRef.current;
				const pathLength = path.getTotalLength();
				const tl = gsap.timeline();

				tl.fromTo(
					path,
					{
						strokeDasharray: `0 ${pathLength}`,
					},
					{
						strokeDasharray: `${pathLength} ${pathLength}`,
						duration: 1,
						ease: "power1.inOut",
					}
				)
					.fromTo(
					"#loaderName",
					{
						opacity: 0,
					},
					{
						opacity: 1,
						duration: 2,
					}
				);
			}, loaderRef.current);
			return () => ctx.revert();
		}
	});

	useEffect(() => {
		var bg = document.documentElement;
		bg.addEventListener("mousemove", (e) => {
			bg.style.setProperty("--x", e.clientX + "px");
			bg.style.setProperty("--y", e.clientY + "px");
		});
	}, []);

	return (
		<div className="App">
			{preloader ? (
				<div className="loader" ref={loaderRef}>
					<svg
						id="loadersvg"
						viewBox="0 0 150 150"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						style={{ strokeLinecap: "round" }}
					>
						<g id="loaderLogo">
							<path
								ref={pathRef}
								id="loaderOutline"
								d="M16.0481 40.9641L75 6.9282L133.952 40.9641V109.036L75 143.072L16.0481 109.036V40.9641Z"
								stroke="currentColor"
								strokeWidth="12"
							/>
							<text
								id="loaderName"
								fill="currentColor"
								xmlSpace="preserve"
								style={{
									whiteSpace: "pre",
									fontFamily: "Inter",
									fontSize: 70,
									fontWeight: 900,
									letterSpacing: "0em",
									transformBox: "fill-box",
								}}
							>
								<tspan x="51" y="100.455">
									S
								</tspan>
							</text>
						</g>
					</svg>
				</div>
			) : (
				<>
					<Navbar />
					<div className="light"></div>
				</>
			)}
		</div>
	);
}

export default App;
