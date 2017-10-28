'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('PhoneCat Application', function() {
    describe('phoneList', function () {
        beforeEach(function () {
            browser.get('index.html');
        });
        it('should filter the phone list as a user types into the search box', function () {
            var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
            var query = element(by.model('$ctrl.query'));
            expect(phoneList.count()).toBe(3);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(2);

        });
        it('should be possbile to control phone order via the drop-down menu',function(){
            var queryField=element(by.model('$ctrl.query'));
            var orderSelect=element(by.model('$ctrl.orderProp'));
            var nameOption=orderSelect.element(by.css('option[value="name"]'));
            var phoneNameColumn= element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

            function getNames(){
                return phoneNameColumn.map(function(elem){
                    return elem.getText();
                })
            }
            queryField.sendKeys('tablet');

            expect(getNames()).toEqual([
                'Motorola XOOM\u2122 with Wi-Fi',
                'MOTOROLA XOOM\u2122'
            ]);

            nameOption.click();

            expect(getNames()).toEqual([
                'MOTOROLA XOOM\u2122',
                'Motorola XOOM\u2122 with Wi-Fi'
            ]);
        });
        it('should render phone specific links', function() {
            var query = element(by.model('$ctrl.query'));
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
        });

    });

});


