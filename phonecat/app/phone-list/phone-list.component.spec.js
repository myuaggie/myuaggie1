'use strict';
describe('phoneList',function(){
    beforeEach(module('phoneList'));
    describe('PhoneListController', function() {
        var ctrl,$httpBackend;
        beforeEach(inject(function($componentController,_$httpBackend_){
            ctrl=$componentController('phoneList');
            $httpBackend=_$httpBackend_;
            $httpBackend.expectGet('phone/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        }));
        it('should create a `phones` property with 2 phones fetched with `$http`', function() {
            expect(ctrl.phones).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });
        it('should set a default value for the `orderProp` model',function(){
            expect(ctrl.orderProp).toBe('age');
        });


    });

})