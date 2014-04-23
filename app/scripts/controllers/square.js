/**
 *
 * Created by myself on 4/22/14.
 */


angular.module('robotServerApp')
    .controller('SquareCtrl', function ($scope, $routeParams) {
        var length = $routeParams.length*1000;
        $scope.code =  "symbol leftF = B.4 symbol leftB = B.5 symbol rightF = B.6 symbol rightB = B.7 symbol counter = b1  main: for counter = 1 to 4 high leftF high rightF pause " + length + " low leftF high leftB pause 250 low leftB high leftF next counter  end"
    });

