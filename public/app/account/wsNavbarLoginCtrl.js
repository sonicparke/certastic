angular.module('app').controller('wsNavbarLoginCtrl', ['$scope', '$http', 'wsIdentity', 'wsNotifier', 'wsAuth', '$location', function ($scope,$http,wsIdentity,wsNotifier,wsAuth,$location) {
    $scope.identity = wsIdentity;
    $scope.signin = function(username, password) {
        wsAuth.authenticateUser(username, password).then(function(success){
            if(success){
                wsNotifier.notify('You have successfully logged in!');
            } else {
                wsNotifier.notify('Username/Password combination incorrect.');
            }
        })
    }
    $scope.signout = function() {
        wsAuth.logoutUser().then(function(){
            $scope.username = "";
            $scope.password = "";
            wsNotifier.notify('You have successfully logged out!');
            $location.path('/');
        })
    }
}])