define("bulletinSize.module", ["require", "exports"], function (require, exports) {
    "use strict";
    var Bulletin = (function () {
        function Bulletin() {
            this.feedHeight = this.getHeight($('.bulletin .feed'));
            this.primaryHeight = this.getHeight($('.bulletin .primary'));
            this.secondaryHeight = this.getHeight($('.bulletin .secondary'));
        }
        Bulletin.prototype.getHeight = function (selector) {
            return selector.height();
        };
        Bulletin.prototype.setHeight = function () {
            var combinedHeight = this.primaryHeight + this.secondaryHeight;
        };
        return Bulletin;
    }());
    exports.Bulletin = Bulletin;
});
define("main", ["require", "exports", "bulletinSize.module", 'jquery'], function (require, exports, bulletinSize_module_1) {
    "use strict";
    $(document).ready(function () {
        var bulletin = new bulletinSize_module_1.Bulletin;
        console.log('test');
    });
});

//# sourceMappingURL=../js/main.js.map
