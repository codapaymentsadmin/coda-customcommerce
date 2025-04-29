document.documentElement.setAttribute("data-theme", "light");
document.addEventListener("DOMContentLoaded", () => {
	const hamburgBtn = document.getElementById("hamburger-btn");
	const mobileDrawer = document.getElementById("mobile-drawer");
	const infobars = document.querySelectorAll(".infobar-component");

	hamburgBtn.addEventListener("click", () => {
		if (mobileDrawer.classList.contains("hidden")) {
			mobileDrawer.classList.remove("hidden");
			hamburgBtn.classList.add("open");
		} else {
			mobileDrawer.classList.add("hidden");
			hamburgBtn.classList.remove("open");
		}
	});

	if (infobars) {
		infobars.forEach((bar) => {
			const closeButton = bar.querySelector(".infobar-dismiss");

			closeButton.addEventListener("click", () => {
				bar.classList.add("hidden");
			});
		});
	}
});
