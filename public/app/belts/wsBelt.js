angular.module('app').factory('wsBelt', function($resource) {
    var BeltResource = $resource('/api/belts/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray:false}
    });
    return BeltResource;
});