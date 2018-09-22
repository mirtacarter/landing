$(document).ready(function() {
  var scrollLink = $("a.js-scroll-trigger");
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      if ( sectionOffset <= scrollbarLocation ) {
        $("#mainNav").addClass("navbar-shrink");
        $("#mainNav").addClass("active");
        $("#start").addClass("invisible");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
        $("#mainNav").siblings().removeClass("active");
      }
    });
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  });