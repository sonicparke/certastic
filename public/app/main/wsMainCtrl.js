angular.module('app').controller('wsMainCtrl', ['$scope', 'wsCachedBelts', function ($scope, wsCachedBelts) {

        $scope.belts = wsCachedBelts.query();
}]);
