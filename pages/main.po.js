var Page = function(){

    this.sendEnter = function(){
        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform();
    };

};

module.exports = new Page();