## 🏠 Home Page

- **Bug 1:**
    - **Description:**  
    Descending sorting does not work correctly.
    - **Severity:** Medium
    - **Repro:** Go to the homepage → the sort by price descending option is selected by default → check the product cards and their prices.  
    **Result:** The product order does not match the selected sorting.
    - **Expected result:** The default sorting feature should show products from highest to lowest price.

- **Bug 2:**
    - **Description:**  
    Ascending sorting does not work correctly.
    - **Severity:** Medium
    - **Repro:** Go to the homepage → click on Sort by price → check the product cards and their prices.  
    **Result:** Although the first item shown is the one with the lowest price, the rest are unordered.
    - **Expected result:** The ascending sorting feature should display products from lowest to highest price.

- **Bug 3:**
    - **Description:**  
    Catalog images do not match the products and their descriptions.
    - **Severity:** Medium
    - **Repro:** Go to the homepage → pay attention to the product cards and their images.  
    **Result:** The product “Classic White Sneakers” shows mustard-colored sneakers.
    - **Expected result:** All product cards should display images that match their product and description.

- **Bug 4:**
    - **Description:**  
    Cart button does not show its status to the user.
    - **Severity:** High
    - **Repro:** Choose a product from the product catalog → Add to cart → On cart page, click “continue shopping” button.  
    **Result:** The cart button visible only in the product catalog does not show the number of items it contains.
    - **Expected result:** The cart button should display the item count.

- **Bug 5:**
    - **Description:**  
    Cart button only appears on the homepage.
    - **Severity:** High
    - **Repro:** Choose a product from the product catalog → Add to cart → On cart page, click “continue shopping” button.  
    **Result:** Throughout the selection process, the user has no quick access to how many items are in the cart.
    - **Expected result:** The cart button should also appear on the product details page.

---

## 🛍️ Product Page

- **Bug 1:**
    - **Description:** Product images show a visible white border.
    - **Severity:** Medium
    - **Repro:** Click on the “View details” button on any product card.  
    **Result:** White border appears around the images.
    - **Expected result:** Images should have a standard size without white borders.

- **Bug 2:**
    - **Description:** Title, description, and price are not properly aligned to the container size on the screen.
    - **Severity:** High
    - **Repro:** Click on the “View details” button on any product card.  
    **Result:** The text does not fit the container.
    - **Expected result:** The content should adjust to the screen size.

---

## 🛒 Cart Page

- **Bug 1:**
    - **Description:** Product images show a visible white border.
    - **Severity:** Medium
    - **Repro:** Click on the “Add to Cart” button on the product details page.  
    **Result:** White border appears around the images.
    - **Expected result:** Images should be added to the page professionally and neatly.

- **Bug 2:**
    - **Description:** Cart logic breaks when adding more than 5 units of a product.
    - **Severity:** High
    - **Repro:** Click on the “Add to Cart” button on the product details page with 5 units of the same product → Click on “Continue Shopping” → Add more units of the same product.  
    **Result:** The cart page shows zero quantity on its product card, but the subtotal reflects the correct total. Checkout proceeds without issue, and order history shows the purchased quantity.
    - **Expected result:** If there’s a maximum per item, it should be enforced in the cart and checkout logic.

- **Bug 3:**
    - **Description:** Cart items are cleared when refreshing the page.
    - **Severity:** High
    - **Repro:** Add several products to the cart → On the cart page, refresh the browser.  
    **Result:** The cart content is cleared, and the cart appears empty.
    - **Expected result:** Cart content should persist.

---

## 📦 Address Page

- **Bug 1:** Street address field accepts special characters.
    - **Description:**  
    Add products to the cart and start checkout → fill out the address form.  
    **Result:** The street address field accepts only special characters without issue.
    - **Severity:** High
    - **Expected result:** It should only accept numbers, letters, and spaces.

- **Bug 2:** You can enter non-existent cities, states, and countries.
    - **Description:**  
    Add products to the cart and start checkout → fill out the address form.  
    **Result:** These fields can be filled with random letters.
    - **Severity:** High
    - **Expected result:** It’s better to select valid names from dropdowns.

---

## 💳 Payment Page

- **Bug 1:** Card expiry date can be a past year, and CVV can have 4 digits.
    - **Description:**  
    Add products to the cart and start checkout → fill out the payment form.  
    **Result:** The expiry date field allows past years, and the CVV field allows four digits when it should be three.
    - **Severity:** High
    - **Expected result:** The expiry date should not allow past years, and the CVV should be standardized to 3 digits.

---

## 👤 Profile Page

- **Bug 1:** Order History does not show the real totals for each order.
    - **Description:**  
    Add two different products with different quantities to the cart → complete checkout → go to order history.  
    **Result:** The total shown in the order history only reflects the sum of unit prices, not the real total.
    - **Severity:** High
    - **Expected result:** The order history should display the real total.

- **Bug 2:**
    - **Description:** Product images show a visible white border.
    - **Severity:** Low
    - **Repro:** Add two different products with different quantities to the cart → complete checkout → go to order history.
    - **Expected result:** Images should be added to the page professionally and neatly.

- **Bug 3:**
    - **Description:** Personal Information shows random info by default.
    - **Severity:** High
    - **Repro:** Add two different products with different quantities to the cart → complete checkout → go to order history.  
    **Result:** The name and email shown in the Personal Information Card do not match the real user.
    - **Expected result:** There should be a proper sign-up process to solve this.

- **Bug 4:**
    - **Description:** Personal information can be left blank or filled with only numbers and special characters.
    - **Severity:** High
    - **Repro:** Go to Profile from the Home Page → Click the Edit Profile button → Fill in only numbers or special characters in both fields (name and email).
    **Result:** Even though warnings appear under each field, if you click the Cancel button, the incorrect values are temporarily reflected in the Personal Information Card, causing confusion.
    - **Expected result:** In these cases, it’s better to disable the buttons until the fields are filled with valid information.


