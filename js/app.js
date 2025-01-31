//Special Countdown
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("10 February 2025");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60 ) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}
countDown()
setInterval(countDown, 1000)

//Scroll Back To top

function scrollTopBack (){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 250){
            scrollTopButton.classList.add('scrollActive')
        }else{
            scrollTopButton.classList.remove('scrollActive') 
        }
    }
}
scrollTopBack()

//Nav Hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})

// active navbar
$(document).ready(function () {
    function activeMenu() {
        var currentScroll = $(window).scrollTop();
        var sections = $('.main-section');

        sections.each(function () {
          var sectionTop = $(this).offset().top - 120; // Adjust offset for smoother activation
          var sectionBottom = sectionTop + $(this).outerHeight();



          if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
            var currentId = $(this).attr('id');
            $('#navbarNav ul li a').removeClass('active');
            $('#navbarNav ul li a[data-section="#' + currentId + '"]').addClass('active');
          }
        });
    }
    // Function to highlight the active menu item
    $(window).on('scroll', function () {
        activeMenu();
    });
    activeMenu();
    // Smooth scrolling when menu is clicked
    $('#navbarNav ul li a').on('click', function (e) {
      e.preventDefault();

        if($('.navbar-collapse.collapse').hasClass('show')){
            $('.navbar-collapse.collapse').removeClass('show');
        }

      var targetId = $(this).attr('data-section');
      $('html, body').animate(
        {
          scrollTop: $(targetId).offset().top-90,
        },
        {
          duration: 500, // Animation speed
          easing: 'swing',
        }
      );
    });
  });

