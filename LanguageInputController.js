angular.module("languageCountrieModule").controller("LanguageInputController", function LanguageInputController() {

	this.languages=['English','Spanish','Italian'];
    this.submitLanguage = function (language) {
 
        this.existingCountries = new Array();
        if (this.language === 'Spanish') {
            this.existingCountries.push("Spain");
			this.existingCountries.push("Argentina");
            this.existingCountries.push("Peru'");
            this.existingCountries.push("Colombia");
            this.existingCountries.push("Chile");
        }
        else if (this.language === 'English') {
            this.existingCountries.push("UK");
            this.existingCountries.push("USA");
        }
		 else if (this.language === 'Italian') {
            this.existingCountries.push("Italy");
        }
        this.countries={
            'existingCountries':this.existingCountries,
            'number': this.existingCountries.length
        }


        this.setCountries({
            $event: {
                countries: this.countries
            }
        });

    }
});