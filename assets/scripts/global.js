document.documentElement.setAttribute("data-theme", "light");
window.zendeskTranslations = {
	contactSupport: "{{dc 'hc_-_contact_support'}}",
};
document.addEventListener("DOMContentLoaded", () => {
	const hamburgBtn = document.getElementById("hamburger-btn");
	const mobileDrawer = document.getElementById("mobile-drawer");
	const infobars = document.querySelectorAll(".infobar-component");
	const dynamicLink = document.getElementById("dynamic-link");
	const dynamicLinkMobile = document.getElementById("dynamic-link-mobile");
	const searchInput = document.getElementById("query");
	const copyrightText = document.querySelector(".copyright");
	const askCodee = document.getElementById("ask-codee");

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

	// if (searchInput) {
	// 	searchInput.setAttribute("placeholder", searchInput.placeholder);
	// }

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
			dynamicLink.textContent = dynamicLink.dataset.helpCenter;
			dynamicLinkMobile.textContent = dynamicLink.dataset.helpCenter;
		} else {
			dynamicLink.href = `/hc/${currentLocale}/requests/new`;
			dynamicLinkMobile.href = `/hc/${currentLocale}/requests/new`;
			dynamicLink.innerHTML = dynamicLink.dataset.contactText;
			dynamicLinkMobile.innerHTML = dynamicLink.dataset.contactText;
		}
	}

	// FORMS
	const inquirySelect = document.getElementById(
		"request_custom_fields_10519906052751",
	);
	const warningText = document.getElementById("ingame-warning");
	const submitButton = document.querySelector(
		'input[type="submit"][name="commit"]',
	);

	if (inquirySelect) {
		inquirySelect.addEventListener("change", () => {
			if (
				inquirySelect.value === "inquiry_type_cc_in-game_inquiry_" ||
				inquirySelect.value === "inquiry_type_cc_in-game_txn_"
			) {
				submitButton.disabled = true;
				warningText.classList.remove("hidden");
			} else {
				submitButton.disabled = false;
				warningText.classList.add("hidden");
			}
		});
	}
});
