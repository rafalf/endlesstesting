describe('testing vvv page', function() {

    var main = require('../pages/main.po.js');
    var vvv = require('../pages/vvv.po.js');

    var rjs = require('../utils/tests.json');


    it('test case 1', function() {

        /*
         nombreUsario = Null
         activadioServicio = false
         cable VVV = false
         */

        var testUrl = rjs.test1url;
        browser.get(testUrl);

        // nombreUsario
        expect(vvv.getAllUserLabels().count()).toBe(0);
        expect(vvv.getAllUserEmails().count()).toBe(0);

        // activadioServicio = false
        expect(vvv.getAllOnlineButtons().count()).toBe(0);

        // cable VVV = false
        // default Z3 does not display
        expect(vvv.getAllOnlineZ3().count()).toBe(0);
        expect(vvv.getAllSections().count()).toBe(2);

        // notice text
        var text = rjs.noticeText;
        expect(vvv.getNoticeText()).toBe(text)

    });


    it('test case 2', function() {

        /*
         nombreUsario = not null
         activadioServicio = false
         cable VVV = true
         */

        var testUrl = rjs.test2url;
        browser.get(testUrl);

        // nombreUsario = not null
        expect(vvv.getAllUserLabels().count()).toBe(1);
        expect(vvv.getAllUserEmails().count()).toBe(1);
        expect(vvv.getAllUserEmails().first().getText()).toBe('user@email.com');

        // activadioServicio = false
        expect(vvv.getAllOnlineButtons().count()).toBe(0);

        // cable VVV = true
        // default Z3 displays
        expect(vvv.getAllOnlineZ3().count()).toBe(1);
        expect(vvv.getAllSections().count()).toBe(4);

        // notice text
        var text = rjs.noticeText;
        expect(vvv.getNoticeText()).toBe(text)

        /* ServicioZ3 Online Modal
           Cancelar and Activar button
         */
        vvv.getActivarAhoraButton().click()

        // modal displays
        expect(vvv.getAllModals().count()).toBe(1);

        // verify header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.vvvZ3OnlineModalHeader)

        // click cancel and modal closes
        vvv.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        vvv.getActivarAhoraButton().click()

        // click on Activar
        vvv.getActivarButton().click();

        // success displays
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.successModalText)

        // close Modal
        vvv.getModalClose().click()
        expect(vvv.getAllModals().count()).toBe(0);

        /* Paquete Servicioyy2
         Cancelar and Acivar button
         */

        testConratarEmail(rjs.contratarModal1Header, 1);

        /* Paquete ServicioX1
         Cancelar and Acivar button
         */
        testConratarEmail(rjs.contratarModal2Header, 2);

    });



    it('test case 5', function() {

        var testUrl = rjs.test5url;
        browser.get(testUrl);

        // activadioServicio = true
        expect(vvv.getAllOnlineButtons().count()).toBe(1);

    });


    /*
    modal functions
     */

    function testConratarEmail(contratarHeader, index) {

        buttons = vvv.getAllContratarButtons();

        if (index === 1) {
            buttons.first().click();
        } else {
            buttons.last().click();
        }

        // modal displays
        expect(vvv.getAllModals().count()).toBe(1);

        // verify header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(contratarHeader)

        // click cancel, modal closes
        vvv.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        if (index === 1) {
            buttons.first().click();
        } else {
            buttons.last().click();
        }

        // verify header
        expect(header).toBe(contratarHeader)

        // modal displays
        expect(vvv.getAllModals().count()).toBe(1);

        vvv.getContratarButton().click();

        // success displays
        var success = vvv.getModalHeader().getText();
        expect(success).toBe(rjs.successModalText)

        // close modal
        vvv.getModalClose().click()
        expect(vvv.getAllModals().count()).toBe(0);

        // again all the way to success
        // but close w/ Entendido button

        if (index === 1) {
            buttons.first().click();
        } else {
            buttons.last().click();
        }

        expect(header).toBe(contratarHeader)
        vvv.getContratarButton().click();
        expect(success).toBe(rjs.successModalText)

        vvv.getEntendidoButton().click()
        expect(vvv.getAllModals().count()).toBe(0);

    };

});
