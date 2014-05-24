angular.module('app').controller('wsSignupCtrl', ['$scope', 'wsUser', 'wsNotifier', '$location', 'wsAuth', function($scope, wsUser, wsNotifier, $location, wsAuth){
    $scope.signup = function(){
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.firstName,
            lastName: $scope.lastName
        }

        wsAuth.createUser(newUserData).then(function(){
            wsNotifier.notify('User account created!');
            $location.path('/');
        }, function(reason){
            wsNotifier.error(reason);
        })
    }
}])