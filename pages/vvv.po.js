var vvvPage = function (){

    this.getAllUserLabels = function(){
        return $$('.i-fvv-header-body__login-label');
    };

    this.getAllUserEmails = function () {
        return $$('.i-fvv-header-body__login-value');
    };

    // Ir a Panel12 VVV Online button
    this.getAllOnlineButtons = function() {
        return $$('[title="clickToGoToPanel12VVVOnline"]');
    };

    // Panel12 VVV Online
    this.getAllOnlineZ3 = function() {
        return $$('[package-item="vm.defaultAvailablePackage"]');
    };

    this.getAllSections = function() {
        return $$('.mvc-mv');
    };

    this.getAllModals = function() {
        return $$('.i-fvv-modal');
    };

    this.getNoticeText = function() {
        return element(by.css('.i-fvv-messages-detail p')).getText();
    };

    this.getActivarAhoraButton = function() {
        return $('[title="Click para activar paquete"]');
    };

    this.getAllContratarButtons = function() {
        return $$('[title="Click para Contratar paquete"]');
    };

    /*
    Activar & Contratat modal functions
     */

    this.getActivarButton = function() {
        return $('[value="Activar"]');
    };

    this.getContratarButton = function() {
        return $('[value="Contratar"]');
    };

    this.getCancelarButton = function() {
        return $('[value="Cancelar"]');
    };

    this.getEntendidoButton = function() {
        return $('[title="Entendido"]');
    };

    this.getModalHeader = function() {
        return $('.modal-dialog h1');
        };

    this.getModalClose = function() {
        return $('.i-fvv-modal__btn-close');
        };

};

module.exports = new vvvPage();
