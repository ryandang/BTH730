angular.module('bthApp', ["ui.bootstrap"])

.controller('loginController', function ($scope, $modal, $location, $window) {

  $scope.msg = "";
  $scope.email = "";
  $scope.password = "";

  $scope.closeAlert = function() {
    $scope.msg = "";
  };

  $scope.submit = function() {
    if($scope.email.toLowerCase() === "test@gmail.com" && $scope.password.toLowerCase() === "test") {
        $window.location.href = "./view.html";
    } else {
        $scope.msg = "Incorrect Email or Password."
    }
  }

});