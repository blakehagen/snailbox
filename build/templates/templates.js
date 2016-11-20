angular.module('snailbox').run(['$templateCache', function($templateCache) {$templateCache.put('./app/directives/userHeader/userHeaderTmpl.html','<header class="user-home-header flex-base-row-end"><div class="logo flex-base-row-center default-cursor"><img src=../assets/snailbox-home.svg alt="SnailBox Home" ng-click=ctrl.userHome()> <img src=../assets/edit-icon-header.svg alt="Edit Address" ng-click=ctrl.edit()> <img src=../assets/plus-icon-header.svg alt=Review ng-click=ctrl.send()> <img src=../assets/check-icon-header.svg alt="Add Connections" ng-click=ctrl.review()> <img src=../assets/logout.svg alt="Log Out" ng-click=ctrl.logout()></div></header>');
$templateCache.put('./app/features/editAddress/editAddressTmpl.html','<div class="form-page-wrap flex-base-col-center edit-wrap-background" style="min-height: 560px;"><div class="form-container address-form"><div class="title flex-base-row-center"><img src=../assets/snail-icon.svg alt=SnailBox><div class="address-title default-cursor"><h5>Edit My Address</h5></div></div><div class="flex-base-col-center error-container" ng-if=editAddressCtrl.error><p class="err-txt default-cursor">Please Complete Form</p></div><div><form name=editAddress ng-submit=editAddressCtrl.submitUpdatedAddress(editAddress.$valid) novalidate><input type=text placeholder="Address Line 1" name=address1 ng-model=editAddressCtrl.userAddress.address1 ng-model-options="{debounce: 1500}" ng-class="editAddressCtrl.address1.$invalid && !editAddressCtrl.address1.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text ng-model=editAddressCtrl.userAddress2 editaddressctrl.useraddress placeholder="Address Line 2"> <input type=text placeholder=City name=city ng-model=editAddressCtrl.userAddress.city ng-model-options="{debounce: 1500}" ng-class="editAddressCtrl.city.$invalid && !editAddressCtrl.city.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder=State name=state ng-model=editAddressCtrl.userAddress.state ng-model-options="{debounce: 1500}" ng-class="editAddressCtrl.state.$invalid && !editAddressCtrl.state.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Postal Code" name=postalCode ng-model=editAddressCtrl.userAddress.postal_code ng-model-options="{debounce: 1500}" ng-class="editAddressCtrl.postalCode.$invalid && !editAddressCtrl.postalCode.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder=Country name=country ng-model=editAddressCtrl.userAddress.country ng-model-options="{debounce: 1500}" ng-class="editAddressCtrl.country.$invalid && !newAddress.country.$pristine ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Update Address</p></button></form><div class="flex-base-row-center row address-locked-note default-cursor"><img src=../assets/lock-icon.svg alt><p>Address is locked and will only be visible to those who you share it with. View permissions and revoke access in Address Book.</p></div></div></div></div>');
$templateCache.put('./app/features/newAddress/newAddressTmpl.html','<div class="form-page-wrap flex-base-col-center login-signup-wrap-background" style="min-height: 560px;"><div class="form-container address-form"><div class="title flex-base-row-center"><img src=../assets/snail-icon.svg alt=SnailBox><div class="address-title default-cursor"><h5>Welcome to SnailBox!</h5><p>&nbsp;What\'s your address?</p></div></div><div class="flex-base-col-center error-container" ng-if=newAddressCtrl.error><p class="err-txt default-cursor">Please Complete Form</p></div><div><form name=newAddress ng-submit=newAddressCtrl.submitNewAddress(newAddress.$valid) novalidate><input type=text placeholder="Address Line 1" name=address1 ng-model=newAddressCtrl.newAddressData.address1 ng-model-options="{debounce: 1500}" ng-class="newAddress.address1.$invalid && !newAddress.address1.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Address Line 2"> <input type=text placeholder=City name=city ng-model=newAddressCtrl.newAddressData.city ng-model-options="{debounce: 1500}" ng-class="newAddress.city.$invalid && !newAddress.city.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder=State name=state ng-model=newAddressCtrl.newAddressData.state ng-model-options="{debounce: 1500}" ng-class="newAddress.state.$invalid && !newAddress.state.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Postal Code" name=postalCode ng-model=newAddressCtrl.newAddressData.postal_code ng-model-options="{debounce: 1500}" ng-class="newAddress.postalCode.$invalid && !newAddress.postalCode.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder=Country name=country ng-model=newAddressCtrl.newAddressData.country ng-model-options="{debounce: 1500}" ng-class="newAddress.country.$invalid && !newAddress.country.$pristine ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Save Address</p></button></form><div class="flex-base-row-center row address-locked-note default-cursor"><img src=../assets/lock-icon.svg alt><p>Address is locked and will only be visible to those who you share it with. View permissions and revoke access in Address Book.</p></div></div></div></div>');
$templateCache.put('./app/features/login/loginTmpl.html','<section class="flex-base-col-center form-page-wrap login-signup-wrap-background"><div class=form-container><div class="title flex-base-row-center default-cursor"><img src=../assets/snail-icon.svg alt=SnailBox><h1>SnailBox</h1></div><div class=flex-base-col-center style="padding-bottom: 16px;" ng-if=loginCtrl.loading><div class=sk-fading-circle><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div></div><div class="flex-base-col-center error-container" ng-if=loginCtrl.error><p class="err-txt default-cursor">Login Failed</p></div><div ng-if=!loginCtrl.loading><form name=login ng-submit=loginCtrl.submitLoginForm(login.$valid) novalidate><input type=email placeholder=E-mail name=email ng-model=loginCtrl.data.email ng-model-options="{debounce: 1500}" ng-class="login.email.$invalid && !login.email.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=password placeholder=Password name=password ng-model=loginCtrl.data.password ng-model-options="{debounce: 1500}" ng-class="login.password.$invalid && !login.password.$pristine ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Log In</p></button></form><div class="flex-base-row-center row"><p class=sign-up-txt ng-click=loginCtrl.goToSignup()>Create Account</p></div></div></div></section>');
$templateCache.put('./app/features/review/reviewTmpl.html','<section class=user-home-wrapper><div class="review-container flex-base-row-center"><section class=review-user-section><div class="review-user-section-title flex-base-row-start default-cursor"><img src=../assets/mailbox-down-icon.svg alt=Review><p>Requests Received</p></div><div class="review-content-container flex-base-col-start default-cursor"><div class="content-row flex-base-row-start"><p style="font-size: 16px;">Check box to accept user request to connect and share addresses.</p></div><div class="request-row flex-base-row-start" ng-repeat="invite in reviewCtrl.received track by $index" ng-click="reviewCtrl.selectUser(invite.selected, invite, this)"><img src=../assets/checkbox-unchecked.svg alt=checkbox-unchecked ng-show=!invite.selected> <img src=../assets/checkbox-checked.svg alt=checkbox-checked ng-show=invite.selected><p><span id=name>{{invite.firstName}} {{ invite.lastName }}</span> &nbsp;({{ invite.email }})</p></div></div><div class="review-buttons-container flex-base-row-start"><div class="btn cancel-btn flex-base-col-center"><p>Cancel</p></div><div class="btn flex-base-col-center"><p>Save</p></div></div></section></div></section>');
$templateCache.put('./app/features/sendAddress/sendTmpl.html','<section class=user-home-wrapper><div class="send-container flex-base-row-center"><section class=search-user-section><div class="search-user-section-title flex-base-row-start default-cursor"><img src=../assets/search-icon.svg alt=Search><p>Search Users</p></div><div class="search-content-container flex-base-col-start default-cursor"><div class=send-instructions><div class=content-row><p style="font-size: 17px;">Search other SnailBox users and request to add them to your Address Book.</p></div><div class=content-row><p style="font-size: 15px;"><span style="font-weight: 400">Note:</span>&nbsp; If there is a user you cannot add, you are either already connected, have an invite from the user, or have already sent them an invite.</p></div></div><div class="search-users-container flex-base-row-start" ng-if=!sendCtrl.readyToSend><div angucomplete-alt id=allUserSearch placeholder="Search by Name..." title-field=firstName,lastName description-field=firstName,lastName search-fields=firstName,lastName local-data=sendCtrl.allUsers selected-object=selectedUser input-class=search-input match-class=highlight pause=200 minlength=3></div><img src=../assets/plus-icon-blue.svg alt="Add User" ng-click=sendCtrl.addUserToRequests(selectedUser.originalObject)></div><div class="invitations-container flex-base-row-start"><div class=invitations-box><div class=name ng-repeat="user in sendCtrl.requestedUsers"><img src=../assets/minus-icon.svg alt="Remove User" ng-click=sendCtrl.removeUserFromRequests(user)> {{ user.firstName }} {{ user.lastName }}</div></div></div><div class="send-buttons-container flex-base-row-start"><div class="btn flex-base-col-center" ng-show="!sendCtrl.readyToSend && sendCtrl.requestedUsers.length > 0" ng-click=sendCtrl.setReady()><p>Done</p></div><div class="btn add-more-btn flex-base-col-center" ng-if=sendCtrl.readyToSend ng-click=sendCtrl.setReady()><p>Cancel</p></div><div class="btn flex-base-col-center" ng-if="sendCtrl.readyToSend && sendCtrl.requestedUsers.length > 0" ng-click=sendCtrl.sendInvites()><p>Send</p></div></div></div></section></div></section>');
$templateCache.put('./app/features/signup/signupTmpl.html','<section class="flex-base-col-center form-page-wrap login-signup-wrap-background"><div class=form-container><div class="title flex-base-row-center default-cursor"><img src=../assets/snail-icon.svg alt=SnailBox><h1>SnailBox</h1></div><div class=flex-base-col-center style="padding-bottom: 16px;" ng-if=signupCtrl.loading><div class=sk-fading-circle><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div></div><div class="flex-base-col-center error-container" ng-if=signupCtrl.error><p class=err-txt ng-if=!signupCtrl.passwordError>Registration Failed</p><p class=err-txt ng-if=signupCtrl.passwordError>Passwords do not match</p></div><div ng-if=!signupCtrl.loading><form name=signup ng-submit=signupCtrl.submitSignupForm(signup.$valid) novalidate><input type=text placeholder="First Name" name=firstName ng-model=signupCtrl.data.firstName ng-model-options="{debounce: 1500}" ng-class="signup.firstName.$invalid && !signup.firstName.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=text placeholder="Last Name" name=lastName ng-model=signupCtrl.data.lastName ng-model-options="{debounce: 1500}" ng-class="signup.lastName.$invalid && !signup.lastName.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=email placeholder=Email name=email ng-model=signupCtrl.data.email ng-model-options="{debounce: 1500}" ng-class="signup.email.$invalid && !signup.email.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=password placeholder=Password name=password ng-model=signupCtrl.data.password ng-model-options="{debounce: 1500}" ng-class="signup.password.$invalid && !signup.password.$pristine ? \'invalid-input\' : \'valid-input\'" required> <input type=password placeholder="Confirm Password" name=password2 ng-model=signupCtrl.data.password2 ng-model-options="{debounce: 1500}" ng-class="signup.password.valid ? \'invalid-input\' : \'valid-input\'" required> <button class="btn flex-base-col-center" type=submit><p>Register</p></button></form><div class="flex-base-row-center row"><p class=sign-up-txt ng-click=signupCtrl.goToLogin()>Login</p></div></div></div></section>');
$templateCache.put('./app/features/userHome/userHomeTmpl.html','<section class=user-home-wrapper><section class=flex-base-row-center-start><section class=user-section><div class="user-section-title flex-base-row-start default-cursor"><img src=../assets/home-icon.svg alt=my-address><p>My Address</p></div><div class="content-container flex-base-col-start default-cursor"><div class="address-container flex-base-col-start"><div class=content-row><p>{{ userHomeCtrl.address.address1 }}</p></div><div class=content-row ng-if=userHomeCtrl.address.address2><p>{{ userHomeCtrl.address.address2 }}</p></div><div class=content-row><p>{{ userHomeCtrl.address.city }} {{ userHomeCtrl.address.state }},&nbsp; {{userHomeCtrl.address.postal_code}}</p></div><div class=content-row><p>{{ userHomeCtrl.address.country }}</p></div></div><div class="content-row actions flex-base-row-start"><img src=../assets/check-icon-blue.svg alt="Address Book" style="width: 34px;"><p>My Address Book</p></div><div class="content-row actions flex-base-row-start" ng-click=userHomeCtrl.goToSendAddress()><img src=../assets/plus-icon-blue.svg alt=send-address style="width: 34px;"><p>Send My Address</p></div><div class="content-row actions flex-base-row-start" ng-click=userHomeCtrl.goToReview()><img src=../assets/check-icon-blue.svg alt=review-address-requests style="width: 34px;"><p>Review Requests</p></div><div class="content-row actions flex-base-row-start" ng-click=userHomeCtrl.goToEditAddress()><img src=../assets/circle-edit-icon.svg alt=edit-address style="width: 34px;"><p>Edit Address</p></div></div></section></section></section>');}]);