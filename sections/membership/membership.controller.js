var app = angular.module('badmintonApp');
app.controller('membershipController', ['$scope', 'purchaseMembershipLink', 'getTheKitLink', function($scope, purchaseMembershipLink, getTheKitLink) {
  $scope.purchaseMembershipLink = purchaseMembershipLink;
  $scope.getTheKitLink = getTheKitLink;
}]);
