Feature: User Profile

    As a user
    I want to view and edit my profile information
    So that I can keep my account details up to date
    And see my order history

Background:
    Given I visit the user profile page

Scenario: View profile information
    
    Then I should see my username "John Doe"
    And I should see my email "john.doe@example.com"

Scenario: Edit profile information
    
    When I click on the "Edit Profile" button
    And I change my username to "Jane Doe"
    And I change my email to "jane.doe@example2.com"

Scenario: Navigate back to homepage
    
    When I click on the "Back to Homepage" button
    Then I should be redirected to the homepage

Scenario: View order history
    
    When I see the title "Order History" as a section
    Then I should see a panel with no orders