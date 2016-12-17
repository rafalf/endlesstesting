var fibraPage = function(){

    this.getH3HeadingsText = function () {
      var h3 = $$('h3:not(.ng-hide)');
      return h3.getText();
    };

    this.getAllVelocidadButtons = function () {
        return element.all(by.partialButtonText('velocidad'));
    };


    /*
    Modals
     */
    this.getModalHeadingText = function(){
        return $('.i-fvv-modal__title').getText();
    };

};


module.exports = new fibraPage();