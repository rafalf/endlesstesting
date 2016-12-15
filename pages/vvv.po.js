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

    /*
    Activar modal functions
     */

    this.getActivarButton = function() {
        return $('[value="Activar"]');
    };

    this.getCancelarButton = function() {
        return $('[value="Cancelar"]');
    };

    this.getModalHeader = function() {
        return $('.modal-dialog h1');
        };

};

module.exports = new vvvPage();
