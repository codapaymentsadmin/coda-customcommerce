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

		// Make widget sticky but stop above footer to prevent overlap
		function adjustGTranslateWidget() {
			const footer = document.querySelector('.footer');
			const gtWidget = document.querySelector('.gt_float_switcher');

			if (!footer || !gtWidget) return;

			const footerRect = footer.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const widgetHeight = gtWidget.offsetHeight || 50; // Approximate widget height

			// Calculate the position where widget would be with default bottom: 40px
			const widgetBottomPosition = windowHeight - 40 - widgetHeight;

			// Check if widget would overlap with footer
			if (footerRect.top < widgetBottomPosition + widgetHeight) {
				// Position widget just above the footer with 10px gap
				const offset = windowHeight - footerRect.top + 10;
				gtElement.style.bottom = offset + 'px';
			} else {
				// Reset to default position when footer is not visible
				gtElement.style.bottom = '40px';
			}
		}

		// Run on scroll and resize
		window.addEventListener('scroll', adjustGTranslateWidget);
		window.addEventListener('resize', adjustGTranslateWidget);

		// Run after gtranslate widget loads (with delay to ensure it's rendered)
		setTimeout(adjustGTranslateWidget, 1000);
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
		if (currentPath.includes("/categories/13549616536975-eFootball")) {
			dynamicLink.classList.add("hidden")
			dynamicLinkMobile.classList.add("hidden")
		} else {
			dynamicLink.classList.remove("hidden")
			dynamicLinkMobile.classList.remove("hidden")
		}

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
