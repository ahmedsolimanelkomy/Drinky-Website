AOS.init({
  duration: 800,
  easing: 'slide',
});

(function ($) {

  'use strict';

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
    verticalOffset: 0,
  });

  // Scrollax
  $.Scrollax();

  let fullHeight = function () {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();

  // loader
  let loader = function () {
    setTimeout(function () {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  let carousel = function () {
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: ['<span class=\'ion-md-arrow-back\'></span>', '<span class=\'ion-chevron-right\'></span>'],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 1,
          nav: false,
        },
      },
    });
    $('.carousel-work').owlCarousel({
      autoplay: true,
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
        },
        600: {
          items: 2,
          stagePadding: 50,
        },
        1000: {
          items: 3,
          stagePadding: 100,
        },
      },
    });

  };
  carousel();

  $('nav .dropdown').hover(function () {
    let $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    let $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });

  // scroll
  let scrollWindow = function () {
    $(window).scroll(function () {
      let $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

  let counter = function () {

    $('#section-counter').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

        let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        $('.number').each(function () {
          let $this = $(this),
            num = $this.data('number');
          console.log(num);
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step,
            }, 7000,
          );
        });

      }

    }, { offset: '95%' });

  };
  counter();

  let contentWayPoint = function () {
    let i = 0;
    $('.ftco-animate').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function () {

          $('body .ftco-animate.item-animate').each(function (k) {
            let el = $(this);
            setTimeout(function () {
              let effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });

        }, 100);

      }

    }, { offset: '95%' });
  };
  contentWayPoint();

  // navigation
  let OnePageNav = function () {
    $('.smoothscroll[href^=\'#\'], #ftco-nav ul li a[href^=\'#\']').on('click', function (e) {
      e.preventDefault();

      let hash = this.hash,
        navToggler = $('.navbar-toggler');
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 700, 'easeInOutExpo', function () {
        window.location.hash = hash;
      });

      if (navToggler.is(':visible')) {
        navToggler.click();
      }
    });
    $('body').on('activate.bs.scrollspy', function () {
      console.log('nice');
    });
  };
  OnePageNav();

  // magnific popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(window).click((e) => {
    if (e.target.classList.contains('quantity-left-minus')) {
      let newDecVal = parseInt($(e.target).next().find('> .qty-input').val()) - 1;
      newDecVal > 1
        ? $(e.target).next().find('> .qty-input').val(newDecVal)
        : $(e.target).next().find('> .qty-input').val(1);
    } else if (e.target.classList.contains('quantity-right-plus')) {
      let newIncVal = parseInt($(e.target).prev().find('> .qty-input').val()) + 1;
      $(e.target).prev().find('> .qty-input').val(newIncVal);
    }
  });

  function previewImages (inputElement, previewElement) {
    for (let i = 0; i < inputElement.files.length; i++) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(inputElement.files[i]);
      img.className = 'img-thumbnail';
      img.width = 200;
      img.height = 200;
      img.onload = function () {
        URL.revokeObjectURL(this.src);
      };
      $('#imageName').html(inputElement.files[i].name);
      $(previewElement).append(img);
    }
  }

  // Show main image preview in the add user form
  $('#user_image').change((e) => {
    $('.user-image-preview').css('display', 'flex').html('');

    previewImages(e.target, '.user-image-preview');
  });

  // Show main image preview in the add product form
  $('#product_image').change((e) => {
    $('.product-image-preview').css('display', 'flex').html('');

    previewImages(e.target, '.product-image-preview');
  });


  $('.js-menu-toggle').click(function (e) {
    let $this = $(this);
    if ($('body').hasClass('show-sidebar')) {
      $('body').removeClass('show-sidebar');
      $this.removeClass('active');
    } else {
      $('body').addClass('show-sidebar');
      $this.addClass('active');
    }
    e.preventDefault();
  });

  // click outside offcanvas
  $(document).mouseup(function (e) {
    let container = $('.sidebar');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('show-sidebar')) {
        $('body').removeClass('show-sidebar');
        $('body').find('.js-menu-toggle').removeClass('active');
      }
    }
  });

})(jQuery);

