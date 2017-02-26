describe('notifs test page', function() {

    var page = require('../pages/page.po.js')
    var notifs = require('../pages/notifs.po.js')
    var rjs  = require('../utils/notifs.json');
    var parsed_json;
    var titles = [];
    var subtitles = [];
    var dates_m = [];
    var day = [];
    var btnTxt2x0;
    var btnTxt3x0;
    var btnTxt3x1;
    var modulosTxt3x0;
    var modulosTxt3x1;
    var modulos_txt_2x0;
    var videoUrl;

    describe('notifs test case 1', function () {

        // No notifications available

        beforeAll(function () {
            console.log('\n-->  test spec: ' + __filename)
        })

        afterAll(function () {
            console.log('\n--> end ');
            browser.restart();
        });

        it('should open test url', function() {
            browser.get(rjs.test1url);

            expect(notifs.getNoNotificationsText().isPresent()).toBe(true);
            expect(notifs.getNoNotificationsText().getText()).toBe(rjs.noNotificationstext);
        });
    });

    describe('notifs test case 2', function () {

        // Error receiving notifications

        beforeAll(function () {
            console.log('\n-->  test spec: ' + __filename)
        })

        afterAll(function () {
            console.log('\n--> end ');
            browser.restart();
        });

        it('should open test url', function() {
            browser.get(rjs.test2url);

            expect(notifs.getErrNotificationsText().isPresent()).toBe(true);
            expect(notifs.getErrNotificationsText().getText()).toBe(rjs.err);
        });
    });

    describe('notifs test case 3', function () {

        //  7 notifications available

        beforeAll(function () {
            console.log('\n-->  test spec: ' + __filename)
        })

        afterAll(function () {
            console.log('\n--> end ');
            browser.restart();
        });

        it('should open json url', function() {
            browser.ignoreSynchronization = true;

            browser.get(rjs.test3url_json);
            $('body pre').getText().then(function (json_){
                // console.log('Page: ' + json_)
                parsed_json = JSON.parse(json_)
            });
            browser.ignoreSynchronization = false;
        });

        it('should parse json', function() {
            for (var ind = 0; ind < parsed_json.notificaciones.length; ind++){
                // console.log('---> notification contenido: '+ ind)
                // console.log(parsed_json.notificaciones[ind].contenido);
                // console.log(parsed_json.notificaciones[ind].subtitulo);
                // console.log('---> ');
                titles[ind] = parsed_json.notificaciones[ind].contenido.titulo;
                subtitles[ind] = parsed_json.notificaciones[ind].contenido.subtitulo;
                dates_m[ind] = parsed_json.notificaciones[ind].fecha;
            }

            for (var i = 0; i < titles.length; i++){
                // console.log(titles[i])
            };

            for (var i = 0; i < dates_m.length; i++){
                dates_obj = new Date(parseInt(dates_m[i]));
                // console.log(dates_obj.getDate());
                day[i] = dates_obj.getDate();
            };

            // btnTxt2x0 = parsed_json.notificaciones[2].contenido.modulos[0].textoEnlace;
            // btnTxt3x0 = parsed_json.notificaciones[3].contenido.modulos[0].textoEnlace;
            // btnTxt3x1 = parsed_json.notificaciones[3].contenido.modulos[1].textoEnlace;

            btnTxt2x0 = rjs.maxInformationButtontext;
            btnTxt3x0 = rjs.maxInformationButtontext;
            btnTxt3x1 = rjs.maxInformationButtontext;

            // modulos_txt_2x0 = parsed_json.notificaciones[2].contenido.modulos[0].texto;
            modulos_txt_2x0 = rjs.modulosText;

            modulosTxt3x0 = parsed_json.notificaciones[3].contenido.modulos[0].texto;
            modulosTxt3x1 = parsed_json.notificaciones[3].contenido.modulos[1].texto;

            videoUrl = parsed_json.notificaciones[4].contenido.modulosVideo.urlVideo;
        });

        it('should verify titles and days - page 1 ', function() {
            browser.get(rjs.test3url);

            // verify titles and days on 1st page
            expect(notifs.getH3Titles().count()).toBe(4);
            for (var i = 0; i < 4; i++){
                expect(notifs.getH3TitlesText(i)).toBe(titles[i]);
            };

            for (var i = 0; i < 4; i++){
                expect(notifs.getDatesText(i)).toContain(day[i])
            };
        });

        it('should verify titles and days - page 2 ', function() {

            notifs.getPaging_2().click()

            // verify titles and days on 2nd page
            expect(notifs.getH3Titles().count()).toBe(3);
            for (var i = 0; i < 3; i++){
                expect(notifs.getH3TitlesText(i)).toBe(titles[i + 4]);
            };

            for (var i = 0; i < 3; i++){
                expect(notifs.getDatesText(i)).toContain(day[i + 4])
            };

            notifs.getPaging_1().click()
        });

        it('should expand all notifications', function() {

            expect(notifs.getAllPointersDown().count()).toBe(4);

            for (var i = 0; i < 4; i++){
                page.waitUntilElementClickable(notifs.getNthExpand(i))
                notifs.getNthExpand(i).click();
            };

            expect(notifs.getAllPointersDown().count()).toBe(0);
            expect(notifs.getAllPointersUp().count()).toBe(4);
        });

        it('should verify btns and modulos text', function() {

            expect(notifs.getAllBtnsInNotification(1).count()).toBe(0);
            expect(notifs.getAllBtnsInNotification(2).count()).toBe(0);
            expect(notifs.getAllBtnsInNotification(3).count()).toBe(1);
            expect(notifs.getAllBtnsInNotification(4).count()).toBe(2);

            expect(notifs.getAllBtnsInNotification(3).first().getText()).toBe(btnTxt2x0);
            expect(notifs.getAllBtnsInNotification(4).first().getText()).toBe(btnTxt3x0);
            expect(notifs.getAllBtnsInNotification(4).last().getText()).toBe(btnTxt3x1);

            expect(notifs.getAllModulosTextInNotification(3).first().getText()).toBe(modulos_txt_2x0);
            expect(notifs.getAllModulosTextInNotification(4).first().getText()).toBe(modulosTxt3x0);
            expect(notifs.getAllModulosTextInNotification(4).last().getText()).toBe(modulosTxt3x1);
        });

        it('should verify btns, modulos, videos and images - page 2', function() {

            notifs.getPaging_2().click()

            expect(notifs.getAllBtnsInNotification(1).count()).toBe(1);
            expect(notifs.getAllBtnsInNotification(2).count()).toBe(3);
            expect(notifs.getAllBtnsInNotification(3).count()).toBe(7);

            expect(notifs.getAllVideosInNotification(1).count()).toBe(1);
            expect(notifs.getAllVideosInNotification(2).count()).toBe(1);
            expect(notifs.getAllVideosInNotification(3).count()).toBe(0);

            expect(notifs.getFirstVideosSource().getAttribute('ng-src')).toBe(videoUrl);

            expect(notifs.getAllImagesInNotification(1).count()).toBe(0);
            expect(notifs.getAllImagesInNotification(2).count()).toBe(2);
            expect(notifs.getAllImagesInNotification(3).count()).toBe(7);

            expect(notifs.getAllModulosTextInNotification(1).count()).toBe(0);
            expect(notifs.getAllModulosTextInNotification(2).count()).toBe(2);
            expect(notifs.getAllModulosTextInNotification(3).count()).toBe(7);
        });

        it('should expand all notifications', function() {

            expect(notifs.getAllPointersDown().count()).toBe(3);

            for (var i = 0; i < 3; i++){
                page.waitUntilElementClickable(notifs.getNthExpand(i))
                notifs.getNthExpand(i).click();
            };

            expect(notifs.getAllPointersDown().count()).toBe(0);
            expect(notifs.getAllPointersUp().count()).toBe(3);
        });

        it('should click next and prev on the carousel works', function() {

            expect(notifs.getBtnPreviusClass()).toContain('slick-disabled');
            expect(notifs.getBtnNextClass()).not.toContain('slick-disabled');

            notifs.getBtnNext().click();

            expect(notifs.getBtnPreviusClass()).not.toContain('slick-disabled');
            expect(notifs.getBtnNextClass()).not.toContain('slick-disabled');

            notifs.getBtnNext().click();

            expect(notifs.getBtnPreviusClass()).not.toContain('slick-disabled');
            expect(notifs.getBtnNextClass()).not.toContain('slick-disabled');

            notifs.getBtnNext().click();

            expect(notifs.getBtnPreviusClass()).not.toContain('slick-disabled');
            expect(notifs.getBtnNextClass()).toContain('slick-disabled');

            notifs.getBtnPrevius().click();

            expect(notifs.getBtnPreviusClass()).not.toContain('slick-disabled');
            expect(notifs.getBtnNextClass()).not.toContain('slick-disabled');
        });

        it('should collapse all notifications', function() {

            expect(notifs.getAllPointersUp().count()).toBe(3);

            for (var i = 0; i < 3; i++){
                page.waitUntilElementClickable(notifs.getNthExpand(i))
                notifs.getNthExpand(i).click();
            };

            expect(notifs.getAllPointersDown().count()).toBe(3);
            expect(notifs.getAllPointersUp().count()).toBe(0);
        });
    });

    describe('notifs test case 3 - delete all notifications', function () {

        //  7 notifications available
        //  all deleted

        beforeAll(function () {
            console.log('\n-->  test spec: ' + __filename)
        })

        afterAll(function () {
            console.log('\n--> end ');
            browser.restart();
        });

        it('should delete all notifications', function() {
            browser.get(rjs.test3url);

            expect(notifs.getNoNotificationsText().isPresent()).toBeFalsy()

            // verify paging
            expect(notifs.getPaging_2().isDisplayed()).toBe(true);
            expect(notifs.getPaging_1().isDisplayed()).toBe(true);

            for (var i = 0; i < 5; i++){
                page.waitUntilElementClickable(notifs.getFirstDelete())
                notifs.getFirstDelete().click();
            };

            // verify no paging
            expect(notifs.getPaging_2().isDisplayed()).toBe(false);
            expect(notifs.getPaging_1().isDisplayed()).toBe(true);

            for (var i = 0; i < 2; i++){
                page.waitUntilElementClickable(notifs.getFirstDelete())
                notifs.getFirstDelete().click();
            };

            // verify no paging
            expect(notifs.getPaging_2().isPresent()).toBe(false);
            expect(notifs.getPaging_1().isPresent()).toBe(false);

            expect(notifs.getNoNotificationsText().isPresent()).toBe(true)
            expect(notifs.getNoNotificationsText().getText()).toBe(rjs.noNotificationstext)
        });
    });

    describe('notifs test case 4', function () {

        // 7 notifications available -
        // error when deleting notifications

        beforeAll(function () {
            console.log('\n-->  test spec: ' + __filename)
        })

        afterAll(function () {
            console.log('\n--> end ');
            browser.restart();
        });

        it('should open test url and try to delete on 1st page', function() {
            browser.get(rjs.test4url);

            expect(notifs.getNoNotificationsText().isPresent()).toBeFalsy()

            // verify paging
            expect(notifs.getPaging_2().isDisplayed()).toBe(true);
            expect(notifs.getPaging_1().isDisplayed()).toBe(true);

            expect(notifs.getH3Titles().count()).toBe(4);

            for (var i = 0; i < 4; i++){
                page.waitUntilElementClickable(notifs.getNthDelete(i))
                notifs.getNthDelete(i).click();
                notifs.getEntendidoBtn().click();
            };

            expect(notifs.getH3Titles().count()).toBe(4);
        });

        it('should try to delete on 2nd page', function() {
            notifs.getPaging_2().click()

            // verify paging
            expect(notifs.getPaging_2().isDisplayed()).toBe(true);
            expect(notifs.getPaging_1().isDisplayed()).toBe(true);

            expect(notifs.getH3Titles().count()).toBe(3);

            for (var i = 0; i < 3; i++){
                page.waitUntilElementClickable(notifs.getNthDelete(i))
                notifs.getNthDelete(i).click();
                notifs.getIconClose().click();
            };

            expect(notifs.getH3Titles().count()).toBe(3);

            // verify paging
            expect(notifs.getPaging_2().isDisplayed()).toBe(true);
            expect(notifs.getPaging_1().isDisplayed()).toBe(true);

        });
    });
});
