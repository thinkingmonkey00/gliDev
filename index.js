import jQuery from 'jquery';
import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

if ( module.hot ) {
    module.hot.accept(function () {
      window.location.reload();
    });
  }

  jQuery(function ($) {
    $('#menu > ul.navbar-nav li').click(function(e) {
        $('.navbar-nav li.active').removeClass('active');
        $(this).addClass('active');;
        e.preventDefault();
    });
});
