var vvvPage = function (){

    this.getAllUserLabels = function(){
        return $$('.i-fvv-header-body__login-label');
    };

    this.getAllUserEmails = function () {
        return $$('.i-fvv-header-body__login-value');
    };

    this.getPencilButton = function(){
        return $('.i-fvv-header-body__login-action')
    };

    // in:  Panel12 VVV Online
    this.getOnlineButtons = function() {
        return $$('.i-fvv-header-body__features [title="clickToGoToPanel12VVVOnline"]');
    };

    // in any service
    this.getAllOnlineButtons = function() {
        return $$('[title="clickToGoToPanel12VVVOnline"]');
    };

    // get all service z3 online service containers
    // in Con Panel12 VVV Online puedes disfrutar de...
    this.getAllOnlineZ3 = function() {
        return $$('[package-item="vm.defaultAvailablePackage"]');
    };

    this.getAllServices = function() {
        return $$('.mvc-mv');
    };

    this.getAllServiceHeadingsText = function() {
        var h3 = $$('h3');
        h3.each(function(elm){
            elm.getText().then(function (text) {
                console.log(text);
            });
        });
        return h3.getText();
    };

    this.getAllPromotionTexts = function(index) {
        var css = $$("section:nth-of-type(" + index +  ") span");
        css.each(function(elm){
            elm.getText().then(function (text) {
                console.log(text);
            });
        });
        return css.getText();
    };

    this.getAllModals = function() {
        return $$('.i-fvv-modal');
    };

    this.getNoticeText = function() {
        return element(by.css('.i-fvv-messages-detail p')).getText();
    };

    this.getActivarText = function() {
        return element.all(by.css('.i-fvv-messages-waiting__text')).getText();
    };

    this.getActivarAhoraButton = function() {
        return $('[title="Click para activar paquete"]');
    };

    this.getDesactivarServiceButton = function() {
        return $('[title="Click para desactivar paquete"]');
    };

    this.getAllContratarButtons = function() {
        return $$('[title="Click para Contratar paquete"]');
    };

    /*
    Activar,  Contratat, Desactivar modal functions
     */

    this.getActivarButton = function() {
        return $('[value="Activar"]');
    };

    this.getDesactivarButton = function() {
        return $('[value="Desactivar"]');
    };

    this.getContratarButton = function() {
        return $('[value="Contratar"]');
    };

    this.getModalHeader = function() {
        return $('.modal-dialog h1');
        };

    this.getModalClose = function() {
        return $('.i-fvv-modal__btn-close');
        };

    this.getEnterEmail = function() {
        return $('#email');
    };

    this.getReEnterEmail = function() {
        return $('#re-email');
    };

    this.getAllFormErrorsText = function(index) {
        var css = ".i-fvv-form-ui__message"

        $$('.i-fvv-form-ui__message').each(function(err){
            err.getText().then(function (error){
                console.log(error)
            });
        });
        return $$('.i-fvv-form-ui__message').getText();
    };

};

module.exports = new vvvPage();
