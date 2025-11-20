// import mainSlider from "./modules/mainSlider.js"
import bestweb from "./modules/bestweb.js";
import catalogDropdown from "./modules/catalogDropdown.js";

bestweb();
catalogDropdown();

document.addEventListener("DOMContentLoaded", () => {
  // 1. Select the elements
  const sentinel = document.querySelector(".sticky-sentinel");
  const bottomHeader = document.querySelector(".header-bottom");

  // 2. Create the observer callback
  const handler = (entries) => {
    // An array of entries is provided, but we only care about the first one
    const entry = entries[0];

    // 3. Check if the sentinel is *out* of the viewport
    //    !entry.isIntersecting means the sentinel is "not intersecting" (i.e., not visible)
    if (!entry.isIntersecting) {
      // It's not intersecting, so the sticky header MUST be stuck
      bottomHeader.classList.add("is-sticky");
    } else {
      // It *is* intersecting (visible), so the header is in its original place
      bottomHeader.classList.remove("is-sticky");
    }
  };

  // 4. Create the observer
  // We only care when the sentinel leaves/enters the top of the viewport
  // The threshold: [0] triggers the callback as soon as 0% (or 100%) of the
  // element is visible.
  const observer = new IntersectionObserver(handler, {
    threshold: [0], // Fire callback when element just enters or just leaves
  });

  // 5. Start observing the sentinel
  observer.observe(sentinel);

  // input has content change svg color

  const form = document.querySelector(".search-block");
  const input = form.querySelector(".search-block__input");

  // Listen for real-time input changes (typing, pasting, deleting)
  input.addEventListener("input", () => {
    // Check if the input value is not empty after trimming whitespace
    if (input.value.trim().length > 0) {
      // Add a class to the form when content is present
      form.classList.add("has-content");
    } else {
      // Remove the class when the input is empty
      form.classList.remove("has-content");
    }
  });

  // Optional: Handle autofill/initial load check (in case the field starts populated)
  if (input.value.trim().length > 0) {
    form.classList.add("has-content");
  }
});
