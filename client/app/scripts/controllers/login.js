'use strict';

var app = angular.module('bakerNetApp');

app.controller('LoginCtrl', function ($scope, Api) {	
	
	Api.login(User1);

});

