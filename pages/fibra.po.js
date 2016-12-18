var fibraPage = function(){

    this.getH3HeadingsText = function () {
      var h3 = $$('h3:not(.ng-hide)');
      return h3.getText();
    };

    this.getAllVelocidadButtons = function () {
        return element.all(by.partialButtonText('velocidad'));
    };

    this.getModelRouterText = function(){
        return $('.i-fvv-info-device__title').getText();
    };

    this.getModelImeiText = function(){
        return $('.i-fvv-info-device__text').getText();
    };

    this.getSolicitarLink = function(){
        return $("[title='Solicitar una reparación']").getText();
    };

    this.getAllServicesInActivados = function(){
        return $$("[ng-repeat='service in vm.data.serviciosActivados']");
    };

    this.getAllServiceButtons = function(){
        return $$(".i-fvv-list-info__btn");
    };

    this.getAllServicesInDisponibles = function(){
        return $$("[ng-repeat='service in vm.data.serviciosDisponibles']");
    }
    /*
    Modals
     */
    this.getModalHeadingText = function(){
        return $('.i-fvv-modal__title').getText();
    };

    this.getFastPathRadio = function(){
        return $("[for='rdb2']");
    };

    this.getAnexoRadio = function(){
        return $("[for='rdb3']");
    };

};


module.exports = new fibraPage();