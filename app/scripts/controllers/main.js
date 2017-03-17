'use strict';

/**
 * @ngdoc function
 * @name bakerNetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bakerNetApp
 */
angular.module('bakerNetApp')
  	.controller('MainCtrl', function ($scope, $http) {
  		
  		$http.get('https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=22942f6468254b089d3bb18c5866a8dc').
			then(function success(response) {
				console.log(response);
			  	$scope.posts = response.data.articles;
			}).
			catch(function error(response) {
			  console.log(response)
			});

		setInterval(function(){ $('#TickerTape').animate({left: "-=4px"}) }, 160);

	});

