var notifsPage = function(){

    var page = require('./page.po.js')

    this.getH3TitlesText = function (nth) {
      return $$('.i-fvv-notifications__title').get(nth).getText();
    };

    this.getSubTitlesText = function (nth) {
        return $$('.i-fvv-notifications__subtitle').get(nth).getText();
    };

    this.getDatesText = function (nth) {
        return $$('div>.i-fvv-notifications__date').get(nth).getText();
    };

    this.getH3Titles = function () {
        return $$('.i-fvv-notifications__title');
    };

    this.getPaging_1 = function () {
        return $('.i-fvv-notifications__pagination li:nth-of-type(1)');
    };

    this.getPaging_2 = function () {
        return $('.i-fvv-notifications__pagination li:nth-of-type(2)');
    };

    this.getNthExpand = function (nth) {
        return $$('.i-fvv-notifications__btn-expand').get(nth);
    };

    this.getFirstDelete = function () {
        return $$('.i-fvv-notifications__btn-delete').first();
    };

    this.getNthDelete = function (nth) {
        return $$('.i-fvv-notifications__btn-delete').get(nth);
    };

    this.getAllPointersDown = function () {
        return $$('.icon-i-fvv-pointer-down');
    };

    this.getAllPointersUp = function () {
        return $$('.icon-i-fvv-pointer-up');
    };

    this.getAllPointersUp = function () {
        return $$('.icon-i-fvv-pointer-up');
    };

    this.getBtnNext = function () {
        var btn = $('.slick-next');
        page.waitUntilElementClickable(btn);
        return btn;
    };

    this.getBtnPrevius = function () {
        var btn = $('.slick-prev');
        page.waitUntilElementClickable(btn);
        return btn;
    };

    this.getBtnPreviusClass = function () {
        var prev =  $('.slider>button:nth-of-type(1)').getAttribute('class');
        prev.then(function (class_) {
            console.log('class: ' + class_)
        });
        return prev;
    };

    this.getBtnNextClass = function () {
        var next =  $('.slider>button:nth-of-type(2)').getAttribute('class');
        next.then(function (class_) {
            console.log('class: ' + class_)
        });
        return next;
    };

    this.getDisabledSlickButton = function () {
        return $('.slick-disabled');
    };

    this.waitUntilDisabledSlickButton = function () {
        page.waitUntilElementPresent(this.getDisabledSlickButton());
    };

    this.getAllBtnsInNotification = function (nth) {
        return $$('.i-fvv-notifications__item:nth-of-type(' + nth + ') .i-fvv-btn');
    };

    this.getAllModulosTextInNotification = function (nth) {
        return $$('.i-fvv-notifications__item:nth-of-type(' + nth + ') .i-fvv-notifications__title-details');
    };

    this.getAllVideosInNotification = function (nth) {
        return $$('.i-fvv-notifications__item:nth-of-type(' + nth + ') video');
    };

    this.getFirstVideosSource = function () {
        return $('video source');
    };

    this.getAllImagesInNotification = function (nth) {
        return $$('.i-fvv-notifications__item:nth-of-type(' + nth + ') .i-fvv-notifications__image');
    };

    this.getNoNotificationsText = function () {
        return $('div>span.i-fvv-notifications__txt');
    };

    this.getErrNotificationsText = function () {
        return $('div.i-fvv-notifications__txt');
    };

    this.getEntendidoBtn = function () {
        return $('[title="Entendido"]');
    };

    this.getIconClose = function () {
        return $('.i-fvv-modal__btn-close');
    };



};


module.exports = new notifsPage();