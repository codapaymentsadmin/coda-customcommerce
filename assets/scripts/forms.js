document.addEventListener("DOMContentLoaded", () => {
	const inquirySelect = document.getElementById(
		"request_custom_fields_12825829898895"
	);
	const warningText = document.getElementById("ingame-warning");
	const submitButton = document.querySelector(
		'input[type="submit"][name="commit"]'
	);

	console.log("Inquiry Select Element:", inquirySelect);
	console.log("Warning Text Element:", warningText);
	console.log("Submit Button Element:", submitButton);

	if (inquirySelect) {
		inquirySelect.addEventListener("change", () => {
			if (inquirySelect.value === "in_game_inquiry_r6m") {
				submitButton.disabled = true;
				warningText.classList.remove("hidden");
			} else {
				submitButton.disabled = false;
				warningText.classList.add("hidden");
			}
		});
	}
});
