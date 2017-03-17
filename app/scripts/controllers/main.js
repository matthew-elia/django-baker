'use strict';

var app = angular.module('bakerNetApp');

app.controller('MainCtrl', function ($scope, News) {	
	
	var postArray=[];

	News.getSources().then(function(response){
		var sources = response.data.sources;
		for (var i = 0; i < sources.length; i++) {
			var id = sources[i].id;
			News.getNews(id).then(function success(response) {
				var articles = response.data.articles;
				for (var i = 0; i < articles.length; i++) {
					postArray.push(articles[i]);
				}
			}).then(function error(err) {
				console.log(err);
			});
		}

	});

	// console.log(postArray);
	$scope.posts = postArray;
	
	setInterval(function(){ $('#TickerTape').animate({left: "-="+$('.panel').parent().parent().width()+""}, 2000); }, 10000);

});

