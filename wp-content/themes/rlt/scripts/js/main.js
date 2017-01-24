define("bulletin.module", ["require", "exports"], function (require, exports) {
    "use strict";
    var Bulletin = (function () {
        function Bulletin() {
            this.feedHeight = this.getHeight($('.bulletin > .feed'));
            this.containerHeight = this.getHeight($('.bulletin'));
            this.setHeight();
            $(window).on('resize', function () {
                console.log('resized');
                this.setHeight();
            });
        }
        // function to get heights of selectors
        Bulletin.prototype.getHeight = function (selector) {
            return selector.outerHeight();
        };
        // function to test + set heights dynamically
        Bulletin.prototype.setHeight = function () {
            if (this.feedHeight > this.containerHeight) {
                // if feedheight is larger than the container, adjust container size to fit
                $('.bulletin').css({
                    'height': this.feedHeight + 64
                });
                $('.bulletin > .primary, .bulletin > .secondary').css('height', '50%');
            }
            else {
                // else if container is larger, expand feed to fit
                $('.bulletin > .feed').css('height', (this.containerHeight - 64));
            }
        };
        return Bulletin;
    }());
    exports.Bulletin = Bulletin;
});
define("main", ["require", "exports", "bulletin.module", 'jquery'], function (require, exports, bulletin_module_1) {
    "use strict";
    $(document).ready(function () {
        if ($('.bulletin')) {
            //instantiate Bulletin class to handle sizing
            var bulletin = new bulletin_module_1.Bulletin;
        }
    });
});

//# sourceMappingURL=../js/main.js.map
