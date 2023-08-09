const nav = document.querySelector(".nav__items");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBar = document.querySelector(".nav__navbar");
const navLinks = document.querySelectorAll(".nav__item");

const handleNav = () => {
	nav.classList.toggle("nav__items--active");
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const handleScroll = () => {
	const scrollPosition = window.scrollY;

	const breakpoint = 50;

	if (scrollPosition > breakpoint) {
		navBar.classList.add("nav-transparent");
	} else {
		navBar.classList.remove("nav-transparent");
	}
};

const isAtTop = () => {
	return window.scrollY === 0;
};

const closeNav = () => {
	nav.classList.remove("nav__items--active");
	handleNavItemsAnimation();
};

navLinks.forEach((link) => {
	link.addEventListener("click", closeNav);
});

window.addEventListener("scroll", () => {
	if (!nav.classList.contains("nav__items--active")) {
		if (isAtTop()) {
			navBar.classList.remove("nav-transparent");
		} else {
			navBar.classList.add("nav-transparent");
		}
	}
});

navBtn.addEventListener("click", handleNav);

navLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();

		const targetSection = document.querySelector(link.getAttribute("href"));
		const offsetPercent = 12; // Twój odstęp w procentach

		const targetPosition =
			targetSection.getBoundingClientRect().top +
			window.scrollY -
			(offsetPercent / 100) * window.innerHeight;

		window.scrollTo({
			top: targetPosition,
			behavior: "smooth",
		});

		closeNav();
	});
});
