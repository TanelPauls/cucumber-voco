Feature: Navigation

Scenario: Open menu
  Given I am logged in
  When I open the menu
  Then menu should be visible