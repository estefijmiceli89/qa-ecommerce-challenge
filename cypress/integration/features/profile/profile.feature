Feature: Profile Page

  Scenario: User views their profile page with no orders
    Given I visit the product catalog main page
    When I click the profile button
    Then the profile page should be displayed
    And the personal information section should show the correct name and email
    And the edit profile button should be visible
    And the order history section should be visible
    And the empty orders message should be visible
    And the start shopping button should be visible

  Scenario: User edits their profile name and email
    Given I visit the product catalog main page
    When I click the profile button
    And I click the edit profile button
    And I update the profile name to "Test User" and email to "testuser@email.com"
    And I save the profile changes
    Then the profile name should be "Test User"
    And the profile email should be "testuser@email.com"

  Scenario: User sees validation errors for invalid name and email as they type
    Given I visit the product catalog main page
    When I click the profile button
    And I click the edit profile button
    And I update the profile name to "12" and email to "invalid-email"
    Then the name validation message should be "Name must be at least 3 characters and contain only letters"
    And the email validation message should be "Please enter a valid email address"

  Scenario: User navigates back to catalog from profile using both buttons
    Given I visit the product catalog main page
    When I click the profile button
    And I click the back to home button
    Then I should be redirected to the product catalog main page
    When I click the profile button
    And I click the start shopping button
    Then I should be redirected to the product catalog main page
