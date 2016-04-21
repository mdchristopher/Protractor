var EventsOverview = function () {

    this.createAnEvent = element(by.xpath(".//*[@id='ctl00_body_Tasks_Content']/table/tbody/tr[1]/td[1]/a/span[2]/span/span[1]"));

    
    
    this.clickCreateAnEvent = function () {
        this.createAnEvent.click();
    };


};

module.exports = EventsOverview;