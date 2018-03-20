// Firebelly 2016
/*jshint latedef:false*/

// Good Design for Good Reason for Good Namespace
var FB = (function($) {

  var screen_width = 0,
      breakpoint_small = false,
      breakpoint_medium = false,
      breakpoint_nav = false,
      breakpoint_large = false,
      breakpoint_array = [480,950,1020,1200]; // breakpoint_medium is intentionally 950 instead of 900 (its value in css)


  function _init() {
    // Cache some common DOM queries
    $document = $(document);
    $header = $('.site-header');
    $nav = $('.site-nav');
    $('body').addClass('loaded');

    // Set screen size vars
    _resize();

    // Fit them vids!
    $('main').fitVids();

    // Esc handlers
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {

      }
    });

    // Smoothscroll links
    $('a.smoothscroll').click(function(e) {
      e.preventDefault();
      var href = $(this).attr('href');
      _scrollBody($(href), 250, 0, true);
    });

    // Bigclicky™
    $(document).on('click', '.bigclicky', function(e) {
      if (!$(e.target).is('a')) {
        e.preventDefault();
        var link = $(this).find('a:first');
        var href = link.attr('href');
        if (href) {
          if (e.metaKey || link.attr('target')) {
            window.open(href);
          } else {
            location.href = href;
          }
        }
      }
    });

    // Scroll down to hash after page load
    $(window).load(function() {
      if (window.location.hash) {
        _scrollBody($(window.location.hash), 250, 0, true);
      }
    });


  } // end init()


  // Called in quick succession as window is resized
  function _resize() {
    screenWidth = document.documentElement.clientWidth;
    breakpoint_small = (screenWidth >= breakpoint_array[0]);
    breakpoint_medium = (screenWidth >= breakpoint_array[1]);
    breakpoint_nav = (screenWidth >= breakpoint_array[2]);
    breakpoint_large = (screenWidth >= breakpoint_array[3]);
  }



  // Public functions
  return {
    init: _init,
    initHighcharts: _initHighcharts,
    resize: _resize,
    scrollBody: function(section, duration, delay) {
      _scrollBody(section, duration, delay);
    }
  };

})(jQuery);

// Fire up the mothership
jQuery(document).ready(FB.init);

// Zig-zag the mothership
jQuery(window).resize(FB.resize);