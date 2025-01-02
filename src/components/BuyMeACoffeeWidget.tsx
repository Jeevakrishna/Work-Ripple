import { useEffect } from "react";

export default function BuyMeACoffeeWidget() {
	useEffect(() => {
		const script = document.createElement("script");
		script.setAttribute("data-name", "BMC-Widget");
		script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
		script.setAttribute("data-id", "jeevakrishna");  // Replace with your username
		script.setAttribute("data-description", "Support me on Buy me a coffee!");
		script.setAttribute(
			"data-message",
			"Thank you for using WorkRipple. If you found this app useful, please consider buying us a coffee. ☕"
		);
		script.setAttribute("data-color", "#FF5F5F");
		script.setAttribute("data-position", "top");
		script.setAttribute("data-x_margin", "18");
		script.setAttribute("data-y_margin", "18");
		script.async = true;

		// Append the script to the head
		document.head.appendChild(script);

		// Dispatch event once the script is loaded
		script.onload = () => {
			const evt = document.createEvent("Event");
			evt.initEvent("DOMContentLoaded", false, false);
			window.dispatchEvent(evt);
		};

	}, []);

	return <div id="supportByBMC" />;
}
