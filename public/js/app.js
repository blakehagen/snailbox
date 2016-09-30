'use strict';

angular.module('snailbox', ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: './app/features/login/loginTmpl.html',
      controller: 'loginCtrl as loginCtrl'
    })

  .state('signup', {
    url: '/signup',
    templateUrl: './app/features/signup/signupTmpl.html',
    controller: 'signupCtrl as signupCtrl'
  })

    .state('userHome', {
      url: '/user/:id',
      templateUrl: './app/features/userHome/userHomeTmpl.html',
      controller: 'userHomeCtrl as userHomeCtrl'
    })

  .state('newAddress', {
    url: '/user/:id/new',
    templateUrl: './app/features/newAddress/newAddressTmpl.html',
    controller: 'newAddressCtrl as newAddressCtrl'
  });

  $urlRouterProvider
    .otherwise('/login');

  $httpProvider.interceptors.push('authInterceptor');

});