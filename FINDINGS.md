# Findings

## Issues

### Clicking the sort button in the product catalog page doesn't sort the items correctly:

Severity: High

Steps to reproduce:
- Go to the main page
- Click on the sort button

Actual Result:
- The items are not in the requested sorted status (ascending/descending)

Expected result:
- The items should be sorted.


###  Clicking cancel in the personal information edit fields triggers a save:

Severity: Medium

Steps to reproduce:
- Go to the main page
- Click on the "Profile" button
- Click on the "Edit Profile" button
- Type any value in the name/email field
- Click "cancel"

Actual Result:
- The changes are saved when the cancel button is clicked.

Expected result:
- The changes shouldn't be applied to the profile.

###  Last name missing in form

Severity: High

Steps to reproduce:
- Go to the main page
- Click on the "View Details" button on any product
- Click on the "Add to cart" button
- Click on the "Proceed to checkout" button

Actual Result:
- The "Last Name" field is missing

Expected result:
- The form should include a last name input

###  The card expiration date doesn't take into consideration if the card already expired

Severity: High

Steps to reproduce:
- Go to the main page
- Click on the "View Details" button on any product
- Click on the "Add to cart" button
- Click on the "Proceed to checkout" button
- Fill in all the valid information for a checkout
- Click on the "Continue to Payment" button.
- Fill in the CVV field with a year before the actual date 

Actual Result:
- The field accepts correctly the date.

Expected result:
- The field should have the validation of expired cards

### Cart button missing in pages

Severity: Low

Steps to reproduce:
- Go to the main page
- Click on the "View Details" button on any product

Actual Result:
- The cart button is missing.

Expected result:
- The cart button should be displayed to go to the cart.

# The description in the product pages returns an extra "Description". 

Severity: Low

Steps to reproduce:
- Go to the main page
- Click on the "View Details" button on any product
- Inspect the page and select the product description

Actual Result:
- The description is also returned with the <H2> element 

Expected result:
- The <p> element should contain the <data-testid="product-description">

## Improvements/suggestions

### Clicking "Remove" on the shopping cart should trigger a warning before deleting
For a better UX the page should double check if the remove of the item is valid or not. 

### Add more billing validation
The billing page doesn't have any format validation on the Credit card and the cvv input accepts any value instead of only numbers

###  [Nitpick] The credit card says "expiry date" instead of "expiration date"
Changing it to the american english is better to accommodate a broad audience.

### Automaton 
- All validation messages and .type('') (mostly on the form) that could be moved into a fixture file.
- The test could take screenshots to take advantage of reporting.
