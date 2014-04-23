/**
 * Created by myself on 4/22/14.
 */
angular.module('robotServerApp')
    .controller('LineCtrl', function ($scope, $routeParams) {
        var length = $routeParams.length*1000;
        $scope.code = "main: forward A ; go forwards forward B pause " + length + " low A low B end";

    });
