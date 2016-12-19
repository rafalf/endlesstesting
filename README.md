### Install protractor [1](http://www.protractortest.org/#/)
* ```npm install -g protractor```
* ```webdriver-manager update```

### Install reporting ( local installation ):
* cd ./confs/ and npm install command from the links below:
( if link no. 1 aint working fine for you, use the command from no. 2)
[1 - html reporter](https://www.npmjs.com/package/protractor-jasmine2-html-reporter)
[2 - html reporter](https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter/tutorial)

## Run:
* drop the required *.jsons in: __utils__ folder
* run ```cmd``` and start webdriver: ```webdriver-manager start``` and leave the server running
* again run ```cmd``` --> ```cd ./confs/```
* run ```protractor conf.js```

When tests are finished, it'll generate a html report for you.
If there are any failures, the page screenhots are saved.



