export default function cookieConsent() {
  if (!localStorage.getItem("cookieConsent")) {
    console.log("cookie consent false");
    document.getElementById("cookie-consent-popup").style.display = "flex";
  }
  document
    .getElementById("cookie-consent-accept")
    .addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      console.log("cookie consent true");
      document.getElementById("cookie-consent-popup").style.display = "none";
    });
}
