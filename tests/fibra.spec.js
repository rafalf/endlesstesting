describe( 'fibra page', function(){

    var fibra  = require('../pages/fibra.po.js');
    var page = require('../pages/page.po.js');
    rjs = require("../utils/fibra.json");

    it('test case 1', function(){

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

        testPerfilesModal();



    });

    it('test case 2', function () {

        /*
         esNeba = false
         guardarNuevoPerfil - 101 NOT OK
         Service - all in disponsibles
         */

        var testUrl = rjs.test2url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        expect(fibra.getAllVelocidadButtons().count()).toBe(1);

    });

    it('test case 3', function(){

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

    });

    function testPerfilesModal(){

        fibra.getAllVelocidadButtons().first().click();

        expect(fibra.getModalHeadingText()).toEqual(rjs.profilesModalHeading);

        page.getGuardarButton().click();

        expect(fibra.getModalHeadingText()).toEqual(rjs.successModalHeading);

        page.getEntendidoButton().click();

        fibra.getAllVelocidadButtons().first().click();

        page.getCancelarButton().click();



    };

});