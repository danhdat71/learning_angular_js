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

app.directive('customInputValidImage', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            var maxFileSize = parseInt(attrs.customInputValidImage);

            function validateFileSize(value) {
                if (value.size > maxFileSize) {
                    ngModel.$setValidity('validExtension', false);
                } else {
                    ngModel.$setValidity('validExtension', true);
                }

                return value;
            }

            ngModel.$parsers.push(validateFileSize);

            element.on('change', function () {
                scope.$apply(function () {
                    ngModel.$setViewValue(element[0].files[0]);
                });
            });
        }
    }
});