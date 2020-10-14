
### Challenges i faced
- `{ uncaught:exceptions }`, were failing my test only on firefix, all other browsers were passing my tests

- sorting the high/low results, trying to make the parent()
 selector available so that i can have access to the choldren selectors

- finding a suitable framework for test reporting taht works seamlessly with cypress (mochaawesome_generator)

### Things to improve on Cypress Automation Framework
1. pageObject file, defined variables can be organised in alphabetical order
2. currently strings are hard coded on the test files, all strings can be stored under one .env file (dotenv package manager) and called upon
3.  



## Test results report using mocha-awesome-reporter

info<br/>
https://dev.to/bushraalam/using-mochawesome-reporter-with-cypress-54pf
https://www.youtube.com/watch?v=ftie-ASpbzY&ab_channel=QACamp

test script would do the following:
a. run your test suite
b. create 'mocha' folder under 'cypress/reports'
c. create .json files (one for each spec executed) in the 'mocha' folder

posttest script would combine all the .json files present in 'cypress/reports/mocha' folder and place the combined file 'report.json' in 'cypress/reports/mochareports' and create a beautiful html report.

Results report<br/>
how to run your test report and locate the results within the project
1. naviagte to root directory `/javascript-cypress`   
2. `npm run test` 
3. navigate to cypress/reports/mochareports/report.html
4. open report.html - will show the list of report/result


### cypress script
1. naviagte to root directory `/javascript-cypress`
2. `npm run cypress:open` (headless:false)
3. `npx cypress run` (headless:true)
<br/>
<br/>
1. naviagte to root directory `/javascript-cypress`
2. `npm run test` (run testing report)
3. naviagte to `cypress/reports/mochareports/report.html`
4. open report.html 

### POM structure
https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b


### Solution
how to filter lowest and highest price
- https://docs.cypress.io/api/commands/children.html#No-Args
- https://stackoverflow.com/questions/55046835/select-react-select-dropdown-list-option-using-cypress

how to validate via url()
- https://docs.cypress.io/api/commands/url.html#Href-Shorthand
- https://docs.cypress.io/api/commands/within.html#Forms

### material
https://medium.com/@NicholasBoll/cypress-io-using-async-and-await-4034e9bab207

https://itnext.io/cypress-io-best-practices-for-maintainable-tests-e9b9f392f117

https://medium.com/@Cypress_io/stop-using-page-objects-and-start-using-app-actions-8755b8b02ec0

https://medium.com/reactbrasil/deep-diving-pageobject-pattern-and-using-it-with-cypress-e60b9d7d0d91

https://docs.cypress.io/guides/guides/continuous-integration.html#Setting-up-CI

https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7

### Report frameowork

https://www.npmjs.com/package/mochawesome-report-generator

https://medium.com/cypress-io-thailand/generate-a-beautiful-test-report-from-running-tests-on-cypress-io-371c00d7865a

https://dev.to/lironer/cypress-html-reports-with-screenshots-made-easy-12pm