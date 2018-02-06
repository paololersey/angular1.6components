angular.module("languageCountrieModule").component("languageInput", {
    // 
    template : "Select language: <select data-ng-model='$ctrl.language' data-ng-options='lang for lang in $ctrl.languages'>"
			 + "</select><button ng-click='$ctrl.submitLanguage($ctrl.language)'>Submit language</button>",
	bindings:{
        setCountries : "&"
    },
    controller : 'LanguageInputController'
})