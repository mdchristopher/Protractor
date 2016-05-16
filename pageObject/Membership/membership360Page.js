var Membership360Page = function () {


    this.getOwernerName = function () {
        var ownername = element(by.css('#ctl00_body_Owner_Name_0_0'));
        return ownername.getText();

    };
    this.whatWouldYouLikeToDo = function (link) {
        element(by.partialLinkText(link)).click();
    };


};
module.exports = Membership360Page;
