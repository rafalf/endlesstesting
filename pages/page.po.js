var Page = function(){

    this.sendEnter = function(){
        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform();
    };

    this.getGuardarButton = function() {
        return $('[value="Guardar"]');
    };

    this.getCancelarButton = function() {
        return $('[value="Cancelar"]');
    };

    this.getEntendidoButton = function() {
        return $('[title="Entendido"]');
    };

    this.waitUntilElementPresent = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.presenceOf(element));
    };

    this.waitUntilElementIsNotPresent = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.stalenessOf(element));
    };

    this.waitUntilElementVisible = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.visibilityOf(element));
    };

    this.waitUntilElementClickable = function (element) {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(EC.elementToBeClickable(element));
    };


};

module.exports = new Page();