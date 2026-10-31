const btn = document.getElementById("hamburger-btn");
const menu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

// 1. Toggle Mobile Menu & Animasi Silang Icon
btn.addEventListener("click", () => {
	btn.classList.toggle("active");
	menu.classList.toggle("hidden");
});

// Tutup menu saat salah satu link diklik
mobileLinks.forEach((link) => {
	link.addEventListener("click", () => {
		btn.classList.remove("active");
		menu.classList.add("hidden");
	});
});

// 2. Helper Reusable Efek Tilt 3D (Miring saat kursor di atas elemen)
function applyTilt(element, maxRotate = 15, scaleVal = 1.03) {
	element.addEventListener("mousemove", (e) => {
		const rect = element.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -maxRotate;
		const rotateY = ((x - centerX) / centerX) * maxRotate;

		element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleVal})`;
	});

	element.addEventListener("mouseleave", () => {
		element.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
	});
}

// Terapkan efek kemiringan (tilt) pada tombol hamburger dan dropdown menu
applyTilt(btn, 20, 1.05);
applyTilt(menu, 8, 1.02);
