'use strict';

var app = angular.module('bakerNetApp');

app.factory('News', function($http) {

	this.getSources = function () {
		return $http.get('https://newsapi.org/v1/sources?language=en&country=us')
	}

	this.getNews = function (id) {
		return $http.get('https://newsapi.org/v1/articles?source='+id+'&sortBy=top&apiKey=22942f6468254b089d3bb18c5866a8dc')
	}

	return {
		getSources: this.getSources,
		getNews: this.getNews
	};

});