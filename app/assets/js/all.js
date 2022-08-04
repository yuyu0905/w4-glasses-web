$(document).ready(() => {
  // menu
  $("#header-menu-icon").click(function(e) {
    // console.log($(this).siblings('ul'));
    e.preventDefault();
    $(this).siblings('ul').slideToggle();
  });
});