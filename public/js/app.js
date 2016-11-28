'use strict';

angular.module('snailbox', ['ui.router', 'angucomplete-alt'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

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
      })

      .state('editAddress', {
        url: '/user/:id/edit',
        templateUrl: './app/features/editAddress/editAddressTmpl.html',
        controller: 'editAddressCtrl as editAddressCtrl'
      })

      .state('send', {
        url: '/user/:id/send',
        templateUrl: './app/features/sendAddress/sendTmpl.html',
        controller: 'sendCtrl as sendCtrl'
      })

      .state('review', {
        url: '/user/:id/review',
        templateUrl: './app/features/review/reviewTmpl.html',
        controller: 'reviewCtrl as reviewCtrl'
      })

      .state('addresses', {
        url: '/user/:id/addresses',
        templateUrl: './app/features/addressBook/addressBook.html',
        controller: 'addressBookCtrl as addressBookCtrl'
      });

    $urlRouterProvider
      .otherwise('/login');

    $httpProvider.interceptors.push('authInterceptor');

  });