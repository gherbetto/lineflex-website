export default function catalogDropdown() {
  // Get all items and panels
  const level1Items = document.querySelectorAll(".header-bottom__catalog-item");
  const level2Items = document.querySelectorAll(
    ".header-bottom__catalog-item-l2"
  );
  const level2Panels = document.querySelectorAll(
    ".header-bottom__catalog-subitems"
  );
  const level3Panels = document.querySelectorAll(
    ".header-bottom__catalog-subitems-l3"
  );

  // Helper function to hide all panels at a given level
  const hideAllPanels = (panels) => {
    panels.forEach((panel) => panel.classList.remove("active"));
  };

  // Helper function to remove active state from all items
  const clearActiveItems = (items) => {
    items.forEach((item) => item.classList.remove("active-item"));
  };

  // Add hover listeners for Level 1 items
  level1Items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      // 1. Clear all active states
      hideAllPanels(level2Panels);
      hideAllPanels(level3Panels);
      clearActiveItems(level1Items);
      clearActiveItems(level2Items);

      // 2. Set this item as active
      item.classList.add("active-item");

      // 3. Show the corresponding Level 2 panel
      const targetId = item.dataset.category;
      if (targetId) {
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add("active");
        }
      }
    });
  });

  // Add hover listeners for Level 2 items
  level2Items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      // 1. Clear active states for Level 3 only
      hideAllPanels(level3Panels);
      clearActiveItems(level2Items);

      // 2. Set this item as active
      item.classList.add("active-item");

      // 3. Show the corresponding Level 3 panel
      const targetId = item.dataset.target;
      if (targetId) {
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add("active");
        }
      }
    });
  });
}
