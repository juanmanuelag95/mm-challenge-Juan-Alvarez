# Mano-Mano  (Codeceptjs - playwright)

## Introduction
This is an Automation Framework to test E2E Test cases on a given website .
The main stack of technologies is NodeJS, playwright, Codeceptjs & Allure for the reports

## Project Structure

```
src
 + features                     Features Directory
 + pages                        Pages Directory
      + homePage                Methods for the front/principal page
      + resultPage              Methods fo the result page
 + step_definitions
      + steps                   List of the reusable steps for the feature files
 + package.json                 List of all dependencies of the project
 + codecepts.conf.js            Configuration file for codeceptjs
```

The project has 6 scenarios focusing on the search bar:

### Search Bar Testing
- Scenario: Happy Path, search for a product and result should be listed
- Scenario: Empty search field
- Scenario: Suggestion list should be shown
- Scenario: Select one of the suggestions on the list 
- Scenario:  No products found
- Scenario: Clear button

## Installing the Framework 
You will need to run the following command in order to get the Framework and the dependencies
```
$ git clone https://github.com/juanmanuelag95/mm-challenge-Juan-Alvarez.git
$ cd Question_5/
$ npm install
```

## Executing the Framework
Run `npm test` from the command line from root directory.

```
You will need:
- NodeJS 14.17.0 installed
- npm 6.14.13 installed
```

To generate the reports and display them, need to trigger 
the following command `allure serve`.

## Running in Parallel
Need to comment brower line on the `codecept.conf.js` file 
```
    // browser: 'chromium'
```

Then run `npm run multiple` from the command line from root directory.