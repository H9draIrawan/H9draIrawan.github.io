document.body.classList.add("js-ready");

const revealTargets = document.querySelectorAll(
	"#about > div, #skills > div, #projects > div, #contact > div",
);

if ("IntersectionObserver" in window) {
	const revealObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12 },
	);

	revealTargets.forEach((target) => {
		target.classList.add("reveal");
		revealObserver.observe(target);
	});
} else {
	revealTargets.forEach((target) => target.classList.add("is-visible"));
}
