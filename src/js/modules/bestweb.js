export default function bestweb() {
  const bwLogo = document.querySelector(".js-bw-logo");
  const bwLightTheme =
    "--bw-logo: #484848; --bw-logo-text:#fff; --bw-text:#fff; --bw-text-hover:#fff; --bw-opacity:1; --bw-opacity-hover:0";
  const bwLightThemeHover =
    "--bw-logo: #676767; --bw-logo-text:#fff; --bw-text:#fff; --bw-text-hover:#fff; --bw-opacity:0; --bw-opacity-hover:1";
  const bwDarkTheme =
    "--bw-logo: #F3F4F3; --bw-logo-text:#434242; --bw-text:#434242; --bw-text-hover:#333; --bw-opacity:1; --bw-opacity-hover:0";
  const bwDarkThemeHover =
    "--bw-logo: #676767; --bw-logo-text:#fff; --bw-text:#333; --bw-text-hover:#333; --bw-opacity:0; --bw-opacity-hover:1";

  if (bwLogo && bwLogo.classList.contains("bw-light")) {
    bwLogo.setAttribute("style", bwLightTheme);
    bwLogo.addEventListener("mouseover", function () {
      this.setAttribute("style", bwLightThemeHover);
    });
    bwLogo.addEventListener("mouseleave", function () {
      this.setAttribute("style", bwLightTheme);
    });
  }
  if (bwLogo && bwLogo.classList.contains("bw-dark")) {
    bwLogo.setAttribute("style", bwDarkTheme);
    bwLogo.addEventListener("mouseover", function () {
      this.setAttribute("style", bwDarkThemeHover);
    });
    bwLogo.addEventListener("mouseleave", function () {
      this.setAttribute("style", bwDarkTheme);
    });
  }
}
