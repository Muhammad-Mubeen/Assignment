var todoPage = require('../assignment/page.js');

var locator = require('../assignment/testdata/data.json');

describe('This is a sample Page Object Model for protractor', function() {
    
    
    it('should navigate to the angular webpage', function() {
        todoPage.go();
    });
    
    // it('select the trip type One way', function() {
    //     todoPage.oneWay ('New Task Item');
    // });

    // // it('select the trip type multi city', function() {
    // //     todoPage.multiCity ('New Task Item');     
    // // });


    // it('Select the passanger according to age ', function() {
    //     todoPage.seatSelection ('New Task Item');     
    // });

    it('Select the passanger according to age ', function() {
        todoPage.destinationFrom ('New Task Item');     
    });

    it('Select the passanger according to age ', function() {
        todoPage.destinationTo ('New Task Item');     
    });

    it('Select the passanger according to age ', function() {
        todoPage.departureDate ('New Task Item');     
    });

    it('Select the passanger according to age ', function() {
        todoPage.arrivalDate ('New Task Item');     
    });

    it('Select the passanger according to age ', function() {
        todoPage.searchFlight ('New Task Item');     
    });

    //expect(publisher_whitelist_page.popupToastIP.toEqual('Ip address removed'));
});