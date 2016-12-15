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

        // activadioServicio = false and cable VVV = false
        var text = rjs.noticeText;
        expect(vvv.getNoticeText()).toBe(text)

    });


    it('test case 2', function() {

        /*
         nombreUsario = not null
         activadioServicio = false
         cable VVV = true
         */

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

        // activadioServicio = true  and cable VVV = false
        var text = rjs.noticeText;
        expect(vvv.getNoticeText()).toBe(text)

        /* ServicioZ3 Online Modal
           Cancelar and Acivar button
         */
        vvv.getActivarAhoraButton().click()

        expect(vvv.getAllModals().count()).toBe(1);

        vvv.getCancelarButton().click();
        expect(vvv.getAllModals().count()).toBe(0);

        vvv.getActivarAhoraButton().click()

        vvv.getActivarButton().click();

        var success = vvv.getModalHeader().getText();
        expect(success).toBe(rjs.successText)

        // browser.pause();

    });



    it('test case 5', function() {

        var test = rjs.test5url;
        browser.get(test);

        // activadioServicio = true
        expect(vvv.getAllOnlineButtons().count()).toBe(1);


    });

});
