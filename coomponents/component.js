app.component('test', {
    templateUrl : 'component.html',
    bindings: {
        say: '<'
    },
    controllerAs: '$ctrl',
    controller: testController
});


function testController($scope, $element, $attrs) {
    var ctrl = this;
    $scope.changeSay = function() {
        ctrl.say = 1;
    }
}