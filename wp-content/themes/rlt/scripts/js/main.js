define("bulletin.module", ["require", "exports", 'jquery'], function (require, exports, $) {
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
define("classFilter.module", ["require", "exports", 'chosen'], function (require, exports) {
    "use strict";
    var ClassFilter = (function () {
        function ClassFilter() {
            if (!String.prototype.includes) {
                this.polyfillIncludes();
            }
            var ctrl = this;
            var query = ctrl.parseURI();
            ctrl.updateOptions(query);
            $('.filter select').change(function () {
                ctrl.checkConditionals('.filter select[name="age-group"]');
                var selected = ctrl.buildFilterObject();
                ctrl.filterList(selected);
            });
            $('select').chosen({ disable_search_threshold: 10 });
        }
        ClassFilter.prototype.polyfillIncludes = function () {
            String.prototype.includes = function (search, start) {
                'use strict';
                if (typeof start !== 'number') {
                    start = 0;
                }
                if (start + search.length > this.length) {
                    return false;
                }
                else {
                    return this.indexOf(search, start) !== -1;
                }
            };
        };
        ClassFilter.prototype.parseURI = function () {
            var href = window.location.href;
            var props;
            if (href.split('?')[1]) {
                props = href.split('?')[1].split('&');
            }
            var propObject = {};
            if (props) {
                for (var i = 0; i < props.length; i++) {
                    var keyValProp = props[i].split('=');
                    var multiVal = keyValProp[1].split(',');
                    if (multiVal) {
                        propObject[keyValProp[0]] = multiVal;
                    }
                    else {
                        propObject[keyValProp[0]] = keyValProp[1];
                    }
                }
                return propObject;
            }
        };
        ClassFilter.prototype.updateOptions = function (propsObj) {
            $.each(propsObj, function (key, val) {
                $('[name="' + key + '"]').val(val).trigger('chosen:updated');
            });
            this.checkConditionals('.filter select[name="age-group"]');
            this.filterList(this.buildFilterObject());
        };
        ClassFilter.prototype.buildFilterObject = function () {
            var selected = {};
            $('.filter').find('option:selected').each(function () {
                var parent = $(this).closest('select').attr('name');
                if (selected[parent] == undefined) {
                    selected[parent] = [];
                }
                selected[parent].push($(this).val());
            });
            return selected;
        };
        ClassFilter.prototype.filterList = function (selected) {
            $('.class-listing').each(function () {
                var listing = $(this);
                var locations = true;
                var ageGroup = true;
                var types = true;
                var ages = true;
                var typeFlag = false;
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
                        var type = void 0;
                        types = false;
                        for (var i = 0; i < val.length; i++) {
                            if (val[i] != '') {
                                type = checkTypes(listing, val[i]);
                            }
                            else {
                                typeFlag = true;
                            }
                            if (type == true) {
                                typeFlag = true;
                            }
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
                if (typeFlag == true) {
                    types = true;
                }
                if ((ageGroup && locations && ages && types) != true) {
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            });
            $('.no-listing-msg').remove();
            if ($('.class-listing').length == $('.class-listing[style="display: none;"]').length) {
                $('.page-content').append('<h3 class="no-listing-msg color-bloom-red">No courses match your criteria. Please try another combination of filters.</h3>');
            }
            function checkLocation(object, location) {
                if (location == object.attr('data-locations')) {
                    return true;
                }
                return false;
            }
            function checkTypes(object, types) {
                if (object.attr('data-types').includes(types)) {
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
                var dataArray = object.attr('data-ages').split(',');
                console.log(dataArray);
                console.log(ages);
                console.log(dataArray.includes(ages));
                if (ages == 'all') {
                    return true;
                }
                for (var i = 0; i < dataArray.length; i++) {
                    if (dataArray[i] == ages) {
                        return true;
                    }
                }
                return false;
            }
        };
        ClassFilter.prototype.checkConditionals = function (ctrl) {
            var value = $(ctrl).val();
            var that = this;
            $('.conditional').each(function () {
                if ($(this).attr('name') == value) {
                    $(this).addClass('is-visible').next('.chosen-container').css('width', '8em');
                    $(this).prev('label').addClass('is-visible');
                }
                else {
                    $(this).removeClass('is-visible');
                    $(this).prev('label').removeClass('is-visible');
                    $(this).val([]).trigger('chosen:updated');
                }
            });
        };
        return ClassFilter;
    }());
    exports.ClassFilter = ClassFilter;
});
define("header.module", ["require", "exports", 'jquery'], function (require, exports, $) {
    "use strict";
    var Header = (function () {
        function Header() {
            this.toggleClass('.mobile.toggle-nav', '.nav-wrapper', 'do-show');
            this.toggleSearch('.search-link');
        }
        Header.prototype.toggleClass = function (elemClicked, elemToggled, className) {
            $(elemClicked).on('click', function () {
                $(elemToggled).toggleClass(className);
                $(this).toggleClass(className);
            });
        };
        Header.prototype.toggleSearch = function (elemClicked) {
            $(elemClicked).on('click', function (ev) {
                ev.preventDefault();
                $(this).toggleClass('is-hidden');
                $('.search-form').toggleClass('is-visible');
            });
        };
        return Header;
    }());
    exports.Header = Header;
});
define("main", ["require", "exports", 'jquery', "bulletin.module", "classFilter.module", "header.module", 'fotorama'], function (require, exports, $, bulletin_module_1, classFilter_module_1, header_module_1) {
    "use strict";
    $(document).ready(function () {
        if ($('.bulletin').length > 0) {
            //instantiate Bulletin class to handle sizing
            var bulletin = new bulletin_module_1.Bulletin;
        }
        if ($('.filter').length > 0) {
            var filter = new classFilter_module_1.ClassFilter;
        }
        if ($('.site-header').length > 0) {
            var header = new header_module_1.Header;
        }
        $('.photo-gallery').on('click', function (event) {
            event.preventDefault();
            var fotorama = $('.fotorama').addClass('is-visible').fotorama({ allowfullscreen: true }).data('fotorama');
            fotorama.requestFullScreen();
            $('.fotorama').on('fotorama:fullscreenexit', function () {
                $(this).removeClass('is-visible');
            });
        });
    });
});

//# sourceMappingURL=../js/main.js.map
