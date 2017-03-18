'use strict';

var app = angular.module('bakerNetApp');

app.controller('HomeCtrl', function ($scope, News) {	
	
	var id;
	var articleArray = [];
	var srcArray = [];
	var srcIgnore = ["buzzfeed","cnn","cnbc","entertainment-weekly","the-huffington-post"];

	News.getSources().then(function(response){
		
		var sources = response.data.sources;

		// populate array with source identifiers
		for (var i = 0; i < sources.length; i++) {
			id = sources[i].id; 
			srcArray.push(id);
		}

		// remove unwanted news sources
		for (var j = 0; j < srcIgnore.length; j++) {
			if($.inArray(srcIgnore[j],srcArray)){
				var index = srcArray.indexOf(srcIgnore[j]);
				srcArray.splice(index, 1);
			}
		}

		// get all articles from desired sources
		for (var i = 0; i < srcArray.length; i++) {
			id = srcArray[i];
			News.getArticles(id).then(function (response) {
				var articles = response.data.articles;
				for (var ii = 0; ii < articles.length; ii++) {
					articleArray.push(articles[ii]);
				}
			});
		}

	});
	
	console.log(articleArray);
	$scope.articles = articleArray;
		
	setInterval(function(){ $('#NewsTicker').animate({left: "-="+$('.article-list-item').width() }, 2000); }, 10000);

});

