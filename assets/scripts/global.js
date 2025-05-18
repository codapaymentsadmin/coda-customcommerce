document.documentElement.setAttribute("data-theme", "light");
document.addEventListener("DOMContentLoaded", () => {
	const hamburgBtn = document.getElementById("hamburger-btn");
	const mobileDrawer = document.getElementById("mobile-drawer");
	const infobars = document.querySelectorAll(".infobar-component");
	const dynamicLink = document.getElementById("dynamic-link");
	const dynamicLinkMobile = document.getElementById("dynamic-link-mobile");

	const currentPath = window.location.pathname;
	const currentLocale = window.location.pathname.split("/")[2];

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

	if (currentPath.includes("/requests/new")) {
		dynamicLink.href = `/hc/${currentLocale}`;
		dynamicLinkMobile.href = `/hc/${currentLocale}`;
		dynamicLink.textContent = "FAQs";
		dynamicLinkMobile.textContent = "FAQs";
	} else {
		dynamicLink.href = `/hc/${currentLocale}/requests/new`;
		dynamicLinkMobile.href = `/hc/${currentLocale}/requests/new`;
		dynamicLink.textContent = "Contact Support";
		dynamicLinkMobile.textContent = "Contact Support";
	}
});
