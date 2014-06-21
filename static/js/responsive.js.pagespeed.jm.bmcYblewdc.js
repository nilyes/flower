$.fn.toggleClick = function() {
    var functions = arguments;
    return this.click(function() {
        var iteration = $(this).data('iteration') || 0;
        functions[iteration].apply(this, arguments);
        iteration = (iteration + 1) % functions.length;
        $(this).data('iteration', iteration);
    });
};
$.beaconSwipe = function(elementName, direction, srcElement) {
    if (typeof(bN) !== "undefined" && bN !== null) {
        bN.extractIds(srcElement);
        if (elementName === null) elementName = "";
        bN.swipe({
            name: elementName + "-Swipe-" + (direction < 0 ? "back": "forward"),
            detail: {
                message: elementName + "-Swipe-" + (direction < 0 ? "back": "forward"),
                time: new Date()
            },
            bubbles: true,
            cancelable: true,
            srcElement: srcElement
        },
        (direction > 0 ? "back": "forward"), -1);
    }
};
$.beaconClickTrack = function(btn, e) {
    try {
        if (typeof(bN) !== 'undefined') {
            bN.extractIds(btn);
            bN.click(e);
        }
    } catch(e) {}
};
$.fn.iscrollControls = function(iscroller) {
    var scrollDistance = 200;
    var backBtn = this.find("span.subnav-back");
    var fwdBtn = this.find("span.subnav-forward");
    var d = this.data("scrolldist");
    if (d !== null && !isNaN(parseInt(d)) && d > 0) {
        scrollDistance = parseInt(d);
    }
    var disableButton = function($btn) {
        $btn.css("opacity", "0.5");
        $btn.addClass("disabled");
    };
    var enableButton = function($btn) {
        $btn.css("opacity", "1");
        $btn.removeClass("disabled");
    };
    backBtn.click(function(e) {
        if (iscroller !== null && !$(this).hasClass("disabled")) {
            if (iscroller.x < 0) {
                var newx = scrollDistance;
                if ((iscroller.x + scrollDistance) > 0) newx = Math.abs(iscroller.x);
                iscroller.scrollBy(newx, 0, 250, IScroll.utils.ease.quadratic);
                $.beaconClickTrack(this[0], e);
                enableButton(fwdBtn);
                if (iscroller.x >= 0) disableButton(backBtn);
            } else {
                disableButton(backBtn);
                enableButton(fwdBtn);
            }
        }
        return false;
    });
    fwdBtn.click(function(e) {
        if (iscroller !== null && !$(this).hasClass("disabled")) {
            if (iscroller.x > iscroller.maxScrollX) {
                iscroller.scrollBy( - scrollDistance, 0, 250, IScroll.utils.ease.quadratic);
                $.beaconClickTrack(this[0], e);
                enableButton(backBtn);
                if (iscroller.x <= iscroller.maxScrollX) disableButton(fwdBtn);
            } else {
                disableButton(fwdBtn);
                enableButton(backBtn);
            }
        }
        return false;
    });
    if (iscroller.x === 0) disableButton(backBtn);
    return this;
}; (function($, sr) {
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
            args = arguments;
            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeout = null;
            }
            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }
            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize'); (function($) {
    function QuickNav() {
        var self = this;
        self.addIcons = function() {
            var icons = $(".quicknav").find("b");
            icons.eq(1).hide();
            icons.eq(2).hide();
            $('#aol-header-search').addClass('mobile-search-hidden').hide();
            if ($(".quicknav").length) {
                $(".quicknav").css("visibility", "visible");
            }
        };
        self.removeIcons = function() {
            var icons = $(".quicknav").find("b");
            icons.eq(1).show();
            icons.eq(2).show();
            $('#aol-header-search').removeClass('mobile-search-hidden').show();
        };
        self.snap = function(snapPoint) {
            switch (snapPoint) {
            case 320:
            case 480:
                self.addIcons();
                $("#aol-header-search-results").hide();
                break;
            default:
                self.removeIcons();
            }
        };
        self.init = function() {
            $('.mobile-search').on('click',
            function() {
                $('#aol-header-search').slideToggle('fast', 'swing');
                $('#aol-header-search #aol-header-query').focus();
                $(this).toggleClass('active');
            });
            $("body").on("hmpg.snap",
            function(event) {
                self.snap(event.snapPoint);
            });
        };
    }
    function MobileMenu() {
        var self = this;
        this.mobileMarkupId = "#mobileMenuListHolder";
        this.bound = false;
        this.$mobileMarkup = null;
        this.mobileAppsList = "#mobileAppsList";
        this.$mobileAppsList = null;
        this.wWidth = '270px';
        this.visible = false;
        self.show = function() {
            self.visible = true;
            $('#pgbg').animate({
                'right': self.wWidth
            },
            600);
            $(".mobile-ad").animate({
                'right': self.wWidth
            },
            600);
            $('#mobile-menu').animate({
                zoom: 1
            },
            600,
            function() {
                $(this).css("z-index", "30");
            });
            $(this).addClass('active');
        };
        self.hide = function() {
            self.visible = false;
            $('#pgbg').animate({
                'right': '0'
            },
            600);
            $(".mobile-ad").animate({
                'right': '0'
            },
            600);
            $('#mobile-menu').css("z-index", "20");
            $('.mobile-menu').removeClass('active');
            if (AOL.pageType.length > 0) {
                $("#ghnav-wrapper span.hnavTrendingNow").hide();
            }
        };
        self.add = function() {
            if ($('#mobile-menu').length === 0) {
                $('#pgbg').before('<div id="mobile-menu"></div>');
                if (self.$mobileMarkup.length) {
                    menuCategoryTitle = self.$mobileMarkup.data("mobilemenusubtitle");
                    self.$mobileMarkup.find("div.mobilemenulistitem").each(function() {
                        $('#mobile-menu').append('<div class="topTitle">' + $(this).html() + '</div>');
                    });
                    $('#mobile-menu').append('<div class="mobileTitle">' + menuCategoryTitle + '</div>');
                }
                var $newUsrMnu = $('#usrMnu').clone(true);
                $newUsrMnu.prependTo('#mobile-menu');
                $newUsrMnu.attr("id", "usrMnuMob");
                $('#usrMnu').hide();
                if (!self.bound) {
                    self.bound = true;
                    $('.mobile-menu').toggleClick(function() {
                        self.show();
                    },
                    function() {
                        self.hide();
                    });
                }
                var itemNumber = 0;
                $('#ghnav1 li.topLevel').each(function() {
                    itemNumber++;
                    if ($(this).hasClass('topNavSelected')) {
                        $(this).find('.topTitle').addClass('active');
                    }
                    $(this).find('.topTitle').clone().appendTo('#mobile-menu').addClass('link' + itemNumber);
                });
                if (self.$mobileAppsList.length) {
                    $('#mobile-menu').append(this.$mobileAppsList.html());
                }
            }
            if (AOL.pageType.length > 0) {
                $("#ghnav-wrapper span.hnavTrendingNow").show();
                hmpg.unfoldingNow.init();
            }
        };
        self.remove = function() {
            if ($('#mobile-menu').length) {
                $('#mobile-menu').remove();
                $('#usrMnu').show();
                $('#pgbg').animate({
                    'right': '0'
                },
                600);
            }
        };
        self.resize = function() {
            if (self.visible) {
                self.show();
            }
        };
        self.snap = function(snapPoint, isResize) {
            switch (snapPoint) {
            case 320:
            case 480:
                self.add();
                $('#usrMnu').hide();
                if (isResize) {
                    self.resize();
                }
                break;
            default:
                self.remove();
                $('#usrMnu').show();
            }
        };
        self.init = function() {
            self.$mobileMarkup = $(self.mobileMarkupId);
            self.$mobileAppsList = $(self.mobileAppsList);
            $("body").on("hmpg.snap",
            function(event) {
                self.snap(event.snapPoint, event.isResize);
            });
        };
    }
    function NewsletterOverlay() {
        var self = this;
        self.snap = function(snapPoint) {
            switch (snapPoint) {
            case 320:
                break;
            default:
                break;
            }
        };
        self.init = function() {
            var colorbox = $("#colorbox.msgoverlayWr");
            if (colorbox.length > 0 && colorbox.is(":visible")) {
                $("body").on("hmpg.snap",
                function(event) {
                    self.snap(event.snapPoint);
                });
            }
        };
    }
    function BreakingNews() {
        var self = this;
        this.wrapperClass = ".announcement-news-bar";
        this.$div = null;
        this.iscroller = null;
        this.closeBtn = null;
        this.snapped = false;
        self.snap = function(snapPoint) {
            if (self.$div.length && self.$div.is(":visible")) {
                self.snapped = true;
                switch (snapPoint) {
                case 320:
                case 480:
                    $("#ghnav-wrapper").hide();
                    self.addScroll();
                    break;
                default:
                    $("#ghnav-wrapper").show();
                    self.removeScroll();
                }
            }
        };
        self.close = function() {
            self.removeScroll();
            self.$div.remove();
            $("#ghnav-wrapper").show();
            if ($(".hnavTrendingNow").length) {
                $(".hnavTrendingNow").show();
                hmpg.unfoldingNow.snap(hmpg.responsivePage.getSnapPoint());
            }
        };
        self.addScroll = function() {
            self.iscroller = new IScroll(self.wrapperClass, {
                scrollX: true,
                scrollY: false
            });
            self.iscroller.on("scrollEnd",
            function() {
                $.beaconSwipe("BreakingNews", this.directionX, self.$div.find("a")[0]);
            });
            $(".announcement-news-bar .closeButton").on("click touchstart",
            function(e) {
                self.close();
                $.beaconClickTrack(this[0], e);
                return false;
            });
        };
        self.removeScroll = function() {
            if (self.iscroller !== null) self.iscroller.destroy();
            self.iscroller = null;
        };
        self.reposition = function() {
            $("#ghnav-wrapper").hide();
        };
        self.init = function() {
            self.$div = $(self.wrapperClass);
            self.closeBtn = self.$div.find(".closeButton");
            $("body").on("hmpg.snap",
            function(event) {
                self.snap(event.snapPoint);
            });
        };
        self.cod = function() {
            self.$div = $(self.wrapperClass);
            self.closeBtn = self.$div.find(".closeButton");
            if (!self.snapped) self.snap(hmpg.getSnapPoint());
        };
        cod.register(self.cod);
    }
    function Logo() {
        var self = this;
        self.pgbg = null;
        self.bg = null;
        self.dimsBaseUri = null;
        self.logo = null;
        self.snap = function(snapPoint) {
            self.pgbg.removeAttr("style");
            var bg = self.pgbg.css("background-image");
            self.bg = bg.replace('url(', '').replace(')', '').replace(/"/g, '');
            var url = "";
            switch (snapPoint) {
            case 320:
            case 480:
                url = self.logo.data("mobile-canvas");
                self.pgbg.css("background", "none");
                self.logo.css("background", "transparent url(" + url + ") no-repeat scroll 0 0");
                break;
            case 768:
                url = self.dimsBaseUri + "/format/jpg/crop/1282/" + self.bg;
                self.logo.css("background", "none");
                self.pgbg.css("background", "transparent url(" + url + ") no-repeat scroll center 0");
                break;
            default:
                url = self.bg;
                self.logo.css("background", "none");
                self.pgbg.css("background", "transparent url(" + url + ") no-repeat scroll center 0");
                break;
            }
        };
        self.init = function() {
            self.pgbg = $("#pgbg");
            self.logo = $("a.aol-logo");
        };
    }
    function ChangeCanvas() {
        var self = this;
        self.snap = function(snapPoint) {
            switch (snapPoint) {
            case 768:
                $('#themew').addClass('narrow');
                break;
            default:
                $('#themew').removeClass('narrow');
                break;
            }
        };
        self.init = function() {
            $("body").on("hmpg.snap",
            function(event) {
                self.snap(event.snapPoint);
            });
        };
    }
    function Ads() {
        var self = this;
        self.scrollTop = null;
        self.mobileAd = null;
        self.destroyAll = function() {
            $.each(self.adDivs,
            function(index, value) {
                if (typeof(adsClrAd) !== "undefined") {
                    adsClrAd(value);
                }
            });
            $("#adfeedback").hide();
        };
        self.destroyAd = function(ad) {
            if (typeof(adsClrAd) !== "undefined") {
                try {
                    adsClrAd(ad.div);
                    $("#" + ad.div).remove();
                    if (ad.w === "RR" && ad.h === "RR") {
                        $(".feedback").hide();
                    }
                } catch(e) {}
            }
        };
        self.snap = function(snapPoint) {
            $.each(hmpg_ads,
            function() {
                var ad = this;
                var mn = ad.mns[snapPoint];
                var destroy = ad.des;
                if (ad.sps.indexOf(snapPoint) === -1 && destroy !== false) {
                    self.destroyAd(ad);
                }
                if (ad.cur !== mn && destroy !== false) {
                    ad.cur = mn;
                    self.destroyAd(ad);
                    if (mn !== "") {}
                }
            });
        };
        self.scroll = function() {
            var curScrollTop = $(window).scrollTop();
            if (curScrollTop > self.scrollTop) {
                self.mobileAd.slideUp();
            } else if (curScrollTop < self.scrollTop) {
                self.mobileAd.slideDown();
            }
            self.scrollTop = curScrollTop;
        };
        self.init = function() {
            self.scrollTop = $(window).scrollTop();
            self.mobileAd = $(".mobile-ad");
            if (self.mobileAd.length > 0 && respCollAds !== "false") {
                $(window).scroll(function() {
                    self.scroll();
                });
            }
            $("body").on("focus", "input:text",
            function() {
                self.mobileAd.hide();
            }).on("blur", "input:text",
            function() {
                self.mobileAd.show();
            });
            $("body").on("hmpg.snap",
            function(event) {
                if (event.isResize) {
                    self.snap(event.snapPoint);
                }
            });
        };
    }
    function CanvasChooser() {
        if (getDeviceState() < 769) {
            $.getJSON("ajax.jsp?m=skinscarousel&p=random",
            function(d) {
                setTheme("random", d.name, d.title, d.href, d.url, d.icid);
            });
        }
    }
    function HoroscopesFeedModule(parentDiv) {
        var self = this;
        this.parentDiv = parentDiv;
        this.select = null;
        this.constructor = function() {
            self.bind();
        }
        this.track = function(el) {
            try {
                if (typeof(bN) != 'undefined') {
                    bN.extractIds(el);
                    bN.ping(self.slot);
                }
            } catch(e) {}
        }

        this.bind = function() {
            self.horoDiv = self.parentDiv.find("#horoscope");
            self.select = self.parentDiv.find("select[id='zodiacSelectList']");
            $("#horoscope #zodiacSelectList").appendTo("#horoscope h2");
            self.select.bind("change",
            function(e) {
                self.fetchHoroscope();
            });
        }
        self.constructor();
    }
    function DailyBuzz() {
        var self = this;
        self.snap = function(snapPoint) {
            $(".dailyBuzz").each(function() {
                self.showBuzz(this, snapPoint);
            });
        };
        self.showBuzz = function(mod, grid) {
            this.buzz = $(mod).find("div.buzzConf");
            this.more = $(mod).find("a.morebuzz");
            var showItem = this.buzz.attr("data-" + grid);
            var minItem = parseInt(this.buzz.attr("data-min"));
            if (showItem != "undefined" && showItem > 0) {
                if (self.buzz.find(".gmod:hidden").size() > 0) {
                    self.more.show();
                }
                var mplids = [];
                if (showItem > minItem) {
                    for (var m = minItem; m < showItem; m++) {
                        var bCnBuzz = this.buzz.find("div.gmod")[m];
                        $(bCnBuzz).addClass("bCn");
                        mplids.push(utils.findClass(bCnBuzz, /plid-.*/).replace("plid-", "") + "|" + utils.findClass(bCnBuzz, /mnid-.*/).replace("mnid-", ""));
                    }
                }
                var showMore = this.more.attr("data-" + grid);
                self.more.click(function(e) {
                    e.preventDefault();
                    var plids = [];
                    self.buzz.find(".gmod:hidden:lt(" + showMore + ")").each(function() {
                        $(this).slideDown(function() {
                            $(this).addClass("bCn");
                            if (self.buzz.find(".gmod:hidden").length < 1) {
                                self.more.hide();
                            }
                        });
                        if (!$(this).hasClass("bCn")) {
                            plids.push(utils.findClass(this, /plid-.*/).replace("plid-", "") + "|" + utils.findClass(this, /mnid-.*/).replace("mnid-", ""));
                        }
                    });
                    if (plids.length > 0 && typeof(bN) != 'undefined') {
                        bN.set("plids", plids, 1);
                        bN.ping("dailyBuzz");
                    }
                });
            } else {
                if (minItem != "undefined" && minItem > 0) {
                    var rPlids = [];
                    var items = self.buzz.find(".gmod").not(".bCn").length;
                    if (self.more.is(":visible")) {
                        self.more.hide();
                    }
                    for (var i = minItem + 1; i <= items + minItem; i++) {
                        rPlids.push(utils.findClass(self.buzz.find(".gmod:nth-child(" + i + ")")[0], /plid-.*/).replace("plid-", "") + "|" + utils.findClass(self.buzz.find(".gmod:nth-child(" + i + ")")[0], /mnid-.*/).replace("mnid-", ""));
                    }
                    if (rPlids.length > 0 && typeof(bN) != 'undefined') {
                        bN.set("plids", rPlids, 1);
                        bN.ping("dailyBuzz");
                    }
                    $(".dailyBuzz .gmod:visible").addClass("bCn");
                }
            }
        };
        self.init = function() {
            $(window).on("load",
            function(event) {
                self.snap(getDeviceState());
                $("body").on("hmpg.snap",
                function(event) {
                    self.snap(event.snapPoint);
                });
            });
        };
    }
    function UnfoldingNow() {
        var self = this;
        this.iscroller = null;
        this.wrapperClass = ".hnavTrendingNow";
        this.innerClass = ".trending-now";
        this.scrollDistance = 150;
        this.controls = null;
        this.backBtn = null;
        this.fwdBtn = null;
        this.scrollControls = null;
        this.currentSnapPoint = 0;
        self.snap = function(snapPoint) {
            self.currentSnapPoint = snapPoint;
            switch (snapPoint) {
            case 320:
            case 480:
            case 768:
                self.setupListWidths();
                self.addSwipe();
                self.addButtonControls();
                break;
            default:
                self.removeSwipe();
                self.scrollControls = null;
                break;
            }
            if (snapPoint === 768) {
                $(".hnavTrendingNow div.subnavControls").show();
            } else {
                $(".hnavTrendingNow div.subnavControls").hide();
            }
        };
        self.addSwipe = function() {
            $(self.innerClass).addClass("iscroller bN");
            self.iscroller = new IScroll(self.wrapperClass, {
                scrollX: true,
                scrollY: false
            });
            self.iscroller.on("scrollStart",
            function() {
                $(".hnavTrendingNow").data("scrolling", true);
            });
            self.iscroller.on("scrollEnd",
            function() {
                $(".hnavTrendingNow").data("scrolling", false);
                $.beaconSwipe("UnfoldingNow", this.directionX, $(self.innerClass)[0]);
            });
            $(".hnavTrendingNow li a").bind("touchend",
            function() {
                if (!$(".hnavTrendingNow").data("scrolling")) {
                    if (window.bN && window.bN.click) {
                        bN.extractIds(this);
                        bN.click();
                    }
                    var href = $(this).attr('href');
                    window.location = href;
                }
            });
        };
        self.addButtonControls = function() {
            if ($("#ghnav-wrapper div.subnavControls").length) {
                if (!$(".hnavTrendingNow div.subnavControls").length) {
                    $("#ghnav-wrapper div.subnavControls").clone(false).appendTo(".hnavTrendingNow").attr("id", "unfoldingnow-controls");
                }
                self.scrollControls = $(".hnavTrendingNow div.subnavControls").iscrollControls(self.iscroller);
            }
        };
        self.track = function(btn, e) {
            try {
                if (typeof(bN) !== 'undefined') {
                    bN.extractIds(btn);
                    bN.click(e);
                }
            } catch(e) {}
        };
        self.disableButton = function($btn) {
            $btn.css("opacity", "0.5");
            $btn.addClass("disabled");
        };
        self.enableButton = function($btn) {
            $btn.css("opacity", "1");
            $btn.removeClass("disabled");
        };
        self.removeSwipe = function() {
            if (self.iscroller !== null) self.iscroller.destroy();
            self.iscroller = null;
            $(self.innerClass).removeClass("iscroller");
            $(self.innerClass).css("width", "2000px");
            $(self.innerClass).css("transition", "none");
            $(self.innerClass).css("transform", "none");
        };
        self.setupListWidths = function() {
            var olw = 0;
            $(".trending-now ol li").each(function() {
                olw += $(this).outerWidth() + 20;
            });
            $(".trending-now ol").css("width", olw + "px");
            var w = $(".trending-now h2").outerWidth(true) + olw;
            $(self.innerClass).css("width", olw + "px");
        };
        self.showOnVerticalsSingleColumn = function() {
            if (AOL.pageType.length > 0 && hmpg.getSnapPoint() <= 480) {
                $(self.wrapperClass).show();
            }
        };
        self.init = function() {
            if ($(self.wrapperClass).length && $(self.wrapperClass).is(':visible')) {
                $("body").on("hmpg.snap",
                function(event) {
                    self.snap(event.snapPoint);
                });
            }
            $('#ghnav1').on("hnavSubMenuShown",
            function(e) {
                if ($(self.wrapperClass).length && $(self.wrapperClass).is(':visible')) {
                    self.snap(self.currentSnapPoint);
                }
                self.showOnVerticalsSingleColumn();
            });
            $('#ghnav1').on("hnavSubMenuHidden",
            function(e) {
                self.showOnVerticalsSingleColumn();
            });
        };
    }
    function HorizontalNav() {
        var self = this;
        self.iscroller = null;
        self.wrapperClass = "subnavscrollwrapper";
        self.defaultClass = ".topNavSelected .subnavscrollwrapper";
        self.innerClass = "";
        self.scrollDistance = 150;
        self.controls = null;
        self.scrollControls = null;
        self.currentSnapPoint = 0;
        self.snap = function(snapPoint) {
            self.currentSnapPoint = snapPoint;
            self.configureSubNav();
        };
        self.addSwipe = function() {
            self.iscroller = new IScroll("#ghnav1 .topNavSelected div.subnavscrollwrapper", {
                scrollX: true
            });
            self.iscroller.on("scrollStart",
            function() {
                $("#ghnav1 .topNavSelected ul.subNav").data("scrolling", true);
            });
            self.iscroller.on("scrollEnd",
            function() {
                $("#ghnav1 .topNavSelected ul.subNav").data("scrolling", false);
                $.beaconSwipe("SubnavDefault", this.directionX, $(self.defaultClass + " ul.subNav")[0]);
            });
            $("#ghnav1 .topNavSelected ul.subNav li a").bind("touchend",
            function() {
                if (!$("#ghnav1 .topNavSelected ul.subNav").data("scrolling")) {
                    if (window.bN && window.bN.click) {
                        bN.extractIds(this);
                        bN.click();
                    }
                    var href = $(this).attr('href');
                    window.location = href;
                }
            });
        };
        self.removeSwipe = function() {
            if (self.iscroller !== null) self.iscroller.destroy();
            self.iscroller = null;
        };
        self.configureSubNav = function() {
            $("#ghnav1 div.subnavControls").hide();
            self.removeSwipe();
            if (self.currentSnapPoint === 768) {
                var totalw = 0;
                $("#ghnav1 .topNavSelected ul.subNav li").each(function() {
                    totalw += $(this).outerWidth();
                });
                if (totalw >= 768) {
                    $("#ghnav1 .topNavSelected ul.subNav").css("width", (totalw + 100) + "px");
                    $("#ghnav1 div.subnavControls").show();
                    self.addSwipe();
                    if (!self.scrollControls) self.scrollControls = $("#ghnav1 div.subnavControls").iscrollControls(self.iscroller);
                    self.scrollControls.show();
                }
            }
        };
        self.updateMenuForScroll = function(active) {
            self.configureSubNav();
        };
        self.init = function() {
            $('#ghnav1 ul.subNav').wrap("<div class='" + self.wrapperClass + "'></div>");
            if ($("#ghnav-wrapper div.subnavControls").length && !$('#ghnav1 .defaultSelected .subnavscrollwrapper div.subnavControls').length) {
                $("#ghnav-wrapper div.subnavControls").clone(false).appendTo("#ghnav1 .defaultSelected .subnavscrollwrapper").attr("id", "subnav-controls");
            }
            $('#ghnav1').on("hnavSubMenuShown",
            function(e) {
                self.updateMenuForScroll(true);
            });
            $('#ghnav1').on("hnavSubMenuHidden",
            function(e) {
                self.updateMenuForScroll(false);
            });
            $("body").on("hmpg.snap",
            function(event) {
                self.snap(event.snapPoint);
            });
        };
    }
    function ResponsivePage() {
        var self = this;
        self.lastState = null;
        self.smartResize = function() {
            $(window).smartresize(function() {
                self.mediaQuery(true);
            });
            self.mediaQuery(false);
        };
        self.getDeviceState = function() {
            return getDeviceState();
        };
        self.mediaQuery = function(isResize) {
            var state = self.getDeviceState();
            if (state !== self.lastState) {
                self.lastState = state;
                $("body").trigger({
                    type: "hmpg.snap",
                    snapPoint: state,
                    isResize: isResize
                });
            }
        };
        self.getSnapPoint = function() {
            return self.getDeviceState();
        };
        self.init = function() {
            self.smartResize();
        };
    }
    var ResponsiveGrid = {
        tabletGrid: function() {
            $("#col2").insertBefore("#col3");
            $("#col1, #col4").wrapAll("<div class='wrapcol'></div>");
        },
        removeTabetGrid: function() {
            if ($(".wrapcol").length) {
                $("#col1, #col4").unwrap();
                $("#col2").insertAfter("#col1");
            }
        },
        onSnapListener: function(snapPoint) {
            switch (snapPoint) {
            case 768:
                this.tabletGrid();
                break;
            default:
                this.removeTabetGrid();
                break;
            }
        },
        onSnapListenerForLocalPage: function(snapPoint) {
            switch (snapPoint) {
            default:
                if ($("#col12_2 #col3").length) {
                    $("#col3").insertAfter("#col12_2");
                }
                break;
            }
        },
        onSnapListenerForArticlePage: function(snapPoint) {
            switch (snapPoint) {
            case 986:
                if ($("#col12_2 #col3").length) {
                    $("#col3").insertAfter("#col12_2");
                }
                break;
            default:
                if ($("#aol-content > #col3").length) {
                    $("#col3").insertAfter("#col12_2 .mpid-1");
                }
                break;
            }
        },
        init: function() {
            if (AOL.pageType === "article") {
                this.onSnapListener = this.onSnapListenerForArticlePage;
            }
            if (AOL.pageType === "local") {
                this.onSnapListener = this.onSnapListenerForLocalPage;
            }
            var self = this;
            $("body").on("hmpg.snap",
            function(event) {
                self.onSnapListener(event.snapPoint);
            });
        }
    };
    function PopularVidoesMore() {
        var self = this;
        this.moreClickHandler = function(eventName, moreObj) {
            switch (eventName) {
            case "clickMaxSurpassed":
                var url = document.location.href = $(moreObj.moreLinkEl).attr('href');
                if (url.length == 0) {
                    $(moreObj.getMorelinkEl()).hide();
                    return false;
                } else {
                    document.location.href = url;
                    return true;
                }
                break;
            case "callBefore":
                $(moreObj.listContEl).find("img.vidThumb").each(function() {
                    var s = $(this).attr("src");
                    if (s.length < 2) {
                        var _s = $(this).attr("__src");
                        if (typeof(_s) != "undefined" && _s.length > 3) {
                            $(this).attr("src", _s);
                            $(this).attr("__src", "");
                        }
                    }
                    if (moreObj.getCountOfHidden() == 0) {
                        var url = document.location.href = $(moreObj.moreLinkEl).attr('href');
                        if (url.length == 0) {
                            $(moreObj.getMorelinkEl()).hide();
                        } else {
                            document.location.href = url;
                        }
                    }
                });
                break;
            case "callAfter":
                break;
            }
        };
    }
    function PopularStoriesMore() {
        var self = this;
        this.moreClickHandler = function(eventName, moreObj) {
            switch (eventName) {
            case "clickMaxSurpassed":
                $(moreObj.getMorelinkEl()).hide();
                return false;
                break;
            case "callBefore":
                break;
            case "callAfter":
                if (moreObj.getCountOfHidden() == 0) {
                    $(moreObj.getMorelinkEl()).hide();
                }
                break;
            }
        };
    }
    function LocalStoriesMore() {
        var self = this;
        this.viewMoreData = $("#local_viewmoreform");
        this.getMorelinkHref = function() {
            return $("#local_viewmoreform").find("input#moreLink").val();
        };
        this.getMoreLinkTarget = function() {
            return $("#local_viewmoreform").find("input#moreLinkTarget").val();
        };
        this.moreClickHandler = function(eventName, moreObj) {
            switch (eventName) {
            case "clickMaxSurpassed":
                var url = self.getMorelinkHref();
                if (url.length == 0) {
                    $(moreObj.getMorelinkEl()).hide();
                    return false;
                } else {
                    document.location.href = url;
                    return true;
                }
                break;
            case "callBefore":
                break;
            case "callAfter":
                break;
            }
        };
        this.bindToolTips = function() {
            if (utils.isiPad()) return;
            $(".localtooltipsli").each(function() {
                $(this).hover(function() {
                    $(this).contents("span.localtooltips").css({
                        display: "block"
                    });
                },
                function() {
                    $(this).contents("span.localtooltips").css({
                        display: "none"
                    });
                });
            });
        };
    }
    function ChooseNewsMore() {
        var self = this;
        this.idxOfElemntToFocusOn = 0;
        this.linkOff = function(target, href) {
            if (target == "_blank") {
                window.open(href);
            } else {
                document.location = href;
            }
        };
        this.moreClickHandler = function(eventName, moreObj) {
            var moreLinkEl = $(moreObj.moreLinkEl);
            var url = moreLinkEl.attr("href");
            var target = moreLinkEl.attr("target");
            var listContEl = $(moreObj.listContEl);
            switch (eventName) {
            case "clickMaxSurpassed":
                if (url.length == 0) {
                    moreLinkEl.hide();
                    return false;
                } else {
                    self.linkOff(target, url);
                    return true;
                }
                break;
            case "noDataReturned":
                self.linkOff(target, url);
                break;
            case "callBefore":
                self.idxOfElemntToFocusOn = moreObj.currentListCnt - moreObj.currentHiddenCnt;
                break;
            case "callAfter":
                var newStory = $(listContEl.children().get(self.idxOfElemntToFocusOn).children[0]);
                newStory.focus();
                break;
            }
        };
        this.getMoreData = function(moreObj, startIdx, endIdx) {
            var currClickCnt = moreObj.currMoreClickCnt;
            var modDivEl = $(moreObj.modEl);
            var slot = modDivEl.attr("id");
            var feed = modDivEl.find("select").val();
            var ajaxUrl = "ajax.jsp?m=news&p=choosenews&rndr=mor&slot=" + slot + "&mn=" + currClickCnt.toString() + "&_frcToFd=" + (feed);
            ajaxUrl = ajaxUrl + "&listBeginIdx=" + startIdx.toString() + "&listEndIdx=" + endIdx.toString();
            $.get(ajaxUrl,
            function(data) {
                if (data != "") {
                    var fold;
                    var morenews_position;
                    var div = $(data);
                    var clss = div.attr("class");
                    var li;
                    div.find("div").each(function() {
                        story = $(this);
                        listContEl.before(story);
                    });
                    div.find("li").each(function() {
                        li = $(this);
                        listContEl.append(li);
                    });
                    fold = $(window).height() + $(window).scrollTop();
                    morenews_position = listContEl.offset().top + listContEl.height();
                    if (fold < morenews_position) {
                        modDivEl.children().get( - 1).scrollIntoView(false);
                    }
                } else {
                    self.moreClickHandler("noDataReturned", moreObj);
                }
            },
            "html");
        };
    }
    function globalMore(modDivClass, listContClass, listClass, moreLinkClass, handlerObject, disableFetch, isCod, registerForBind) {
        var self = this;
        this.modParentEl = null;
        this.modDivCls = modDivClass;
        this.listElmCls = listContClass;
        this.listCls = listClass;
        this.moreLinkCls = moreLinkClass;
        this.modEl = null;
        this.listContEl = null;
        this.listEls = null;
        this.moreLinkEl = null;
        this.moreClickCntBySnapJson = null;
        this.moreCntBySnapJson = null;
        this.showCntBySnapJson = null;
        this.currentListCnt = 0;
        this.currentHiddenCnt = 0;
        this.currMoreClickCnt = 1;
        this.disableFetch = false;
        this.getMorelinkEl = function() {
            return self.moreLinkEl;
        };
        this.getMorelinkHref = function() {
            var returnVal = "";
            if (self.moreLinkEl != null) {
                var tmpHref = $(self.moreLinkEl).attr('href');
                if (tmpHref.length > 0) {
                    returnVal = tmpHref;
                }
            }
            return returnVal;
        };
        this.getCountOfHidden = function() {
            return self.currentHiddenCnt;
        };
        this.updateDisplayedCnts = function() {
            var theChildren = $(self.listContEl).find(self.listCls);
            var hiddenCnt = 0;
            self.currentListCnt = theChildren.length;
            for (i = 0; i < self.currentListCnt; i++) {
                var currNode = theChildren.get(i);
                if (!$(currNode).is(":visible")) {
                    hiddenCnt++;
                }
            }
            self.currentHiddenCnt = hiddenCnt;
        };
        this.removeShowClasses = function() {
            var arrayOfClasses = $(self.modEl).attr("class").split(" ");
            for (i = 0; i < arrayOfClasses.length; i++) {
                var currClass = $.trim(arrayOfClasses[i]);
                if (currClass.match(/show-[0-9]*_(320|480|768|986|1024|1920)/g) != null) {
                    $(self.modEl).removeClass(currClass);
                }
            }
        };
        this.synchListOfDisplayed = function(displayCnt) {
            $.each($(self.listContEl).find(listClass),
            function(idx) {
                var currNode = $(this);
                var currentlyDisplayed = parseInt(self.currentListCnt) - parseInt(self.currentHiddenCnt);
                if (idx <= (currentlyDisplayed + parseInt(self.getMoreCntAtSnapPoint()) - 1)) {
                    currNode.removeClass("dn");
                } else {
                    currNode.addClass("dn");
                }
            });
        };
        this.getMoreClickCntAtSnapPoint = function() {
            return parseInt(self.moreClickCntBySnapJson[getDeviceState()]);
        };
        this.getMoreCntAtSnapPoint = function() {
            return parseInt(self.moreCntBySnapJson[getDeviceState()]);
        };
        this.getShowCntAtSnapPoint = function() {
            return parseInt(self.showCntBySnapJson[getDeviceState()]);
        };
        this.controlListDisplay = function() {
            var startHideIdx = parseInt(self.getMoreCntAtSnapPoint());
            self.synchListOfDisplayed(startHideIdx);
            self.removeShowClasses();
        };
        this.showMore = function() {
            var stopProcessing = false;
            self.currMoreClickCnt++;
            stopProcessing = handlerObject.moreClickHandler("callBefore", self);
            if (stopProcessing === true) {
                return true;
            }
            if (self.currMoreClickCnt > self.getMoreClickCntAtSnapPoint()) {
                stopProcessing = handlerObject.moreClickHandler("clickMaxSurpassed", self);
                if (stopProcessing === true) {
                    return true;
                }
            }
            self.updateDisplayedCnts();
            self.controlListDisplay();
            var moreFetchCnt = self.getMoreCntAtSnapPoint();
            var listBeginIdx = 0;
            var listEndIdx = 0;
            if (self.disableFetch == false && (moreFetchCnt > self.currentHiddenCnt)) {
                listBeginIdx = self.currentListCnt + 1;
                listEndIdx = ((listBeginIdx + moreFetchCnt) - self.currentHiddenCnt) - 1;
                handlerObject.getMoreData(self, listBeginIdx, listEndIdx);
            } else {
                self.synchListOfDisplayed((self.currentListCnt - self.currentHiddenCnt));
            }
            self.updateDisplayedCnts();
            handlerObject.moreClickHandler("callAfter", self);
        };
        this.bind = function() {
            self.modParentEl = $($(modDivClass).parent());
            self.modEl = self.modParentEl.find(self.modDivCls)[0];
            self.listContEl = $(self.modEl).find(self.listElmCls)[0];
            self.moreLinkEl = $(self.modEl).find(self.moreLinkCls)[0];
            var tmpDefaultShowCnt = $(self.modEl).find(".defaultCount")[0];
            if (typeof(tmpDefaultShowCnt) != 'undefined' && tmpDefaultShowCnt != null) {
                self.showCntBySnapJson = $.parseJSON($(tmpDefaultShowCnt).html());
            }
            var tmpMoreCnt = $(self.modEl).find(".morenumPerSnap")[0];
            if (typeof(tmpMoreCnt) != 'undefined' && tmpMoreCnt != null) {
                self.moreCntBySnapJson = $.parseJSON($(tmpMoreCnt).html());
            }
            var tmpMoreClickCnt = $(self.modEl).find(".moreClicksPerSnap")[0];
            if (typeof(tmpMoreClickCnt) != 'undefined' && tmpMoreClickCnt != null) {
                self.moreClickCntBySnapJson = $.parseJSON($(tmpMoreClickCnt).html());
            }
            self.updateDisplayedCnts();
            $(self.moreLinkEl).unbind("click.globalMoreClick").bind("click.globalMoreClick",
            function(e) {
                self.showMore();
                e.preventDefault();
            });
        };
        this.init = function() {
            if (typeof(disableFetch) != "undefined" && disableFetch === true) {
                self.disableFetch = true;
            }
            if (isCod) {
                if ($(modDivClass).length <= 0) {
                    cod.register(self.bind);
                } else {
                    this.bind();
                }
            } else {
                this.bind();
            }
            if (registerForBind === true) {
                self.modParentEl.bind("forceRebind", self.bind);
            }
        };
    }
    function ResponsiveDL() {
        var self = this;
        self.setSwipeWrapper = function(w, h) {
            var $wrap = $("#dl_v2 .swipe-wrapper");
            var $div = $("#dl_v2 .swipe-wrapper>div>div>div>div");
            $wrap.css("width", w + "px");
            $wrap.css("height", h + "px");
            $div.css("width", w + "px");
        };
        self.snap = function(snapPoint) {
            if (AOL.dlswiper) {
                switch (snapPoint) {
                case 320:
                    self.setSwipeWrapper(320, 210);
                    break;
                case 480:
                    self.setSwipeWrapper(480, 315);
                    break;
                case 768:
                    self.setSwipeWrapper(768, 504);
                    break;
                default:
                    self.setSwipeWrapper(640, 420);
                }
                AOL.dlswiper.__resize();
            }
        };
        self.init = function() {
            if (AOL.dlswiper) {
                window.removeEventListener('orientationchange', AOL.dlswiper, false);
                $("body").on("hmpg.snap",
                function(event) {
                    self.snap(event.snapPoint);
                });
            }
        };
    }
    function Comments() {
        var self = this;
        self.snap = function(snapPoint) {
            switch (snapPoint) {
            case 320:
            case 480:
                self.removeDrawer();
                break;
            default:
                self.resetDrawer();
                break;
            }
        };
        self.resetDrawer = function() {
            if ($(".drawerEnable").length) {
                $(".inner").addClass("commentsDrawer");
                if ($(".commentsDrawer").hasClass("db")) {
                    $(".commentsDrawer").removeClass("db");
                }
                if ($(".toggle-link").hasClass("expanded")) {
                    $(".toggle-link").removeClass("expanded");
                }
            }
        };
        self.removeDrawer = function() {
            if ($(".commentsDrawer").length) {
                $(".inner").removeClass("commentsDrawer db");
                $(".commentsDrawerClose").removeClass("db");
            }
        };
        self.init = function() {
            $("body").on("hmpg.snap",
            function(event) {
                self.snap(event.snapPoint);
            });
        };
    }
    function respSlideShow(mod) {
        var self = this;
        this.mod = $(mod);
        this.carousel = null;
        this.jcarousel = null;
        this.paginate = null;
        this.pages = null;
        this.mnid = null;
        this.updateRotateMnid = function() {
            try {
                if (window.bN_cfg) {
                    window.bN.set("mnid", self.mnid + "-rotate", 1);
                }
            } catch(e) {}
        }
        this.bind = function() {
            var id = self.mod.attr("id");
            self.carousel = self.mod.find("ul");
            self.paginate = self.mod.find(".paginate");
            self.pages = self.paginate.find("a");
            self.carousel.find("li").removeClass("dn");
            self.mnid = utils.findClass($('#mod24x7')[0], /mnid-.*/).replace("mnid-", "");
            self.carousel.jcarousel({
                buttonPrevHTML: null,
                buttonNextHTML: null,
                visible: 1,
                scroll: 1,
                easing: "swing",
                animation: 400,
                wrap: "both",
                initCallback: function(carousel) {
                    self.carousel.find("li:first-child").addClass("active");
                    $("#" + id + "next").bind('click',
                    function(e) {
                        omn.omcl(id + "_next");
                        carousel.next();
                        self.updateRotateMnid();
                        e.preventDefault();
                    });
                    $("#" + id + "prev").bind('click',
                    function(e) {
                        omn.omcl(id + "_prev");
                        carousel.prev();
                        self.updateRotateMnid();
                        e.preventDefault();
                    });
                    self.carousel.find("li").on("swipeleft",
                    function(e) {
                        carousel.next();
                        self.updateRotateMnid();
                        omn.omcl(id + "_next");
                    });
                    self.carousel.find("li").on("swiperight",
                    function(e) {
                        carousel.prev();
                        self.updateRotateMnid();
                        omn.omcl(id + "_prev");
                    });
                    self.carousel.on("click", "li.active a",
                    function(e) {
                        try {
                            if (window.bN_cfg) {
                                window.bN.set("mnid", self.mnid + "-feature" + utils.findClass(self.carousel.find('li.active a')[0], /lnid-.*/).replace('lnid-sec2_lnk', ''), 1);
                            }
                        } catch(e) {}
                    });
                },
                itemFirstInCallback: {
                    onBeforeAnimation: function(carousel, li, i, state) {
                        var img = $(li).find(".anystretch img");
                        var src = img.attr("class");
                        if (src != "") {
                            img.attr("src", src);
                            img.attr("class", "");
                        }
                        self.carousel.find("li").removeClass("active");
                        self.carousel.find("li.jcarousel-item-" + i).addClass("active");
                        self.pages.removeClass("sel");
                        self.paginate.find(".slide" + i).addClass("sel");
                        try {
                            if (typeof(bN) != 'undefined') {
                                var el = self.carousel.find("li.active");
                                if (!el.hasClass("bCn")) {
                                    var lnid = utils.findClass(el.find("a.hero-slide-container")[0], /lnid-.*/).replace("lnid-", "");
                                    bN.extractIds(el[0]);
                                    bN.set("mnid", self.mnid + "-feature" + lnid.replace("sec2_lnk", ""), 1);
                                    bN.set("lnid", lnid, 1);
                                    bN.ping("mod24x7");
                                    el.addClass("bCn");
                                    if ($("#recent-roundabout ul").find("a.lnid-" + lnid).length) {
                                        $("#recent-roundabout ul").find("a.lnid-" + lnid).closest("li").addClass("bCn");
                                    }
                                }
                            }
                        } catch(e) {}
                    }
                }
            });
            self.jcarousel = self.carousel.data("jcarousel");
            var i = 1;
            self.pages.each(function() {
                $(this).data("page", i++);
                $(this).click(function(e) {
                    var page = $(this).data("page");
                    omn.omcl(id + "_page" + page);
                    self.jcarousel.scroll($.jcarousel.intval(page));
                    self.updateRotateMnid();
                    e.preventDefault();
                });
            });
        };
        self.bind();
    }
    function Twentyfourseven() {
        var self = this;
        this.respSlideshow = false;
        this.mnid = utils.findClass($('#mod24x7')[0], /mnid-.*/).replace("mnid-", "");
        self.resetContent = function() {
            if ($("#mod24x7").closest("#col1R").length) {
                $(".p24x7").append($("#mod24x7"));
            }
        };
        self.bCnPing = function() {
            var el = $('ul.rnd').find('.roundabout-in-focus');
            if (!el.hasClass("bCn")) {
                try {
                    if (typeof(bN) != 'undefined') {
                        var lnid = utils.findClass(el.find("a.slide-img")[0], /lnid-.*/).replace("lnid-", "");
                        var _mnid = self.mnid.split("-feature")[0];
                        _mnid += "-feature" + lnid.replace("sec2_lnk", "");
                        bN.extractIds(el[0]);
                        bN.set("mnid", _mnid, 1);
                        bN.set("lnid", lnid, 1);
                        bN.ping("mod24x7");
                        el.addClass("bCn");
                        if ($("#recent-slider ul").find("a.lnid-" + lnid).length) {
                            $("#recent-slider ul").find("a.lnid-" + lnid).closest("li").addClass("bCn");
                        }
                    }
                } catch(e) {}
            }
        }
        self.moveContent = function() {
            $("#col1R").prepend($("#mod24x7"));
        };
        self.snap = function(snapPoint) {
            switch (snapPoint) {
            case 320:
            case 480:
                if (!self.respSlideshow) {
                    respSlideShow(".respSlideshow");
                    self.respSlideshow = true;
                }
                break;
            case 768:
                self.moveContent();
                if (!self.respSlideshow) {
                    respSlideShow(".respSlideshow");
                    self.respSlideshow = true;
                }
                break;
            default:
                self.resetContent();
                self.bCnPing();
                break;
            }
        };
        self.init = function() {
            if ($("#mod24x7").length) {
                $("#mod24x7").parent().addClass("p24x7");
                $("body").on("hmpg.snap",
                function(event) {
                    self.snap(event.snapPoint);
                });
            }
            $(window).on("load",
            function(event) {
                if ($("#mod24x7").length) {
                    self.snap(hmpg.getSnapPoint());
                }
            });
        };
    }
    function LocalTrafficMap() {
        var self = this;
        this.iframeId = "#locMQIFrame";
        this.wrapperId = "#local-mapquest-wrapper";
        self.snap = function(snapPoint, isResize) {
            if ($(self.iframeId).length) {
                switch (snapPoint) {
                case 320:
                    self.resizeTo(300, 250);
                    break;
                case 480:
                    self.resizeTo(460, 320);
                    break;
                case 768:
                    self.resizeTo(420, 300);
                    break;
                default:
                    self.resizeTo(640, 400);
                    break;
                }
            }
        };
        self.resizeTo = function(w, h) {
            if ($(self.iframeId).length) {
                $(self.iframeId).attr("width", w);
                $(self.iframeId).attr("height", h);
                if (!$(self.wrapperId).hasClass("noreload")) {
                    $(self.iframeId).attr("src", $(self.iframeId).attr("src"));
                }
            }
        };
        self.ajaxInit = function() {
            self.snap(hmpg.getSnapPoint());
        };
        self.init = function() {
            $("body").on("hmpg.snap",
            function(event) {
                self.snap(event.snapPoint, event.isResize);
            });
            if (!$("#locMQIFrame").length) cod.register(self.ajaxInit);
        };
    }
    function HomePage() {
        var self = this;
        self.quickNav = new QuickNav();
        self.mobileMenu = new MobileMenu();
        self.breakingNews = new BreakingNews();
        self.responsivePage = new ResponsivePage();
        self.logo = new Logo();
        self.changeCanvas = new ChangeCanvas();
        self.ads = new Ads();
        self.dailyBuzz = new DailyBuzz();
        self.newsletterOverlay = new NewsletterOverlay();
        self.unfoldingNow = new UnfoldingNow();
        self.responsiveGrid = ResponsiveGrid;
        self.responsiveDL = new ResponsiveDL();
        self.comments = new Comments();
        self.horoscopes = new HoroscopesFeedModule($('#horoscope').parent());
        self.twentyfourseven = new Twentyfourseven();
        self.globalMoreMods = {};
        $(".choose-news-headlines").each(function() {
            var theId = "#" + $(this).attr("id");
            self.globalMoreMods[theId] = new globalMore(theId, "ul.headlines", "li", ".newsmore", new ChooseNewsMore(), false, false, true);
        });
        $(".playlistMod").each(function() {
            var theId = "#" + $(this).attr("id");
            self.globalMoreMods[theId] = new globalMore(theId, ".videoPlaylist", "li", ".view-more a", new PopularVidoesMore(), true, false, false);
        });
        self.collapseModules = new setModuleToggles();
        self.localStoriesMore = new globalMore("#localstories", "#local_stories_list", "li", "#localViewMore", new LocalStoriesMore(), false, true, false);
        self.popularStoriesMore = new globalMore("#aol-trendingstories", ".ctnt", "div.story", ".rectip a", new PopularStoriesMore(), true, false, false);
        self.horizontalNav = new HorizontalNav();
        self.localTrafficMap = new LocalTrafficMap();
        self.initModulesFromArray = function(theArray) {
            $.each(theArray,
            function() {
                this.init();
            });
        };
        self.init = function() {
            self.quickNav.init();
            self.mobileMenu.init();
            self.breakingNews.init();
            self.logo.init();
            self.changeCanvas.init();
            self.ads.init();
            self.dailyBuzz.init();
            self.newsletterOverlay.init();
            self.responsiveGrid.init();
            self.unfoldingNow.init();
            self.collapseModules.init();
            self.localStoriesMore.init();
            self.popularStoriesMore.init();
            self.initModulesFromArray(self.globalMoreMods);
            self.responsiveDL.init();
            self.horizontalNav.init();
            self.comments.init();
            self.twentyfourseven.init();
            self.localTrafficMap.init();
            self.responsivePage.init();
        };
        self.getSnapPoint = function() {
            return self.responsivePage.getSnapPoint();
        };
    }
    hmpg = new HomePage();
    AOL.hmpg = hmpg;
    function setModuleToggles() {
        var self = this;
        this.moduleNamePairs = new Array();
        this.collapseFunctionalityOn = false;
        self.snap = function(snapPoint) {
            switch (snapPoint) {
            case 320:
            case 480:
                self.addCollapseFunctionality();
                break;
            default:
                self.removeCollapseFunctionality();
                break;
            }
        };
        self.init = function() {
            if (AOL.collapseModuleFeatureEnabled === "true") {
                $("body").on("hmpg.snap",
                function(event) {
                    self.snap(event.snapPoint);
                });
            }
        };
        self.addCollapseFunctionality = function() {
            if (typeof collapseOff != "undefined" && collapseOff == "true") {
                return;
            }
            if (self.collapseFunctionalityOn == false) {
                this.collapseFunctionalityOn = true;
                self.setDefaults();
                self.setOpenStateOnAllCollapsibles();
                self.readModuleCollapseCookie();
                self.updateModulesToDefaultState();
                self.setClicks();
            }
        };
        self.removeCollapseFunctionality = function() {
            if (self.collapseFunctionalityOn == true) {
                this.collapseFunctionalityOn = false;
                self.updateCollapseArrowIndicator(".toggleModule", 0);
                self.unCollapseAllModules();
                self.unsetClicks();
            }
        };
        self.unCollapseAllModules = function() {
            for (var i = 0; i < self.moduleNamePairs.length; i++) {
                var thisPair = self.moduleNamePairs[i].split(":");
                if (thisPair.length == 2) {
                    self.setDefaultModuleState(thisPair[0], 0);
                }
            }
        };
        self.setOpenStateOnAllCollapsibles = function() {
            self.updateCollapseArrowIndicator(".toggleModule", 2);
        };
        self.clickOntoggle = function(e) {
            var elm = e.srcElement || e.target;
            var toggleClass = (utils.findClass(elm, /toggle-[^ ]+/)).replace("toggle-", "");
            e.preventDefault();
            self.toggleModule(toggleClass);
        };
        self.setClicks = function() {
            $(".toggleModule").each(function(i, obj) {
                $(this).bind("click", self.clickOntoggle);
            });
        };
        self.unsetClicks = function() {
            $(".toggleModule").each(function(i, obj) {
                $(this).unbind("click", self.clickOntoggle);
            });
        };
        self.bindToggleModuleClicks = function(div) {
            div.find(".toggleModule").bind("click", self.clickOntoggle);
        };
        self.rebindCollapseFeaturesForAJAX = function(div, state) {
            if (hmpg && hmpg.getSnapPoint() < 481 && collapseOff != "true") {
                var toggleClass = self.getToggleClass(div);
                if (state == undefined) {
                    var cookieState = self.getModuleState(toggleClass);
                    if (cookieState == null || cookieState == '') {
                        self.setDefaultModuleState(toggleClass, 2);
                    } else {
                        self.setDefaultModuleState(toggleClass, cookieState);
                    }
                    self.bindToggleModuleClicks(div);
                } else {
                    self.updateCookie(toggleClass, state);
                    self.setDefaultModuleState(toggleClass, state);
                    self.bindToggleModuleClicks(div);
                }
            }
        };
        self.getModuleState = function(toggleClass) {
            var returnState = 0;
            if (self.moduleNamePairs != null) {
                for (var i = 0; i < self.moduleNamePairs.length; i++) {
                    var thisPair = self.moduleNamePairs[i].split(":");
                    if (thisPair.length == 2) {
                        if (thisPair[0] == toggleClass) {
                            returnState = thisPair[1];
                            break;
                        }
                    }
                }
            }
            return returnState;
        };
        self.getToggleClass = function(div) {
            var toggleClassStr = "";
            div.find(".toggleModule").each(function() {
                toggleClassStr = (utils.findClass(this, /toggle-[^ ]+/)).replace("toggle-", "");
            });
            return toggleClassStr;
        };
        self.updateCollapseArrowIndicatorAfterAjax = function(div) {
            div.find(".toggleModule").each(function() {
                var toggleClass = (utils.findClass(this, /toggle-[^ ]+/)).replace("toggle-", "");
                self.updateCollapseArrowIndicatorBasedOnVisibility(toggleClass);
            });
        };
        self.updateCollapseArrowIndicatorBasedOnVisibility = function(toggleClass) {
            if (toggleClass != null && toggleClass.length > 0) {
                var elem = $(".collapse-" + toggleClass);
                var state = 2;
                if (elem.css("display") == "none") {
                    state = 1;
                }
                self.updateCollapseArrowIndicator(".toggle-" + toggleClass, state);
            }
        };
        self.bindHoroscopes = function(div) {
            div.find(".toggleModule").click(function(e) {
                var elm = e.srcElement || e.target;
                var toggleClass = (utils.findClass(elm, /toggle-[^ ]+/)).replace("toggle-", "");
                e.preventDefault();
                self.toggleModule(toggleClass);
            });
        };
        self.updateModulesToDefaultState = function() {
            for (var i = 0; i < self.moduleNamePairs.length; i++) {
                var thisPair = self.moduleNamePairs[i].split(":");
                if (thisPair.length == 2) {
                    self.setDefaultModuleState(thisPair[0], thisPair[1]);
                }
            }
        };
        self.readModuleCollapseCookie = function() {
            var collapseModules = cookies.get('mdTgl');
            if (collapseModules == null) {
                return;
            }
            var cookieModulePairs = collapseModules.split("~");
            for (var i = 0; i < self.moduleNamePairs.length; i++) {
                for (var k = 0; k < cookieModulePairs.length; k++) {
                    var cookieModule = cookieModulePairs[k].split(":");
                    var defaultModule = self.moduleNamePairs[i].split(":");
                    if (cookieModule[0] == defaultModule[0]) {
                        self.moduleNamePairs[i] = cookieModulePairs[k];
                        cookieModulePairs.splice(k, 1);
                        break;
                    }
                }
            }
            self.moduleNamePairs = self.moduleNamePairs.concat(cookieModulePairs);
        };
        self.setDefaults = function() {
            if (typeof mobileModuleCollapse == "undefined" || mobileModuleCollapse == "") {
                return;
            }
            self.moduleNamePairs = mobileModuleCollapse.split("~");
        };
        self.toggleModule = function(toggleClass) {
            if (toggleClass != null && toggleClass.length > 0) {
                var elem = $(".collapse-" + toggleClass);
                elem.toggle();
                var state = 2;
                if (elem.css("display") == "none") {
                    state = 1;
                }
                self.updateCollapseArrowIndicator(".toggle-" + toggleClass, state);
                self.updateCookie(toggleClass, elem.css("display") != "none");
                $(document).trigger('toggle-' + toggleClass, {
                    toggle_state: state
                });
            }
        };
        self.setDefaultModuleState = function(toggleClass, state) {
            if (toggleClass != null && toggleClass.length > 0) {
                var elem = $(".collapse-" + toggleClass);
                if (state == 1) {
                    elem.hide();
                } else if (state == 2 || state == 0) {
                    elem.show();
                }
                self.updateCollapseArrowIndicator(".toggle-" + toggleClass, state);
            }
        };
        self.updateCollapseArrowIndicator = function(toggleClass, state) {
            var elem = $(toggleClass);
            if (elem != null) {
                if (state == 1) {
                    elem.removeClass("toggleModuleShowIcon").addClass("toggleModuleHideIcon");
                } else if (state == 2) {
                    elem.removeClass("toggleModuleHideIcon").addClass("toggleModuleShowIcon");
                } else if (state == 0) {
                    elem.removeClass("toggleModuleHideIcon").removeClass("toggleModuleShowIcon");
                }
            }
        };
        self.updateCookie = function(toggleClass, isVisible) {
            var visible = !isVisible ? 1 : 2;
            var toggleValue = toggleClass + ":" + visible
            var collapseModules = cookies.get('mdTgl');
            if (collapseModules == null) {
                cookies.set("mdTgl", toggleValue);
            } else {
                var newCookie = new Array();
                var valUpdated = false;
                var moduleNamePairs = collapseModules.split("~");
                for (var i = 0; i < moduleNamePairs.length; i++) {
                    var modulePair = moduleNamePairs[i].split(":");
                    if (modulePair[0] == toggleClass) {
                        modulePair[1] = visible;
                        valUpdated = true;
                    }
                    newCookie.push(modulePair.join(":"));
                }
                if (!valUpdated) {
                    newCookie.push(toggleValue);
                }
                cookies.set("mdTgl", newCookie.join("~"));
            }
        };
    }
    $(document).ready(function() {
        hmpg.init();
    });
})(jQuery);