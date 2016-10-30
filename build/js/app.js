"use strict";angular.module("snailbox",["ui.router","angucomplete-alt"]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(e,t,r){e.state("login",{url:"/login",templateUrl:"./app/features/login/loginTmpl.html",controller:"loginCtrl as loginCtrl"}).state("signup",{url:"/signup",templateUrl:"./app/features/signup/signupTmpl.html",controller:"signupCtrl as signupCtrl"}).state("userHome",{url:"/user/:id",templateUrl:"./app/features/userHome/userHomeTmpl.html",controller:"userHomeCtrl as userHomeCtrl"}).state("newAddress",{url:"/user/:id/new",templateUrl:"./app/features/newAddress/newAddressTmpl.html",controller:"newAddressCtrl as newAddressCtrl"}).state("editAddress",{url:"/user/:id/edit",templateUrl:"./app/features/editAddress/editAddressTmpl.html",controller:"editAddressCtrl as editAddressCtrl"}).state("sendAddress",{url:"/user/:id/send",templateUrl:"./app/features/sendAddress/sendAddressTmpl.html",controller:"sendAddressCtrl as sendAddressCtrl"}),t.otherwise("/login"),r.interceptors.push("authInterceptor")}]),angular.module("snailbox").constant("AUTH_EVENTS",{notAuthenticated:"auth-not-authenticated",notAuthorized:"auth-not-authorized"}).constant("API",{SERVER_LOCAL_MDB:"http://localhost:4800/api/v1/",SERVER_HEROKU:"http://snailbox-api.herokuapp.com/api/v1/"}),angular.module("snailbox").service("authInterceptor",["tokenService",function(e){this.request=function(t){var r=e.getToken();return r&&(t.headers.Authorization="Bearer "+r),t},this.response=function(e){return e}}]),angular.module("snailbox").service("authService",["$http","API",function(e,t){this.signup=function(r){return e({method:"POST",url:t.SERVER_HEROKU+"signup",dataType:"json",data:r}).then(function(e){return e.data})},this.login=function(r){return e({method:"POST",url:t.SERVER_HEROKU+"login",dataType:"json",data:r}).then(function(e){return e.data})["catch"](function(e){return e.data})}}]),angular.module("snailbox").service("tokenService",["$window",function(e){var t,r=e.localStorage;this.setToken=function(e){t=e,r.setItem("userToken",e)},this.getToken=function(){return t||(t=r.getItem("userToken")),t},this.removeToken=function(){t=null,r.removeItem("userToken"),console.log("token removed")},this.isAuthenticated=function(){return!!this.getToken()}}]),angular.module("snailbox").service("userService",["$http","API",function(e,t){this.getUserById=function(r){return e({method:"GET",url:t.SERVER_HEROKU+"user/"+r}).then(function(e){return e.data})["catch"](function(e){return e})},this.updateAddress=function(r,s){return e({method:"PUT",url:t.SERVER_HEROKU+"user/"+r+"/address",dataType:"json",data:s}).then(function(e){return e.data})["catch"](function(e){return e})},this.getAllUsers=function(){return e({method:"GET",url:t.SERVER_LOCAL_MDB+"users"}).then(function(e){return e.data})["catch"](function(e){return e})}}]),angular.module("snailbox").directive("userHeader",function(){return{restrict:"E",scope:{},templateUrl:"./app/directives/userHeader/userHeaderTmpl.html",controllerAs:"ctrl",controller:["$location","$stateParams","tokenService",function(e,t,r){this.logout=function(){r.removeToken(),e.path("/")},this.userHome=function(){e.path("/user/"+t.id)}}],bindToController:!0}}),angular.module("snailbox").controller("editAddressCtrl",["$stateParams","$state","$location","userService",function(e,t,r,s){var n=this;n.getUser=function(){s.getUserById(e.id).then(function(e){n.userAddress=e.address,console.log("editAddressCtrl.userAddress",n.userAddress)})},n.getUser(),n.submitUpdatedAddress=function(t){return!!t&&void s.updateAddress(e.id,n.userAddress).then(function(t){"Update Success!"===t?r.path("/user/"+e.id):console.log("response",t)})}}]),angular.module("snailbox").controller("loginCtrl",["$state","$location","authService","tokenService",function(e,t,r,s){var n=this;n.loading=!1,n.error=!1,n.goToSignup=function(){e.go("signup")},n.submitLoginForm=function(e){return n.error=!1,!!e&&(n.loading=!0,void r.login(n.data).then(function(e){return console.log("loginResponse::::",e),n.loading=!1,"Login Success"!==e.message?(n.error=!0,n.data.password="",!1):(s.setToken(e.token),void(e.user.address.address1?t.path("/user/"+e.user._id):t.path("/user/"+e.user._id+"/new")))}))}}]),angular.module("snailbox").controller("newAddressCtrl",["$state","$stateParams","$location","userService",function(e,t,r,s){var n=this;n.error=!1,n.submitNewAddress=function(e){return n.error=!1,e?void s.updateAddress(t.id,n.newAddressData).then(function(e){console.log("address update response: ",e),"Update Success!"===e&&(n.newAddressData=null,r.path("/user/"+t.id))})["catch"](function(e){console.log("error",e)}):(n.error=!0,!1)}}]),angular.module("snailbox").controller("sendAddressCtrl",["$scope","$state","$stateParams","$location","userService",function(e,t,r,s,n){var o=this;o.getAllUsers=function(){n.getAllUsers().then(function(e){o.allUsers=e,console.log("sendAddressCtrl.allUsers",o.allUsers)})},o.getAllUsers(),o.requestedUsers=[],o.addUserToRequests=function(t){o.requestedUsers.push(t),e.$broadcast("angucomplete-alt:clearInput"),console.log("sendAddressCtrl.requestedUsers",o.requestedUsers)}}]),angular.module("snailbox").controller("signupCtrl",["$state","$location","authService","tokenService",function(e,t,r,s){var n=this;n.loading=!1,n.error=!1,n.passwordError=!1,n.goToLogin=function(){e.go("login")},n.submitSignupForm=function(e){return n.error=!1,n.passwordError=!1,!!e&&(n.data.password!==n.data.password2?(n.error=!0,n.passwordError=!0,n.data.password="",n.data.password2="",!1):(n.loading=!0,void r.signup(n.data).then(function(e){return console.log("signupResponse ::::",e),n.loading=!1,"Registration Success"!==e.message?(n.error=!0,n.data.password="",n.data.password2="",!1):(s.setToken(e.token),void t.path("/user/"+e.user._id+"/new"))})))}}]),angular.module("snailbox").controller("userHomeCtrl",["$stateParams","$state","$location","userService",function(e,t,r,s){var n=this;n.getUser=function(){s.getUserById(e.id).then(function(t){t.address.address1||r.path("/user/"+e.id+"/new"),console.log("user",t),n.address=t.address})["catch"](function(e){t.go("login"),console.log("error",e)})},n.getUser(),n.goToEditAddress=function(){r.path("/user/"+e.id+"/edit")},n.goToSendAddress=function(){r.path("/user/"+e.id+"/send")}}]);