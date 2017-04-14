# Scripts

Besides the `start` script, there are also other scripts

|`npm run <script>`|What it does|
|------------------|------------|
|`start`|Starts the app at [http://localhost:8080/](http://localhost:8080/). The bundle js/css files are stored in memory|
|`test`|Starts the unit testing using all the files found in the `test` folder|
|`test-watch`| Starts the unit testing and watches for changes to re-run the tests|
|`build-ci`|Builds the js/css bundle non minified files in the `public` folder. Adds Redux devtools support for non webpack dev servers.|
|`build-prod`|Builds the js/css bundle minified files in the `public` folder. Adds Redux devtools support for non webpack dev servers.|

# Cypress CLI

Install by running, `npm install -g cypress-cli`

Run read only tests, `cypress run --spec cypress/integration/network_management/network_management_immutable_spec.js.bak.old`

Run tests that modify hudsucker, `HUDSUCKER_DIR=<HUDSUCKER DIRECTORY> ruby cypress/integration/network_management/test_runner.rb`

Make sure you have .ruby-version set to be the same version as hudsucker so gems are accessible
