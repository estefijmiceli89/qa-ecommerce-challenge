Feature: Profile Page

  Scenario: Complete flow ends in profile page
    Given I have completed a purchase successfully
    And I navigate to the profile page
    Then I should see my personal information
    And I should see at least one past order

  Scenario: Switch to edit mode
    Given I am on the profile page
    When I click the "Edit Profile" button
    Then I should see editable inputs for name and email

  Scenario: Cancel editing profile
    Given I am editing my profile
    And I update the name to "Test Name"
    And I update the email to "test@example.com"
    When I click the "Cancel" button
    Then I should see my original name and email as text

  Scenario: Edit and save profile data
    Given I am editing my profile
    When I update the name to "Eduardo Teste"
    And I update the email to "eduardo@test.com"
    And I save the profile changes
    Then I should see "Eduardo Teste" and "eduardo@test.com" displayed

  Scenario: Show validation messages when fields are empty on blur
    Given I am editing my profile
    When I leave the name and email fields empty and blur
    Then I should see the name error message
    And I should see the email error message

  Scenario: Show message when no past orders exist  
    Given I am on the profile page
    Then I should see the empty order history message