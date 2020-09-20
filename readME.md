
### Test results report usine mocha-awesome-reporter
https://dev.to/bushraalam/using-mochawesome-reporter-with-cypress-54pf
https://www.youtube.com/watch?v=ftie-ASpbzY&ab_channel=QACamp

test script would do the following:
a. run your test suite
b. create 'mocha' folder under 'cypress/reports'
c. create .json files (one for each spec executed) in the 'mocha' folder

posttest script would combine all the .json files present in 'cypress/reports/mocha' folder and place the combined file 'report.json' in 'cypress/reports/mochareports' and create a beautiful html report.

`npm run test`

### scripts

- `npm run cypress:open` (headless:false)
- `npx cypress run` (headless:true)


- `npm run test` (run testing report)
- naviagte to `cypress/reports/mochareports/report.html`
- open report.html 



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