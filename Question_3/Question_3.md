# Question 3
*Please go to our site https://www.manomano.co.uk/, try to find a defect and report it as if you were going
to introduce it into a real defect-tracking system. In case you could not find any defect (hopefully) just
create a defect that you can think of.*

## Cleaning the search-input after a search is causing an 500 error
### Steps to reproduce:
 1. Go to the main page
 2. Type some product name on the search-input
 3. Hit the search button
 4. After the list of products gets displayed, use the clean "x" button on the search-input
 5. Hit the search button
### Details:
 - I was able to reproduce this situation on PROD-ENV
 - Using Google Chrome
 - MacBook Pro running *macOS Big Sur*
### Expected Result:
 - No request should be triggered as there is not a valid value on the search input
### Actual Result:
 - A request is being made and causes 500 error (empty request value)
### Attachments:
 - Attached the curl with the failure
 ### Impact:
 -  (*Medium*) For me is not a showstopper, it is causing some bad experience for the user but I am open to hear your opinion on this one. 