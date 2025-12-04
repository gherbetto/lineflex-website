export default function handleCart() {
  const deleteSelectedButton = document.getElementById("deleteSelectedBtn");
  const selectAllCheckbox = document.getElementById("selectAllCheckbox");
  const cartItemsBody = document.getElementById("cartItemsBody");
  const plusButtons = document.querySelectorAll(
    ".cart-item__quantity-btn--plus"
  );
  const minusButtons = document.querySelectorAll(
    ".cart-item__quantity-btn--minus"
  );
  const quantityInputs = document.querySelectorAll(
    ".cart-item__quantity-input"
  );

  // Initialize event listeners for plus buttons
  plusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector(
        ".cart-item__quantity-input"
      );
      input.stepUp(1);
    });
  });

  // Initialize event listeners for minus buttons
  minusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector(
        ".cart-item__quantity-input"
      );
      let currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.stepUp(-1);
      }
    });
  });

  // Function to remove an item from the cart
  function removeItem(itemId) {
    const item = document.getElementById(itemId);
    if (item) {
      cartItemsBody.removeChild(item);

      // // Update total items and price
      // updateTotals();
    }
  }

  // // Function to increment/decrement quantity
  // function updateQuantity(event) {
  //   const input = event.target.parentElement.querySelector(".quantity-input");
  //   let value = parseInt(input.value, 10);
  //   if (event.target.classList.contains("quantity-plus")) {
  //     value += 1;
  //   } else if (value > 1) {
  //     value -= 1;
  //   }
  //   input.value = value;

  //   // Update total price for this item
  //   const price = parseInt(input.dataset.price, 10);
  //   const totalPriceElement = document.getElementById("totalPrice");
  //   let totalPrice = parseInt(
  //     totalPriceElement.textContent.replace(/\s+/g, ""),
  //     10
  //   );
  //   const hiddenTotalPrice = document.getElementById("totalPriceHidden");

  //   if (event.target.classList.contains("quantity-plus")) {
  //     totalPrice += price;
  //   } else {
  //     totalPrice -= price;
  //   }

  //   totalPriceElement.textContent = `${totalPrice.toLocaleString()} Р`;
  //   hiddenTotalPrice.value = totalPrice;

  //   // Update total items
  //   updateTotals();
  // }

  // Function to update totals when an item is removed or quantity changes
  // function updateTotals() {
  //   const itemCounts = document.querySelectorAll(".cart-item");
  //   const totalItemsCountElement = document.getElementById("totalItemsCount");
  //   const hiddenTotalItems = document.getElementById("totalItemsHidden");

  //   const totalCount = itemCounts.length;
  //   totalItemsCountElement.textContent = `${totalCount} шт`;
  //   hiddenTotalItems.value = totalCount;
  // }

  // // Add event listeners to increment/decrement buttons
  // cartItemsBody.addEventListener("click", function (event) {
  //   if (event.target.classList.contains("quantity-btn")) {
  //     updateQuantity(event);
  //   }
  // });

  // Add event listener for select all checkbox
  selectAllCheckbox.addEventListener("change", function () {
    const checkboxes = document.querySelectorAll(".cart-item__checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = this.checked;
    });
    // deleteSelectedButton.style.display = this.checked ? "inline-block" : "none";
  });

  // Add event listener for the delete button
  deleteSelectedButton.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".cart-item__checkbox");
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        removeItem(checkbox.parentElement.parentElement.parentElement.id);
      }
    });
  });
}
