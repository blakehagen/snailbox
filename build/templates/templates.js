angular.module('snailbox').run(['$templateCache', function($templateCache) {$templateCache.put('./app/features/editAddress/editAddressTmpl.html','<div class="form-page-wrap flex-base-col-center edit-wrap-background" style="min-height: 560px;"><div class="form-container address-form"><div class="title flex-base-row-center"><img src=../assets/snail-icon.svg alt=SnailBox><div class="address-title default-cursor"><h5>Edit My Address</h5></div></div><div class="flex-base-col-center error-container" ng-if=newAddressCtrl.error><p class="err-txt default-cursor">Please Complete Form</p></div><div><form name=newAddress ng-submit=newAddressCtrl.submitNewAddress(newAddress.$valid) novalidate><input type=text placeholder="Address Line 1" name=address1 ng-model=newAddressCtrl.newAddressData.address1 ng-model-options="{debounce: 1500}" ng-class="newAddress.address1.$invalid && !newAddress.address1.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Address Line 2"> <input type=text placeholder=City name=city ng-model=newAddressCtrl.newAddressData.city ng-model-options="{debounce: 1500}" ng-class="newAddress.city.$invalid && !newAddress.city.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder=State name=state ng-model=newAddressCtrl.newAddressData.state ng-model-options="{debounce: 1500}" ng-class="newAddress.state.$invalid && !newAddress.state.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Postal Code" name=postalCode ng-model=newAddressCtrl.newAddressData.postal_code ng-model-options="{debounce: 1500}" ng-class="newAddress.postalCode.$invalid && !newAddress.postalCode.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder=Country name=country ng-model=newAddressCtrl.newAddressData.country ng-model-options="{debounce: 1500}" ng-class="newAddress.country.$invalid && !newAddress.country.$pristine ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Update Address</p></button></form><div class="flex-base-row-center row address-locked-note default-cursor"><img src=../assets/lock-icon.svg alt><p>Address is locked and will only be visible to those who you share it with. View permissions and revoke access in Address Book.</p></div></div></div></div>');
$templateCache.put('./app/features/newAddress/newAddressTmpl.html','<div class="form-page-wrap flex-base-col-center login-signup-wrap-background" style="min-height: 560px;"><div class="form-container address-form"><div class="title flex-base-row-center"><img src=../assets/snail-icon.svg alt=SnailBox><div class="address-title default-cursor"><h5>Welcome to SnailBox!</h5><p>&nbsp;What\'s your address?</p></div></div><div class="flex-base-col-center error-container" ng-if=newAddressCtrl.error><p class="err-txt default-cursor">Please Complete Form</p></div><div><form name=newAddress ng-submit=newAddressCtrl.submitNewAddress(newAddress.$valid) novalidate><input type=text placeholder="Address Line 1" name=address1 ng-model=newAddressCtrl.newAddressData.address1 ng-model-options="{debounce: 1500}" ng-class="newAddress.address1.$invalid && !newAddress.address1.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Address Line 2"> <input type=text placeholder=City name=city ng-model=newAddressCtrl.newAddressData.city ng-model-options="{debounce: 1500}" ng-class="newAddress.city.$invalid && !newAddress.city.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder=State name=state ng-model=newAddressCtrl.newAddressData.state ng-model-options="{debounce: 1500}" ng-class="newAddress.state.$invalid && !newAddress.state.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Postal Code" name=postalCode ng-model=newAddressCtrl.newAddressData.postal_code ng-model-options="{debounce: 1500}" ng-class="newAddress.postalCode.$invalid && !newAddress.postalCode.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder=Country name=country ng-model=newAddressCtrl.newAddressData.country ng-model-options="{debounce: 1500}" ng-class="newAddress.country.$invalid && !newAddress.country.$pristine ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Save Address</p></button></form><div class="flex-base-row-center row address-locked-note default-cursor"><img src=../assets/lock-icon.svg alt><p>Address is locked and will only be visible to those who you share it with. View permissions and revoke access in Address Book.</p></div></div></div></div>');
$templateCache.put('./app/features/login/loginTmpl.html','<section class="flex-base-col-center form-page-wrap login-signup-wrap-background"><div class=form-container><div class="title flex-base-row-center default-cursor"><img src=../assets/snail-icon.svg alt=SnailBox><h1>SnailBox</h1></div><div class=flex-base-col-center style="padding-bottom: 16px;" ng-if=loginCtrl.loading><div class=sk-fading-circle><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div></div><div class="flex-base-col-center error-container" ng-if=loginCtrl.error><p class="err-txt default-cursor">Login Failed</p></div><div ng-if=!loginCtrl.loading><form name=login ng-submit=loginCtrl.submitLoginForm(login.$valid) novalidate><input type=email placeholder=E-mail name=email ng-model=loginCtrl.data.email ng-model-options="{debounce: 1500}" ng-class="login.email.$invalid && !login.email.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=password placeholder=Password name=password ng-model=loginCtrl.data.password ng-model-options="{debounce: 1500}" ng-class="login.password.$invalid && !login.password.$pristine ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Log In</p></button></form><div class="flex-base-row-center row"><p class=sign-up-txt ng-click=loginCtrl.goToSignup()>Create Account</p></div></div></div></section>');
$templateCache.put('./app/features/signup/signupTmpl.html','<section class="flex-base-col-center form-page-wrap login-signup-wrap-background"><div class=form-container><div class="title flex-base-row-center default-cursor"><img src=../assets/snail-icon.svg alt=SnailBox><h1>SnailBox</h1></div><div class=flex-base-col-center style="padding-bottom: 16px;" ng-if=signupCtrl.loading><div class=sk-fading-circle><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div></div><div class="flex-base-col-center error-container" ng-if=signupCtrl.error><p class=err-txt ng-if=!signupCtrl.passwordError>Registration Failed</p><p class=err-txt ng-if=signupCtrl.passwordError>Passwords do not match</p></div><div ng-if=!signupCtrl.loading><form name=signup ng-submit=signupCtrl.submitSignupForm(signup.$valid) novalidate><input type=text placeholder="First Name" name=firstName ng-model=signupCtrl.data.firstName ng-model-options="{debounce: 1500}" ng-class="signup.firstName.$invalid && !signup.firstName.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Last Name" name=lastName ng-model=signupCtrl.data.lastName ng-model-options="{debounce: 1500}" ng-class="signup.lastName.$invalid && !signup.lastName.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=email placeholder=Email name=email ng-model=signupCtrl.data.email ng-model-options="{debounce: 1500}" ng-class="signup.email.$invalid && !signup.email.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=password placeholder=Password name=password ng-model=signupCtrl.data.password ng-model-options="{debounce: 1500}" ng-class="signup.password.$invalid && !signup.password.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=password placeholder="Confirm Password" name=password2 ng-model=signupCtrl.data.password2 ng-model-options="{debounce: 1500}" ng-class="signup.password.valid ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Register</p></button></form><div class="flex-base-row-center row"><p class=sign-up-txt ng-click=signupCtrl.goToLogin()>Login</p></div></div></div></section>');
$templateCache.put('./app/features/userHome/userHomeTmpl.html','<user-header></user-header><section class="user-home-wrap flex-base-row-center-start"><section class=user-section><div class="user-section-title flex-base-row-start default-cursor"><img src=../assets/home-icon.svg alt=my-address><p>My Address</p></div><div class="content-container flex-base-col-start default-cursor"><div class=content-row><p>{{ userHomeCtrl.address.address1 }}</p></div><div class=content-row ng-if=userHomeCtrl.address.address2><p>{{ userHomeCtrl.address.address2 }}</p></div><div class=content-row><p>{{ userHomeCtrl.address.city }} {{ userHomeCtrl.address.state }},&nbsp; {{userHomeCtrl.address.postal_code}}</p></div><div class=content-row><p>{{ userHomeCtrl.address.country }}</p></div><div class="content-row actions actions-top flex-base-row-start" ng-click=userHomeCtrl.editAddress()><img src=../assets/circle-edit-icon.svg alt=edit-address style="width: 34px;"><p>Edit Address</p></div><div class="content-row actions flex-base-row-start"><img src=../assets/plus-icon-blue.svg alt=send-address style="width: 34px;"><p>Send My Address</p></div><div class="content-row actions flex-base-row-start"><img src=../assets/check-icon-blue.svg alt=review-address-requests style="width: 34px;"><p>Review Address Requests</p></div></div></section><section class=user-section><div class="user-section-title flex-base-row-start default-cursor"><img src=../assets/latest-news-icon.svg style="width: 34px;" alt=latest-news><p>Latest News</p></div><div class="content-container flex-base-col-start default-cursor"><div class=content-row><p style="text-align: center">The holiday season is quickly approaching!</p></div><img src=../assets/holiday-icon.svg alt=holiday style="width: 130px; padding: 10px;"><div class=content-row style="padding-bottom: 10px"><p style="font-size: 13px;">Marketing messaging and current promos here. Marketing messaging and current promos here.</p></div></div></section><section class=user-section><div class="user-section-title flex-base-row-start default-cursor"><img src=../assets/notebook-icon.svg alt=address-book><p>Address Book</p></div><div class="content-container flex-base-col-start default-cursor"><div class="content-row actions actions-top flex-base-row-start"><img src=../assets/circle-edit-icon.svg alt=edit-address style="width: 34px;"><p>Edit Address</p></div><div class="content-row actions flex-base-row-start"><img src=../assets/plus-icon-blue.svg alt=send-address style="width: 34px;"><p>Send My Address</p></div><div class="content-row actions flex-base-row-start"><img src=../assets/check-icon-blue.svg alt=review-address-requests style="width: 34px;"><p>Review Address Requests</p></div><div class="content-row actions flex-base-row-start"><img src=../assets/check-icon-blue.svg alt=review-address-requests style="width: 34px;"><p>Review Address Requests</p></div><div class="content-row actions flex-base-row-start"><img src=../assets/check-icon-blue.svg alt=review-address-requests style="width: 34px;"><p>Review Address Requests</p></div><div class="content-row actions flex-base-row-start"><img src=../assets/check-icon-blue.svg alt=review-address-requests style="width: 34px;"><p>Review Address Requests</p></div></div></section></section>');
$templateCache.put('./app/directives/userHeader/userHeaderTmpl.html','<header class="user-home-header flex-base-row-end"><div class="logo flex-base-row-center default-cursor"><img src=../assets/snail-icon.svg alt=SnailBox><p>SnailBox</p></div><div class="header-col flex-base-row-center"><div class=logout ng-click=ctrl.logout()></div></div></header>');}]);