Feature: Profile Page

Scenario: View profile information
  Given I visit the profile page with a saved user
  Then I should see my name and email displayed
  And I should see the Edit Profile button

Scenario: Edit profile with valid data
  Given I visit the profile page with a saved user
  When I click the Edit Profile button
  And I update my name to "Alice Smith" and email to "alice@example.com"
  And I click Save Changes
  Then I should see the updated profile information

Scenario: Click Back to Home from profile page
  Given I visit the profile page
  When I click the Back to Home button
  Then I should be redirected to the home page

Scenario: View order history with one order
  Given I have a saved order in local storage
  And I visit the profile page
  Then I should see the order history
