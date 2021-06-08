# Purgomalum  (Chai - Mocha)

## Introduction

This is an Automation Framework to test the available endpoint on http://www.purgomalum.com/ API.
The main stack of technologies is NodeJS, Chai, Mocha & mochawesome for the reports

## Project Structure

```
src
 + test
       purgomalum               Different types of scenarios (Boundaries and expected path)
 + package.json                 List of all dependencies of the project
```

The project has 15 scenarios distributed between two different contexts:

### Boundaries Testing
- Scenario: If user does not type a text value, error message should be display
- Scenario: If user add more thant 10 words in the *add* parameter, error message should be display 
- Scenario: If user add more thant 200 chars in the *add* parameter, error message should be display
- Scenario: If API does not find profanity word it should leave the text as is
- Scenario: If user uses an invalid replacement chart, error message should be display
- Scenario: If user does not insert a *fill_text*, `*` char should be used to replace text
- Scenario: If text does not *containsprofanity*, `false` value should be returned

### Expected Paths
- Scneario: Replacement profanity word should work as expected
- Scenario: Replacement multiple profanity words should work as expected
- Scneario: Replacement profanity word (Case-Insensitive) should work as expected
- Scneario: Replacement profanity word with special chars should work as expected
- Scneario: Replacement profanity chars (20 length) should work as expected
- Scneario: Replacement profanity chars should work as expected
- Scneario: Replacement profanity chars (multiple words) should work as expected  

## Installing the Framework 
You will need to run the following command in order to get the Framework and the dependencies
```
$ git clone https://github.com/juanmanuelag95/mm-challenge-Juan-Alvarez.git
$ cd Question_4/purgomalum/
$ npm install
```

## Executing the Framework
Run `npm run test:awesome` from the command line from root directory.

```
You will need:
- NodeJS 14.17.0 installed
- npm 6.14.13 installed
```

The test results will be recorded here `mochawesomereport/mochawesome.html`.