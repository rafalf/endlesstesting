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

};

module.exports = new Page();