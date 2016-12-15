### Install reporting ( local installation ):
* cd ./confs/ and npm install command from the links below:
( if link no. 1 aint working fine for you, use the command from no. 2)
[1](https://www.npmjs.com/package/protractor-jasmine2-html-reporter)
[2](https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter/tutorial)

## Run:
* drop tests.json in: __utils__ folder
* start webdriver: __webdriver-manager start__
* cd ./confs/
* run __protractor conf.js__

When tests are finished, it'll generate a html report for you.
If there are any failures, the page screenhots are saved.



