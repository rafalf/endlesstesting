describe( 'fibra test page', function(){

    var fibra  = require('../pages/fibra.po.js');
    var page = require('../pages/page.po.js');
    rjs = require("../utils/fibra.json");

    it('fibra test case 1', function(){

        /*
            esNeba = false
            guardarNuevoPerfil - 100 OK
            Service - all in activados
         */

        var testUrl = rjs.test1url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        var headings = [rjs.serviceHeading1, rjs.serviceHeading2, rjs.serviceHeading3]
        expect(fibra.getH3HeadingsText()).toEqual(headings);

        expect(fibra.getAllVelocidadButtons().count()).toBe(1);

        testPerfilesModal(false);

        expect(fibra.getAllServicesInActivados().count()).toEqual(3);
        expect(fibra.getAllServicesInDisponibles().count()).toEqual(0);
        expect(fibra.getAllServiceButtons().count()).toEqual(3);

        testRouter();

    });

    it('fibra test case 2', function () {

        /*
         esNeba = false
         guardarNuevoPerfil - 101 NOT OK
         Service - all in disponsibles
         */

        var testUrl = rjs.test2url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        var headings = [rjs.serviceHeading1, rjs.serviceHeading2, rjs.serviceHeading4]
        expect(fibra.getH3HeadingsText()).toEqual(headings);

        expect(fibra.getAllVelocidadButtons().count()).toBe(1);

        testPerfilesModal(true);

        expect(fibra.getAllServicesInActivados().count()).toEqual(0);
        expect(fibra.getAllServicesInDisponibles().count()).toEqual(3);
        expect(fibra.getAllServiceButtons().count()).toEqual(3);

        testRouter();

    });

    it('fibra test case 3', function(){

        /*
         esNeba = true
         guardarNuevoPerfil - 100 OK
         Service - 2 in activados, 1 in disposibles
         */

        var testUrl = rjs.test3url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        var headings = [rjs.serviceHeading1, rjs.serviceHeading2, rjs.serviceHeading3, rjs.serviceHeading4]
        expect(fibra.getH3HeadingsText()).toEqual(headings);

        expect(fibra.getAllVelocidadButtons().count()).toBe(0);

        expect(fibra.getAllServicesInActivados().count()).toEqual(2);
        expect(fibra.getAllServicesInDisponibles().count()).toEqual(1);
        expect(fibra.getAllServiceButtons().count()).toEqual(3);

        testRouter();

    });

    function testPerfilesModal(onError){

        fibra.getAllVelocidadButtons().first().click();

        expect(fibra.getModalHeadingText()).toEqual(rjs.profilesModalHeading);

        // Optimo radio
        page.getGuardarButton().click();
        if (onError){
            expect(fibra.getModalHeadingText()).toEqual(rjs.errorModalHeading);
        }else {
            expect(fibra.getModalHeadingText()).toEqual(rjs.successModalHeading);
        }

        page.getEntendidoButton().click();

        fibra.getAllVelocidadButtons().first().click();

        page.getCancelarButton().click();

        // Fast path radio
        fibra.getAllVelocidadButtons().first().click();
        fibra.getFastPathRadio().click();
        page.getGuardarButton().click();
        if (onError){
            expect(fibra.getModalHeadingText()).toEqual(rjs.errorModalHeading);
        }else {
            expect(fibra.getModalHeadingText()).toEqual(rjs.successModalHeading);
        }
        page.getEntendidoButton().click();

        // Anexo M
        fibra.getAllVelocidadButtons().first().click();
        fibra.getAnexoRadio().click();
        page.getGuardarButton().click();
        if (onError){
            expect(fibra.getModalHeadingText()).toEqual(rjs.errorModalHeading);
        }else {
            expect(fibra.getModalHeadingText()).toEqual(rjs.successModalHeading);
        }
        page.getEntendidoButton().click();

    };

    function testRouter(){
        expect(fibra.getModelRouterText()).toBe(rjs.routerTitle);
        expect(fibra.getModelImeiText()).toBe(rjs.routerImei);

        fibra.getSolicitarLink().click();
        expect(browser.getLocationAbsUrl()).toContain('/solicitarReparacion');
    };

});