### Instructions for the coding challenge:-
  * Write automated UI tests for the given BDD scenarios using either Java, Javascript or Python programming language.
  * Provide the solution as a .zip file that can be extracted and run the same way you have done locally.
  * Provide notes for the solution if needed.


### Preferably the solution should:-
  * Use libraries for driver binary management, please do not include the driver executables in the project path.
  * Validations/Assertions to verify the results e.g. sorting order, matching category, tags, page navigation.
  * Use Page Object Model or any other design pattern.
  * Use any logging framework.
  * The tests should generate a test results report other than TestNG reports.


### Scenario 1:
@001 [x]
Scenario: Search and verify results[x]
Given I am a non-registered customer[x]
And I navigate to www.ebay.co.uk[x]
When I search for an item[x]
Then I get a list of matching results[x]
And the resulting items cards show: postage price, No of bids, price or show BuyItNow tag[x]

1.1
Then I can sort the results by Lowest Price
And the results are listed in the page in the correct order

1.2
Then I can sort the results by Highest Price
And the results are listed in the page in the correct order

1.3
Then I can filter the results by 'Buy it now' [x]
And all the results shown in the page have the 'Buy it now' tag

### Scenario 2:
@002
Scenario: Search per category[x]
Given I am a non-registered customer[x]
And I navigate to www.ebay.co.uk[x]
When I enter a search term and select a specific Category[x]
Then I get a list of matching results[x]
And I can verify that the results shown as per the the selected category[x]

### Scenario 3:
@003
Scenario: Search and navigate through results pages Given I am a [x]non-registered customer[x]
And I navigate to www.ebay.co.uk[x]
When I search for an item[x]
Then I get a list of matching results[x]
And the results show more than one page[x]
Then the user can navigate through the pages to continue looking at the items[x]