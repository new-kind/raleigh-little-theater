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
            $('.filter select').change(function () {
                var selected = {};
                $('.filter').find('option:selected').each(function () {
                    var parent = $(this).closest('select').attr('name');
                    if (selected[parent] == undefined) {
                        selected[parent] = [];
                    }
                    selected[parent].push($(this).val());
                });
                //console.log( selected );
                ctrl.filterList(selected);
            });
        }
        ClassFilter.prototype.filterList = function (selected) {
            //console.log(key);
            $('.class-listing').each(function () {
                var listing = $(this);
                var locations = true;
                var ageGroup = true;
                var types = true;
                var ages = true;
                console.log(selected);
                $.each(selected, function (key, val) {
                    if (key == 'locations') {
                        if (val != 'all') {
                            locations = checkLocation(listing, val);
                        }
                        else {
                            locations = true;
                        }
                    }
                    if (key == 'age-group') {
                        if (val != 'all') {
                            ageGroup = checkAgeGroup(listing, val);
                        }
                        else {
                            ageGroup = true;
                        }
                    }
                    if (key == 'types') {
                        if (val != 'all') {
                            types = checkTypes(listing, val);
                        }
                        else {
                            types = true;
                        }
                    }
                    if ((key == 'kids') || (key == 'teens')) {
                        if (val != 'all') {
                            ages = checkAges(listing, val);
                        }
                        else {
                            ages = true;
                        }
                    }
                });
                if ((ageGroup && locations && ages && types) != true) {
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            });
            console.log($('.class-listing').length);
            console.log($('.class-listing[style="display: none;"]').length);
            $('.no-listing-msg').remove();
            if ($('.class-listing').length == $('.class-listing[style="display: none;"]').length) {
                $('.page-content').append('<h3 class="no-listing-msg">No courses match your criteria. Please try another combination of filters.</h3>');
            }
            function checkLocation(object, location) {
                if (location == object.attr('data-locations')) {
                    return true;
                }
                return false;
            }
            function checkTypes(object, types) {
                if (types == object.attr('data-types')) {
                    return true;
                }
                return false;
            }
            function checkAgeGroup(object, ageGroup) {
                if (object.attr('data-age-group').includes(ageGroup)) {
                    return true;
                }
                return false;
            }
            function checkAges(object, ages) {
                console.log('checkAges: ' + ages);
                if (object.attr('data-ages').includes(ages)) {
                    return true;
                }
                return false;
            }
        };
        ClassFilter.prototype.checkConditionals = function (ctrl, value) {
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
