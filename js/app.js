  angular
    .module(‘productLaunch', [])
    .controller('MainCtrl', function ($scope) {
      $scope.intro_message = "Welcome To Angular!"
      $scope.thankyou_message = "Thank you for signing up!"
    });