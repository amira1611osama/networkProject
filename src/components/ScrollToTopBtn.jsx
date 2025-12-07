import { useState, useEffect } from "react";
import "../Styles/ScrollToTopBtn.css";

function ScrollToTopBtn() {
	const [activeScrollBtn, setActiveScrollBtn] = useState(false);

	function handleScrollToTopBtn() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		function toggleVisibility() {
			if (window.scrollY > 200) {
				setActiveScrollBtn(true);
			} else {
				setActiveScrollBtn(false);
			}
		}
		window.addEventListener("scroll", toggleVisibility);

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<>
			{activeScrollBtn && (
				<button
					className="scroll-to-top"
					title="Go to top"
					aria-label="Scroll to top"
					onClick={handleScrollToTopBtn}>
					<i class="fa-solid fa-angle-up" />
				</button>
			)}
		</>
	);
}

export default ScrollToTopBtn;
