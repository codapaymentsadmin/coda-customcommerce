document.documentElement.setAttribute("data-theme", "light");
window.zendeskTranslations = {
	contactSupport: "Contact Support",
};
document.addEventListener("DOMContentLoaded", () => {
	const hamburgBtn = document.getElementById("hamburger-btn");
	const mobileDrawer = document.getElementById("mobile-drawer");
	const infobars = document.querySelectorAll(".infobar-component");
	const dynamicLink = document.getElementById("dynamic-link");
	const dynamicLinkMobile = document.getElementById("dynamic-link-mobile");
	const searchInput = document.getElementById("query");
	const searchButton = document.querySelector("input[type='submit'][name='commit']");
	const copyrightText = document.querySelector(".copyright");
	const gtElement = document.getElementById("gt_float_wrapper");

	const currentPath = window.location.pathname;
	const currentLocale = window.location.pathname.split("/")[2];

	if (gtElement) {
		gtElement.style.bottom = "40px";
	}

	hamburgBtn.addEventListener("click", () => {
		if (mobileDrawer.classList.contains("hidden")) {
			mobileDrawer.classList.remove("hidden");
			hamburgBtn.classList.add("open");
		} else {
			mobileDrawer.classList.add("hidden");
			hamburgBtn.classList.remove("open");
		}
	});

	if (searchInput) {
		searchInput.classList.add("notranslate");
	}

	if (searchButton) {
		searchButton.classList.add("notranslate");
	}

	if (copyrightText) {
		copyrightText.innerHTML = `&copy; ${new Date().getFullYear() + " "}`;
	}

	if (infobars) {
		infobars.forEach((bar) => {
			const closeButton = bar.querySelector(".infobar-dismiss");

			if (!closeButton) return;
			closeButton.addEventListener("click", () => {
				bar.classList.add("hidden");
			});
		});
	}

	if (dynamicLink && dynamicLinkMobile) {
		if (currentPath.includes("/requests/new")) {
			dynamicLink.href = `/hc/${currentLocale}`;
			dynamicLinkMobile.href = `/hc/${currentLocale}`;
			dynamicLink.textContent = "Help Center";
			dynamicLinkMobile.textContent = "Help Center";
		} else {
			dynamicLink.href = `/hc/${currentLocale}/requests/new`;
			dynamicLinkMobile.href = `/hc/${currentLocale}/requests/new`;
			dynamicLink.innerHTML = dynamicLink.dataset.contactText;
			dynamicLinkMobile.innerHTML = dynamicLink.dataset.contactText;
		}
	}
});
