/*!
 * Start Bootstrap - Agency v6.0.0 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 
$(document).ready(function(){
  
  "use strict"; // Start of use strict
  console.log("En js de easing");

  var scrollPos = 20;

  window.addEventListener('scroll', function(){
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top < scrollPos)
      document.getElementById("mainNav").classList.add('navbar-shrink');
    else
      document.getElementById("mainNav").classList.remove('navbar-shrink');
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;

    console.log(document.body.offsetTop);
    
    
  });
*/
// Closes responsive menu when a scroll trigger link is clicked
/*
$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});*/

// Activate scrollspy to add active class to navbar items on scroll
/*
$("body").scrollspy({
  target: "#mainNav",
  offset: 74,
});

// Collapse Navbar
var navbarCollapse = function () {
  if (window.pageYOffset > 100) {
    document.getElementById("mainNav").addClass("navbar-shrink");
  } else {
    document.getElementById("mainNav").removeClass("navbar-shrink");
  }
};*/
// Collapse now if page is not at top
////navbarCollapse();
// Collapse the navbar when page is scrolled
//$(window).scroll(navbarCollapse);
//  }); 
