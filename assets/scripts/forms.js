document.addEventListener("DOMContentLoaded", () => {
	const inquirySelect = document.getElementById(
		"request_custom_fields_10519906052751"
	);
	const warningText = document.getElementById("ingame-warning");
	const submitButton = document.querySelector(
		'input[type="submit"][name="commit"]'
	);

	console.log("Form script loaded.");

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
