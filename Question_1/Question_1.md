# Question 1
Given the following user story please write down the 6 main test cases you could think of:
*As a non registered user, I want to search for a product*
Note: We want you to focus on the search feature
Please use this site, https://www.manomano.co.uk

| Test Case | Steps | Expected Result |
| ------ | ------ | ------ |
| Happy Path | 1.- Go to the main page<br> 2.- On the search input type some product<br> 3.- Hit the search button | Should find  and show records if available |
| No records available |1.- Go to the main page<br> 2.- Search for a product which is not in the catalog<br> 3.- Hit the search button | If the product is not listed in the catalog, *no products found* legend should be displayed
| Empty search field | 1.- Go to the main page<br> 2.- Leave the search input empty<br> 3.- Hit the search button | No request should be executed, not even an API call |
| Suggestion list should be shown | 1.- Go to the main page<br> 2.- Insert some value it could be a word or a char<br> 3. Do not hit the search button |  A list of different suggestions should be display (suggestions, categories, brands, ideas & advice)|
| Select one of the suggestions on the list | 1.- Go to the main page<br> 2.- Insert some value it could be a word or a char<br> 3. Do not hit the search button<br> 4.- Select one of the of the options listed on the suggestion list | Products should be displayed with out the need of clicking the search button  |
| Enter the max_length of the search input |  1.- Go to the main page<br> 2.- Enter a long request string (< 50000)<br> 3.- Hit the search button | Max Length error handling message should be displayed  |
| SQL Injection must be prevent | 1.- Go to the main page<br> 2.- Insert some SQL Injection Queries<br> 3.- Hit the search button | Should be handled as expected, no breaks should be detected |
| Bad request handling |1.- Go to the main page<br> 2.- Throttling the network or simulate bad server response <br> 3.- Hit the search button | Expected error message should be display |
| Clear button |1.- Go to the main page<br> 2.- Hit the clear button <br> | Search Bar should be empty |