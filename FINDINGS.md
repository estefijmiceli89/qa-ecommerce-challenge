## Findings - QA Challenge

### 🔴 Bugs
- Address Page: When submitting the form with empty fields, only the first field shows an error at a time.
- Payment Page: No client-side validation for invalid credit card number format.
- Home Page: Product sorting by price does not consistently reorder the Wireless Headphones, which remain in the center position regardless of sorting. 
- Home Page: Product sorting by price does not consistently reorder the Wireless Headphones, which remain in the center position regardless of sorting.
- Cart Page: When navigating to the cart using `cy.visit('/cart')`, the added product disappears. This suggests the cart state is stored only in memory and not persisted. Using in-app navigation (e.g., clicking a cart link) preserves the product state.
- Profile Page: Always displays static user info (e.g., "John Doe") even when no registration or login has been performed.
- Search Bar: Search functionality only works for product name. It does not return results when searching by price or description.


### 💡 Suggestions
- Autofocus first invalid field in form for better UX.
- Add a toast or confirmation banner after placing an order.