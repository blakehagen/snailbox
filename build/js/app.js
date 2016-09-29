"use strict";angular.module("snailbox",["ui.router"]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(e,t,o){e.state("login",{url:"/login",templateUrl:"./app/features/login/loginTmpl.html",controller:"loginCtrl as loginCtrl"}).state("signup",{url:"/signup",templateUrl:"./app/features/signup/signupTmpl.html",controller:"signupCtrl as signupCtrl"}).state("userHome",{url:"/user/:id",templateUrl:"./app/features/userHome/userHomeTmpl.html",controller:"userHomeCtrl as userHomeCtrl"}),t.otherwise("/login"),o.interceptors.push("authInterceptor")}]),angular.module("snailbox").constant("AUTH_EVENTS",{notAuthenticated:"auth-not-authenticated",notAuthorized:"auth-not-authorized"}).constant("API",{SERVER_LOCAL_MDB:"http://localhost:4800/api/v1/",SERVER_HEROKU:"http://snailbox-api.herokuapp.com/api/v1/"}),angular.module("snailbox").service("authInterceptor",["tokenService",function(e){this.request=function(t){var o=e.getToken();return o&&(t.headers.Authorization="Bearer "+o),t},this.response=function(e){return e}}]),angular.module("snailbox").service("authService",["$http","API",function(e,t){this.signup=function(o){return e({method:"POST",url:t.SERVER_HEROKU+"signup",dataType:"json",data:o}).then(function(e){return e.data})},this.login=function(o){return e({method:"POST",url:t.SERVER_HEROKU+"login",dataType:"json",data:o}).then(function(e){return e.data})["catch"](function(e){return e.data})}}]),angular.module("snailbox").service("tokenService",["$window",function(e){var t,o=e.localStorage;this.setToken=function(e){t=e,o.setItem("userToken",e)},this.getToken=function(){return t||(t=o.getItem("userToken")),t},this.removeToken=function(){t=null,o.removeItem("userToken"),console.log("token removed")},this.isAuthenticated=function(){return!!this.getToken()}}]),angular.module("snailbox").service("userService",["$http","API",function(e,t){this.getUserById=function(o){return e({method:"GET",url:t.SERVER_HEROKU+"user/"+o}).then(function(e){return e.data})}}]),angular.module("snailbox").controller("loginCtrl",["$state","$location","authService","tokenService",function(e,t,o,r){var n=this;n.loading=!1,n.error=!1,n.goToSignup=function(){e.go("signup")},n.submitLoginForm=function(e){return n.error=!1,!!e&&(n.loading=!0,void o.login(n.data).then(function(e){return console.log("loginResponse::::",e),n.loading=!1,"Login Success"!==e.message?(n.error=!0,n.data.password="",!1):(r.setToken(e.token),void t.path("/user/"+e.user._id))}))}}]),angular.module("snailbox").controller("userHomeCtrl",["$stateParams","$state","userService",function(e,t,o){var r=this;r.getUser=function(){o.getUserById(e.id).then(function(e){console.log("user",e)})["catch"](function(e){t.go("login"),console.log("error",e)})},r.getUser()}]),angular.module("snailbox").controller("signupCtrl",["$state","$location","authService","tokenService",function(e,t,o,r){var n=this;n.loading=!1,n.error=!1,n.passwordError=!1,n.goToLogin=function(){e.go("login")},n.submitSignupForm=function(e){return n.error=!1,n.passwordError=!1,!!e&&(n.data.password!==n.data.password2?(n.error=!0,n.passwordError=!0,n.data.password="",n.data.password2="",!1):(n.loading=!0,void o.signup(n.data).then(function(e){return console.log("signupResponse ::::",e),n.loading=!1,"Registration Success"!==e.message?(n.error=!0,n.data.password="",n.data.password2="",!1):(r.setToken(e.token),void t.path("/user/"+e.user._id))})))}}]),angular.module("snailbox").directive("userHeader",function(){return{restrict:"E",scope:{},templateUrl:"./app/directives/userHeader/userHeaderTmpl.html",controllerAs:"ctrl",controller:["$location","tokenService",function(e,t){this.logout=function(){t.removeToken(),e.path("/")}}],bindToController:!0}});