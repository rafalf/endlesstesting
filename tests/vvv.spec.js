describe('vvv page', function() {

    var vvv  = require('../pages/vvv.po.js');
    var page = require('../pages/page.po.js')
    var rjs  = require('../utils/vvv.json');

    it('test case 1', function() {

        /*
         nombreUsario = Null
         activadioServicio = false
         cable VVV = false
         */

        var testUrl = rjs.test1url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        testNombreUsuarioNull();

        testActivadoServicioFalseOnlineButton();

        testCableVvvvFalseServicioZ3();

        // notice text
        var text = rjs.noticeText;
        expect(vvv.getNoticeText()).toBe(text);

        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text1);

        // promo texts on all services
        expect(vvv.getAllPromotionTexts(2)).toContain(rjs.amountNoPromo);
        expect(vvv.getAllPromotionTexts(2)).not.toContain(rjs.gratis);

        expect(vvv.getAllPromotionTexts(3)).toContain(rjs.amountPromo);
        expect(vvv.getAllPromotionTexts(3)).toContain(rjs.gratis);

        testConratarNombreUsuarioNull(rjs.contratarModal1Heading, 1);

        testConratarNombreUsuarioNull(rjs.contratarModal2Heading, 2);

    });

    it('test case 2', function() {

        /*
         nombreUsario = not null
         activadioServicio = false
         cable VVV = true
         */

        var testUrl = rjs.test2url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        testNombreUsuarioNotNull();

        testActivadoServicioFalseOnlineButton();

        testCableVvvvTrueServicioZ3();

        // notice text
        var text = rjs.noticeText;
        expect(vvv.getNoticeText()).toBe(text);

        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text1);
        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text2);

        // promo texts on all services
        expect(vvv.getAllPromotionTexts(2)).toContain(rjs.amountNoPromo);
        expect(vvv.getAllPromotionTexts(2)).not.toContain(rjs.gratis);

        expect(vvv.getAllPromotionTexts(3)).toContain(rjs.amountPromo);
        expect(vvv.getAllPromotionTexts(3)).toContain(rjs.gratis);

        // ServicioZ3 Online Modal
        testServicioOnlineNombreUsuarioNotNull();

        // Paquete Servicioyy2
        testConratarNombreUsuarioNotNull(rjs.contratarModal1Heading, 1);

        // Paquete ServicioX1
        testConratarNombreUsuarioNotNull(rjs.contratarModal2Heading, 2);

    });

    it('test case 3', function() {

        /*
         nombreUsario = null
         activadioServicio = false
         cable VVV = true
         */

        var testUrl = rjs.test3url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        testNombreUsuarioNull();

        testActivadoServicioFalseOnlineButton();

        testCableVvvvTrueServicioZ3();

        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text1);
        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text2);

        // promo texts on all services
        expect(vvv.getAllPromotionTexts(2)).toContain(rjs.amountNoPromo);
        expect(vvv.getAllPromotionTexts(2)).not.toContain(rjs.gratis);

        expect(vvv.getAllPromotionTexts(3)).toContain(rjs.amountPromo);
        expect(vvv.getAllPromotionTexts(3)).toContain(rjs.gratis);

        testServicioOnlineNombreUsuarioNull();

        testConratarNombreUsuarioNull(rjs.contratarModal1Heading, 1);

        testConratarNombreUsuarioNull(rjs.contratarModal2Heading, 2);

    });

    it('test case 4', function() {

        /*
         nombreUsario = not null
         activadioServicio = true
         cable VVV = true
         */

        var testUrl = rjs.test4url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        testNombreUsuarioNotNull();

        testActivadoServicioTrueOnlineButton();

        expect(vvv.getAllOnlineButtons().count()).toEqual(2);

        testDesactivar();

        testCableVvvvTrueServicioZ3();

        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text3);
        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text1);
        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text4);

        expect(vvv.getAllServices().count()).toEqual(7);

        testServicioOnlineNombreUsuarioNotNull();

        testConratarNombreUsuarioNotNull(rjs.contratarModal1Heading, 1);

        testConratarNombreUsuarioNotNull(rjs.contratarModal2Heading, 2);

        var activateTexts = [rjs.activateText1, rjs.activateText2];
        expect(vvv.getActivarText()).toEqual(activateTexts);

    });

    it('test case 5', function() {

        /*
         nombreUsario = not null
         activadioServicio = true
         cable VVV = false
         */

        var testUrl = rjs.test5url;
        browser.get(testUrl);

        console.log('\nTest url: ' + testUrl + '\nTest spec: ' + __filename + '\n');

        testNombreUsuarioNotNull();

        testActivadoServicioTrueOnlineButton();

        expect(vvv.getAllOnlineButtons().count()).toEqual(1);

        testDesactivar();

        testCableVvvvFalseServicioZ3();

        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text3);
        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text1);
        expect(vvv.getAllServiceHeadingsText()).toContain(rjs.serviceH3text4);

        expect(vvv.getAllServices().count()).toEqual(5);

        testConratarNombreUsuarioNotNull(rjs.contratarModal1Heading, 1);

        testConratarNombreUsuarioNotNull(rjs.contratarModal2Heading, 2);

        var activateTexts = [rjs.activateText1, rjs.activateText2];
        expect(vvv.getActivarText()).toEqual(activateTexts);
    });


    /*
    nombreUsuario
    panel12 vvv online
     */

    function testNombreUsuarioNull(){
        // email and email label do not display
        expect(vvv.getAllUserLabels().count()).toBe(0);
        expect(vvv.getAllUserEmails().count()).toBe(0);
    };
    
    function testNombreUsuarioNotNull() {
        // email and email label display
        expect(vvv.getAllUserLabels().count()).toBe(1);
        expect(vvv.getAllUserEmails().count()).toBe(1);
        expect(vvv.getAllUserEmails().first().getText()).toBe('user@email.com');

        testEditEmail();

    };

    /*
     panel12 vvv online
     online button
     */

    function testActivadoServicioFalseOnlineButton(){
        // Online button doesnt display
        expect(vvv.getOnlineButtons().count()).toBe(0);
    };

    function testActivadoServicioTrueOnlineButton(){
        // Online button displays
        expect(vvv.getOnlineButtons().count()).toBe(1);
    };

    /*
     ServicioZ3 Online
     service section
     */

    function testCableVvvvFalseServicioZ3(){
        expect(vvv.getAllOnlineZ3().count()).toBe(0);
    };

    function testCableVvvvTrueServicioZ3(){
        expect(vvv.getAllOnlineZ3().count()).toBe(1);
    };


    /*
    modal functions
     */

    function testConratarNombreUsuarioNotNull(contratarHeader, index) {

        buttons = vvv.getAllContratarButtons();

        if (index === 1) {
            buttons.first().click();
        } else {
            buttons.last().click();
        }

        // displays
        expect(vvv.getAllModals().count()).toBe(1);

        // header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(contratarHeader)

        // close
        page.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        if (index === 1) {
            buttons.first().click();
        } else {
            buttons.last().click();
        }

        // header
        expect(header).toBe(contratarHeader)

        // displays
        expect(vvv.getAllModals().count()).toBe(1);

        vvv.getContratarButton().click();

        // success
        var success = vvv.getModalHeader().getText();
        expect(success).toBe(rjs.successModalText)

        // close
        vvv.getModalClose().click();
        expect(vvv.getAllModals().count()).toBe(0);

        // again all the way to success
        // but close w/ Entendido button

        if (index === 1) {
            buttons.first().click();
        } else {
            buttons.last().click();
        }

        expect(header).toBe(contratarHeader);
        vvv.getContratarButton().click();
        expect(success).toBe(rjs.successModalText);

        page.getEntendidoButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

    };

    function testConratarNombreUsuarioNull(contratarHeader, index) {

        buttons = vvv.getAllContratarButtons();

        if (index === 1) {
            buttons.first().click();
        } else {
            buttons.last().click();
        }

        // displays
        expect(vvv.getAllModals().count()).toBe(1);

        //  header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(contratarHeader);

        //  close
        page.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        if (index === 1) {
            buttons.first().click();
        } else {
            buttons.last().click();
        }

        // header
        expect(header).toBe(contratarHeader)

        // displays
        expect(vvv.getAllModals().count()).toBe(1);

        // disabled
        expect(vvv.getContratarButton().getAttribute('disabled')).toBeTruthy();

        testEmailValidation();

        vvv.getContratarButton().click();

        // success
        var success = vvv.getModalHeader().getText();
        expect(success).toBe(rjs.successModalText);

        // close
        page.getEntendidoButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

    };

    function testServicioOnlineNombreUsuarioNotNull(){

        vvv.getActivarAhoraButton().click();

        // displays
        expect(vvv.getAllModals().count()).toBe(1);

        // header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.vvvZ3OnlineModalHeading)

        // close
        page.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        vvv.getActivarAhoraButton().click();

        // Activar button
        vvv.getActivarButton().click();

        // success
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.successModalText);

        // close
        vvv.getModalClose().click();
        expect(vvv.getAllModals().count()).toBe(0);

    };

    function testServicioOnlineNombreUsuarioNull(){

        vvv.getActivarAhoraButton().click();

        // modal displays
        expect(vvv.getAllModals().count()).toBe(1);

        // verify header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.vvvZ3OnlineModalHeading)

        // click cancel and modal closes
        page.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        vvv.getActivarAhoraButton().click();

        // disabled
        expect(vvv.getActivarButton().getAttribute('disabled')).toBeTruthy();

        testEmailValidation();

        // click on Activar
        vvv.getActivarButton().click();

        // success displays
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.successModalText)

        // close Modal
        vvv.getModalClose().click();
        expect(vvv.getAllModals().count()).toBe(0);

    };

    function testDesactivar(){

        vvv.getDesactivarServiceButton().click();

        // displays
        expect(vvv.getAllModals().count()).toBe(1);

        // header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.desactivarModalHeading)

        // close
        page.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        vvv.getDesactivarServiceButton().click();

        // Activar button
        vvv.getDesactivarButton().click();

        // success
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.successModalText);

        // close
        page.getEntendidoButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

    };

    function testEditEmail(){

        // pencil
        vvv.getPencilButton().click();

        // header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.cambiaModalHeading)

        // disabled
        expect(page.getGuardarButton().getAttribute('disabled')).toBeTruthy();

        testEmailValidation();

        page.getGuardarButton().click();

        var success = vvv.getModalHeader().getText();
        expect(success).toBe(rjs.successModalText)

        // close
        page.getEntendidoButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        // pencil
        vvv.getPencilButton().click();

        // close
        page.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

    };

    function testEmailValidation(){

        var OkEmail = 'format@test.com'
        var BadEmail = 'format@'

        vvv.getEnterEmail().sendKeys(BadEmail);

        expect(vvv.getAllFormErrorsText()).toContain(rjs.invalidEmail);

        vvv.getEnterEmail().clear();

        vvv.getEnterEmail().sendKeys(OkEmail);

        vvv.getReEnterEmail().sendKeys(BadEmail);

        expect(vvv.getAllFormErrorsText()).toContain(rjs.dontMatchEmail);
        expect(vvv.getAllFormErrorsText()).not.toContain(rjs.invalidEmail);

        vvv.getReEnterEmail().clear();

        vvv.getReEnterEmail().sendKeys(OkEmail);
    };

});
