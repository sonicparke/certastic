angular.module('app').controller('wsProfileCtrl', ['$scope', 'wsAuth', 'wsIdentity', 'wsNotifier', function ($scope,wsAuth,wsIdentity,wsNotifier) {
    $scope.email = wsIdentity.currentUser.username;
    $scope.firstName = wsIdentity.currentUser.firstName;
    $scope.lastName = wsIdentity.currentUser.lastName;

    var currentUserTest = wsIdentity.currentUser;
    $scope.update = function() {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.firstName,
            lastName: $scope.lastName
        };
        if($scope.password && $scope.password.length > 0 ) {
            newUserData.password = $scope.password;
        }

        wsAuth.updateCurrentUser(newUserData).then(function() {
            wsNotifier.notify('Your user account has been updated');
        }, function(reason) {
            wsNotifier.error(reason);
        });
    };
}]);