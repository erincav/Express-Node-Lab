var app = angular.module("QuoteApp")

app.factory("quoteFactory", function($http){

  return {
     setQuotes: function() {
         var promise =
         $http({
          method: 'GET',
          url: '/random-quotes'

      }).then(function successfulCallback(response) {

          quotes = (response);
          console.log(quotes);

      }, function(error) {
          console.log(error);
      });
         return promise;
     },
      getQuotes: function() {
          return quotes;
      }
    }

})
