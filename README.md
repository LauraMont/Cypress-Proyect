# Cypress Proyect
_This repitory was made as my portfolio for Cypress Framework on Automation Testing. I have made tests with the following criteria:_
* POM (at page folder) for all the interactions with componentes
* Fixture if its necesary for static data
* Faker on random data generated on tests
* Guerkin files (fixture and step definitions files at cucumber-test folder) if it's aplied 
* Basic test file (at Tests folder)
* Reportes en XML al ejecutar en modo headless
* Remove logs funcions (at helpers folder) imported for ignoring exceptions during execution 
* Documentation of each test (at test-plan folder), this will cointain all the criterias based on the design of the tests. Basicaly is the information we recived on the US
* Commands if we need to use some algoritms that are common on all tests or almost all of them
* Work first on a branch and commit all the changes
* PR's have to contains a report of tests results and logs of all commits at least

## Configurations topics
_The following configurations was aplied to this repository:_
* Generate Reports with multireporter
* Material-icons icons for folders and files
* Cucumber configuration (cucumber-formmatter folder and .cypress-cucumber-preprocessorrc file)
* Scripts at package.json file for generate reports and run cypress on headless and UI mode
* Config paths at jsonconfig file to improve import files
## Get Started 🚀
### Preconditions 📋
_You need to have:_
* NODE JS (v9+)
* npm
* Visual Studio Code 

### Intallation🔧
_1. Clone repository:_

```
git clone https://github.com/LauraMont/Cypress-Proyect.git
```

_2. Initialize npm_

```
npm init
```

_3. Install all the dependencies_

```
npm install
```
_4-1. Run Cypress UI_

```
npm test
```
_4-2. Running all tests on Chrome (Headless mode + XML Report)_

```
npm run cy:run:chrome
```
_4-3. Running all tests on Edge (Headless mode + XML Report)_

```
npm run cy:run:edge
```
