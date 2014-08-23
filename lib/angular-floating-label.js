(function() {
  angular.module('floatingLabel', [])
    .directive('floatingLabel', ['$parse', function($parse) {
        function link(scope, el, attrs) {
            function floatLabel(value) {
                if(typeof value !== 'undefined' && value.length > 0) {
                    el.parent().addClass('floating-label-form-group-with-value');
                } else {
                    el.parent().removeClass('floating-label-form-group-with-value');
                }
            }
            scope.$watch(attrs.floatingLabel, function(value) {
                floatLabel(value);
            });
        }
        return {
            link: link
        };
    }]);
}());
