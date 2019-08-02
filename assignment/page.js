'use strict'

var objact = require('../assignment/testdata/data.json');
//var site = 'https://www.kayak.com/';
module.exports={
    toDo :{
       //  addField: element(by.xpath('/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]')),
        addField: element(by.xpath("//div[contains(@id,'-origin-airport-display')]")),
        clickDestTo: element(by.xpath("//div[contains(@id,'-destination-airport-display')]")),
        
         // okField: element(by.xpath('/html[1]/body[1]/div[6]/div[1]/div[2]/div[1]/div[3]/input[1]')),
        // drodownKarachi: element(by.xpath("//div[@class='item-info']")),
        // crossfield: element(by.xpath("//button[@id='guWg-submit']//*[@class='_ivP _iv1']")),
        // checkedBox: element(by.model('todo.done')),
        // addButton: element(by.xpath('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[2]/button[1]/span[1]/*'))

        tripDropdown1: element(by.xpath(objact.locator.pageLocators.tripDropdown1)),
        tripSelection1: element(by.xpath(objact.locator.pageLocators.tripSelection1)),
        tripDropdown2: element(by.xpath(objact.locator.pageLocators.tripDropdown2)),
        searchField: element(by.xpath(objact.locator.pageLocators.searchField)),
        searchDataF: element(by.xpath(objact.locator.pageLocators.searchData)),
       // googleTest: element(by.name(objact.locator.pageLocators.name)),
        areaSelect1: element(by.xpath(objact.locator.pageLocators.selection1)),
        searchDestinationInput : element(by.xpath(objact.locator.pageLocators.searchDestinationInput)),
        destinationSelection : element(by.xpath("//div[contains(text(),'Dubai, United Arab Emirates')]")),
        departureDateClick : element(by.className(objact.locator.pageLocators.departureDateClick)),
        inputDepartureDate : element(by.className(objact.locator.pageLocators.inputDepartureDate)),
        arrivalDateClick : element(by.xpath(objact.locator.pageLocators.arrivalDateClick)),
        arrivalDateInput : element(by.xpath(objact.locator.pageLocators.arrivalDateInput)),
        finalSearch : element(by.xpath(objact.locator.pageLocators.finalSearch)),
        
     //   tripDropdown: element(by.cssContainingText('option', 'Round-trip')).click(),
    //    tripSelection: element(by.xpath("/html[1]/body[1]/div[4]/div[1]/div[2]/ul[1]/li[2]"))


    },

    go: function(){
        browser.get(objact.testingURL);
        browser.waitForAngular();
    },

    loadpage:  async function(site) {
        browser.ignoreSynchronization = true;
        await browser.get(objact.testingURL);
    },

    // oneWay: function(){
    //     browser.waitForAngular();
    //     browser.ignoreSynchronization = true;
    //     browser.sleep(3000);

    //     var todo = this.toDo;
    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripDropdown1), 70000,'click'); 
    //     todo.tripDropdown1.click();
    //     browser.sleep(6000);

    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripSelection1), 70000,'click');
    //     todo.tripSelection1.click();
    //     browser.sleep(6000);
    // },


    // multiCity: function(){
    //     browser.waitForAngular();
    //     browser.ignoreSynchronization = true;
    //     browser.sleep(3000);

    //     var todo = this.toDo;
    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripDropdown1), 70000,'click'); 
    //     todo.tripDropdown1.click();
    //     browser.sleep(6000);

    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripSelection), 70000,'click');
    //     todo.tripSelection2.click();
    //     browser.sleep(6000);
    // },

    // seatSelection: function(){

    //     browser.waitForAngular();
    //     browser.ignoreSynchronization = true;
    //     browser.sleep(3000);

    //     var todo = this.toDo;
    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripDropdown2), 80000,'click');
    //     todo.tripDropdown2.click();
    //     browser.sleep(6000);
    // },

    // adultVerfiication: function(){

    //     browser.sleep(3000);

    //     var todo = this.toDo;
    //     //browser.wait(ExpectedConditions.elementToBeClickable(todo.tripDropdown2), 80000,'click');
    //     //todo.adultsCount.getText()
    //     //var new_text = '0';
    //     element(todo.adultsCount).getText().then( function(new_text){
    //         expect(original_text).not.toBe(new_text);
    //       });

    //     browser.sleep(6000);
    // }


    destinationFrom: function(){
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);

        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(todo.addField), 70000,'click'); 
        todo.addField.click();
        browser.sleep(6000);

        browser.wait(ExpectedConditions.elementToBeClickable(todo.searchDataF), 70000,'sendKeys'); 
        todo.searchDataF.sendKeys(objact.locator.Scenario1.originInput);
        browser.sleep(6000);

        browser.wait(ExpectedConditions.elementToBeClickable(todo.areaSelect1), 70000,'click'); 
        element(by.xpath("//li[@id='ap-ATL/11123']//div[@class='item-info']")).click();
        browser.sleep(6000);
    },
//google test
    // browser.wait(ExpectedConditions.elementToBeClickable(todo.googleTest), 70000,'sendKeys'); 
    //     todo.googleTest.sendKeys(objact.locator.Scenario1.originInput);
    //    // element(by.xpath(locator.pageLocators.searchData
    //     browser.sleep(6000);


        
        // if(browser.wait(ExpectedConditions.elementToBeClickable(todo.crossSign)))
        // {
        // todo.crossSign.click();
        // }else{
        // todo.crossfield.clear();
    destinationTo: function(){
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);

        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(todo.clickDestTo), 70000,'click'); 
        todo.clickDestTo.click();
        browser.sleep(6000);

        browser.wait(ExpectedConditions.elementToBeClickable(todo.searchDestinationInput), 70000,'sendKeys'); 
        todo.searchDestinationInput.sendKeys(objact.locator.Scenario1.destinationInput);
        browser.sleep(5000);

        browser.wait(ExpectedConditions.elementToBeClickable(todo.destinationSelection), 70000,'click'); 

        todo.destinationSelection.click();
        browser.sleep(6000);
    },

    departureDate: function(){
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);

        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(todo.departureDateClick), 70000,'click'); 
        todo.departureDateClick.click();
        browser.sleep(6000);

        todo.inputDepartureDate.sendKeys(objact.locator.Scenario1.Departure);
        browser.sleep(5000);
    },

    arrivalDate: function(){
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);

        // var todo = this.toDo;
        // browser.wait(ExpectedConditions.elementToBeClickable(todo.arrivalDateClick), 70000,'click'); 
        // todo.arrivalDateClick.click();
        // browser.sleep(6000);

        todo.arrivalDateInput.sendKeys(objact.locator.Scenario1.Arrival);
        browser.sleep(5000);
    },

    searchFlight: function(){
        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(todo.finalSearch), 70000,'click'); 
        todo.finalSearch.click();
        browser.sleep(6000);
    }

    
        
};