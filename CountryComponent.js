angular.module("languageCountrieModule").component("countryList", {
    template: "<h2>{{CountryControllerAs.title}}</h2><h2> Number: {{CountryControllerAs.number}} </h2>" 
	          + "<ul><li data-ng-repeat='country in CountryControllerAs.countries' ng-bind='country'></li></ul>",
    bindings: {
        countries: "<",
        number: "<",
        title:"@?"
    },
    controller: 'CountryController',
    controllerAs: 'CountryControllerAs'
})