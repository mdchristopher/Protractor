var providerData =  require('../pages/production_support/raw_provider/provider.json');


describe('raw offer availability request', function() {
    var rawProviderOfferRequestPage = require('../pages/production_support/raw_provider/raw_provider_offer_request_pageobject.js');

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.manage().deleteAllCookies();
        rawProviderOfferRequestPage.get();
    });
    afterAll(function (){
        browser.get('about:blank');

    });

    it('should display the correct title', function () {
        expect(browser.getTitle()).toEqual('Raw Provider Offer Request');
    });

    providerData.forEach(function (providerData) {
       xit('should navigate to the Raw offer availability request site ', function () {
            rawProviderOfferRequestPage.selectProvider(providerData.ID);
            rawProviderOfferRequestPage.selectDistributor(providerData.Distributor,providerData.Child);
            expect(rawProviderOfferRequestPage.providerValue()).toEqual(providerData.Provider);
            expect(rawProviderOfferRequestPage.distributorValue(providerData.Child)).toEqual(providerData.Child);

        });
    });


    providerData.forEach(function (providerData) {
        xit('should navigate to the Raw offer availability request site ', function () {
            rawProviderOfferRequestPage.selectDistributor(providerData.Distributor,providerData.Child);
            expect(rawProviderOfferRequestPage.providerValue()).toEqual(providerData.Distributor);
        });
    });


});