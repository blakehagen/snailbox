'use strict';

angular.module('snailbox', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

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
    });

  $urlRouterProvider
    .otherwise('/login');
});