define("bulletin.module", ["require", "exports"], function (require, exports) {
    "use strict";
    var Bulletin = (function () {
        function Bulletin() {
            var _this = this;
            this.setHeight();
            $(window).on('resize', function () {
                _this.setHeight();
            });
        }
        // function to get heights of selectors
        Bulletin.prototype.getHeight = function (selector) {
            return selector.outerHeight();
        };
        // function to test + set heights dynamically
        Bulletin.prototype.setHeight = function () {
            if ($(window).width() < 800) {
                $('.bulletin, .bulletin > .feed').css('height', '');
                return false;
            }
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
define("header.module", ["require", "exports"], function (require, exports) {
    "use strict";
    var Header = (function () {
        function Header() {
            this.toggleClass('.mobile.toggle-nav', '.nav-wrapper', 'do-show');
        }
        Header.prototype.toggleClass = function (elemClicked, elemToggled, className) {
            $(elemClicked).on('click', function () {
                $(elemToggled).toggleClass(className);
            });
        };
        return Header;
    }());
    exports.Header = Header;
});
define("main", ["require", "exports", "bulletin.module", "classFilter.module", "header.module", 'jquery', 'chosen'], function (require, exports, bulletin_module_1, classFilter_module_1, header_module_1) {
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
        if ($('.site-header')) {
            var header = new header_module_1.Header;
        }
    });
});

//# sourceMappingURL=../js/main.js.map
