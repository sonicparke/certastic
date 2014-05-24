angular.module('app').controller('wsUserListCtrl', ['$scope', 'wsUser', function ($scope, wsUser) {
    $scope.users = wsUser.query();
}]);