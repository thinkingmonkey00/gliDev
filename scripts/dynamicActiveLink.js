export function dynamicActiveLinks() {

  function dynamicActiveLinks() {
    jQuery(function ($) {
      $('#menu > ul.navbar-nav li').click(function (e) {
        $('.navbar-nav li.active').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
      });
    });
  }
}