'use strict';

/**
 * @ngdoc function
 * @name bakerNetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bakerNetApp
 */
angular.module('bakerNetApp')
  	.controller('MainCtrl', function () {
		setInterval(function(){ $('#TickerTape').animate({left: "-=4px"}) }, 160);
	});
