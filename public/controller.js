var app = angular.module("QuoteApp");


app.controller('quoteController', function($scope, $http, quoteFactory){

  quoteFactory.setQuotes().then(function() {

      $scope.quotes = quoteFactory.getQuotes();

  });

});
