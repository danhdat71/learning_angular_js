app.directive("w3TestDirective", function () {
    return {
        template: "I was made in a directive constructor!"
    };
});


app.directive('ngEnterPress', function () {
    return function (scope, element, attrs) {
        element.on('keydown', function (event) {
            if (event.key === 'Enter') {
                scope.$apply(function () {
                    scope.keywordSubmit = element.val();
                });
            }
        });
    }
});

app.directive('customOnChange', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            let functionName = attrs.customOnChange;
            element.on('change', scope.$eval(functionName));
        }
    };
});

app.directive('customInputValidImage', function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel) {
            var validFormats = ['jpg','jpeg','png'];
            elem.on('change', function () {
                validImage(false);
                scope.$apply(function () {
                    ngModel.$render();
                });
            });
            ngModel.$render = function () {
                ngModel.$setViewValue(elem.val());
            };
            function validImage(bool) {
                ngModel.$setValidity('validExtension', bool);
            }
            ngModel.$parsers.push(function(value) {
                var ext = value.substr(value.lastIndexOf('.')+1);
                if(ext=='') return;
                if(validFormats.indexOf(ext) == -1){
                    return value;
                }
                validImage(true);
                return value;
            });
            
        }
    }
});