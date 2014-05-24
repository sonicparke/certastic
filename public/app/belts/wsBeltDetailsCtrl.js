angular.module('app').controller('wsBeltDetailsCtrl', function($scope, wsCachedBelts, $routeParams) {
    wsCachedBelts.query().$promise.then(function(collection) {
        collection.forEach(function(belt) {
            if(belt._id === $routeParams.id) {
                $scope.belt = belt;
            }
        });
    });
});