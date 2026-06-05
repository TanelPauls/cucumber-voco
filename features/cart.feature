Feature: Cart

Scenario: Add item to cart
  Given I am logged in
  When I add an item to cart
  Then cart should show 1 item