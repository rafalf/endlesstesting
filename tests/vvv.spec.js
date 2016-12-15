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

        var test = rjs.test1url;
        browser.get(test);

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

        // read json data
        var test = rjs.test2url;

        browser.get(test);

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

        buttons = vvv.getAllContratarButtons();
        buttons.first().click();

        // modal displays
        expect(vvv.getAllModals().count()).toBe(1);

        // verify header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.contratarModal1Header)

        // click cancel and modal closes
        vvv.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        buttons.first().click();

        // modal displays
        expect(vvv.getAllModals().count()).toBe(1);

        vvv.getContratarButton().click();

        // success displays
        var success = vvv.getModalHeader().getText();
        expect(success).toBe(rjs.successModalText)

        // close Modal
        vvv.getModalClose().click()
        expect(vvv.getAllModals().count()).toBe(0);

        // again all the way to success
        // close w/ Entendido button
        buttons.first().click();
        expect(header).toBe(rjs.contratarModal1Header)
        vvv.getContratarButton().click();
        expect(success).toBe(rjs.successModalText)

        vvv.getEntendidoButton().click()
        expect(vvv.getAllModals().count()).toBe(0);

        /* Paquete ServicioX1
         Cancelar and Acivar button
         */

        buttons = vvv.getAllContratarButtons();
        buttons.last().click();

        // modal displays
        expect(vvv.getAllModals().count()).toBe(1);

        // verify header
        var header = vvv.getModalHeader().getText();
        expect(header).toBe(rjs.contratarModal2Header)

        // click cancel and modal closes
        vvv.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        buttons.last().click();

        // verify header
        expect(header).toBe(rjs.contratarModal2Header)

        // modal displays
        expect(vvv.getAllModals().count()).toBe(1);

        vvv.getContratarButton().click();

        // success displays
        var success = vvv.getModalHeader().getText();
        expect(success).toBe(rjs.successModalText)

        // close Modal
        vvv.getModalClose().click()
        expect(vvv.getAllModals().count()).toBe(0);

        // again all the way to success
        // close w/ Entendido button
        buttons.last().click();
        expect(header).toBe(rjs.contratarModal2Header)
        vvv.getContratarButton().click();
        expect(success).toBe(rjs.successModalText)

        vvv.getEntendidoButton().click()
        expect(vvv.getAllModals().count()).toBe(0);


    });



    it('test case 5', function() {

        var test = rjs.test5url;
        browser.get(test);

        // activadioServicio = true
        expect(vvv.getAllOnlineButtons().count()).toBe(1);


    });

});
