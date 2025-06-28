Some findings while testing the product, besides some of them were structured to just pass on the Cypress flow

1. SORTING FEATURE
   The sorting feature for product prices is not functioning correctly. The item with the highest price is not placed at the side (left or right) when sorting is triggered. Only two items (Premium Leather Watch and Classic White Sneakers) appear to be sorted, while the Wireless Headphones remain unaffected.
2. USER PROFILE EDITING LIMITATION
   Editing a user’s name on the profile page does not reflect in other user-specific data.
   Order history remains static and identical besides of the user's name, indicating that the profile edit feature does not impact user identity or data linkage.
3. MISSING ORDER DETAIL NAVIGATION AFTER PURCHASING
   Users are not able to view order details or payment history from the Order History page.
   A clickable option or modal to review individual order summaries, including payment summary and delivery status, would improve usability.
4. CHECKOUT PAGE UX ENHANCEMENT
   Validation error messages on the checkout form are currently displayed in standard text and it's not highlighted in red color
   Use a red color or similar visual alert to improve accessibility and draw user attention to input errors.
5. ADDRESS VALIDATION MISSING
   The system allows entry of invalid or non-existent addresses.
   While this observation could be acceptable for test environments, implementing address validation or third-party checks in production will improve the flow and it's expected.
6. EXPIRED CREDIT CARDS ABLE TO BE USED
   The system does not validate expiry dates on credit cards.
   The page accepts expired cards during checkout, which would be rejected by real-world payment gateways, services.

Automation Improvements:

1. Apply validations when editing the user's profile - this guarantee that we see if the fields are empty or not, check if specific symbols are not allowed to fill
2. Add checks to validate that order history items are displayed in descending order by date, with the most recent purchase appearing first.
