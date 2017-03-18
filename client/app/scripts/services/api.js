'use strict';

var app = angular.module('bakerNetApp');

app.factory('Api', function($http, $cookieStore) {
    this.login = function(res) {
       return  $http.post(
            "http://localhost:8000/auth-api/",
            {data: res}
        )
    }

    return {
        login: this.login
    };
});