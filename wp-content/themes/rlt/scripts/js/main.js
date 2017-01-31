define("bulletin.module", ["require", "exports"], function (require, exports) {
    "use strict";
    var Bulletin = (function () {
        function Bulletin() {
            this.setHeight();
            var ctrl = this; // set context to a variable
            $(window).on('resize', function () {
                ctrl.setHeight(); // using context variable in place of "this"
            });
        }
        // function to get heights of selectors
        Bulletin.prototype.getHeight = function (selector) {
            return selector.outerHeight();
        };
        // function to test + set heights dynamically
        Bulletin.prototype.setHeight = function () {
            $('.bulletin, .bulletin *').css('height', '');
            // check heights of objects and set variables
            this.feedHeight = this.getHeight($('.bulletin .feed'));
            this.containerHeight = this.getHeight($('.bulletin'));
            if (this.feedHeight > this.containerHeight) {
                // if feedheight is larger than the container, adjust container size to fit
                $('.bulletin').css({
                    'height': this.feedHeight + 64
                });
            }
            else {
                // else if container is larger, expand feed to fit
                $('.bulletin > .feed').css('height', (this.containerHeight));
                $('.bulletin').css({
                    'height': this.containerHeight + 64
                });
            }
        };
        return Bulletin;
    }());
    exports.Bulletin = Bulletin;
});
define("classFilter.module", ["require", "exports"], function (require, exports) {
    "use strict";
    var ClassFilter = (function () {
        function ClassFilter() {
            var ctrl = this;
            $('.filter select[data-ctrl]').change(function () {
                var currentCtrl = $(this).data('ctrl');
                var currentVal = $(this).val();
                ctrl.checkConditionals(currentCtrl, currentVal);
            });
        }
        ClassFilter.prototype.checkConditionals = function (ctrl, value) {
            $('.conditional').hide().each(function () {
                if (($(this).data('listen') == ctrl) && ($(this).data('show') == value)) {
                    $(this).fadeIn();
                }
            });
        };
        return ClassFilter;
    }());
    exports.ClassFilter = ClassFilter;
});
define("main", ["require", "exports", "bulletin.module", "classFilter.module", 'jquery', 'chosen'], function (require, exports, bulletin_module_1, classFilter_module_1) {
    "use strict";
    $(document).ready(function () {
        if ($('.bulletin')) {
            //instantiate Bulletin class to handle sizing
            var bulletin = new bulletin_module_1.Bulletin;
        }
        if ($('.filter')) {
            var filter = new classFilter_module_1.ClassFilter;
        }
        if ($('select')) {
            $('select').chosen();
        }
    });
});

//# sourceMappingURL=../js/main.js.map
