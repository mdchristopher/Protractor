var OverviewPage = function () {
  
    this.do = function (link) {
       var xpath = "//span/span[.='{0}']"; 
       var task = element(by.xpath(xpath.replace("{0}", link)));
        task.click(); 
    };

 };
module.exports = OverviewPage;