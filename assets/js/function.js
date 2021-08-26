(function ($) {
    'use strict';

    //sidebar top fixed start
    var fixed_top = $(".side-bar");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 130) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
            fixed_top.removeClass("slideInUp");
            $('body').addClass("body-padding");
        } else {
            fixed_top.removeClass("menu-fixed fadeInDown");
            fixed_top.addClass("slideInUp");
            $('body').removeClass("body-padding");
        }
    });

    //menu side bar
    $('.mobile-bar').on('click', function () {
        $('body,header,.mobile-bar,.main-menu').toggleClass('active');
    });

    $('.crose-bar').on('click', function () {
        $('body,header,.mobile-bar,.main-menu').removeClass('active');
    });

    //menu side bar
    $('.side-hamburger').on('click', function () {
        $('bod,.overlay,.side-hamburger,.sidebar-menu').toggleClass('active');
    });

    // remove overlay
    $('.overlay').on('click', function () {
        $('body,.overlay,.side-hamburger,.sidebar-menu').removeClass('active');
    });

    $('.crose-item').on('click', function () {
        $('body, .item2-form').toggleClass('active')
    });

    // menu icon-related
    $(".list-item>li>.sub-menu").parent("li").children("a").addClass("icon-down");

    //mobile drodown menu display
    $('ul.menu-list li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(500, "swing");
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(500, "swing");
            element.siblings('li').children('ul').slideUp(500, "swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(500, "swing");
        }
    });


    // drop down menu width overflow problem fix
    $('ul').parent().on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({ left: newpos });
        }
    });
    // Theme switcher
    $(document).ready(function () {
        $(".theme-switcher").click(function () {
            $(this).text(function (i, v) {
                return v === 'light' ? 'dark' : 'light'
            });
        });
    });

    (function () {
        $('.theme-switcher').click(function () {
            $('#theme').toggleClass('dark');
        });
    })();

    // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
            scrollTop.removeClass("active");
        } else {
            scrollTop.addClass("active");
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY) {
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }
    $('.btn').on('mousedown', function (e) {
        //appending an element with a class name "btn-ripple"
        var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

        //getting the button's offset position
        var pos = $(this).offset();

        //get the button's width and height
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        //get the cursor's x and y position within the button
        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;

        //adding a css style to the ripple effect
        var rippleStyle = new RippleStyle(width, height, posX, posY);
        rippleEl.css(rippleStyle);
    });

    //this event listener will be triggered once the ripple animation is done
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function () {
        $(this).remove();
    });

    // jquery stepper custome
    $('.stepper-btn').on('click', function () {
        let serial = jQuery(this).attr('serial');
        let next_step = (parseInt(serial) + 1);
        jQuery('.stepper').removeClass('active');
        jQuery('.menu-' + next_step).addClass('active')
        jQuery('.step-'+ next_step).fadeIn('slow')
        jQuery('.step-' + next_step).removeClass('d-none')
        jQuery('.step-' + serial).hide()
        jQuery('.prev-btn').prop('disabled', false)
    })

    $('.prev-btn').on('click', function () {
        let serial = jQuery(this).attr('serial');
        let prev_step = (parseInt(serial) - 1);
        console.log(prev_step)
        jQuery('.step-' + serial).hide()
        jQuery('.step-'+ prev_step).fadeIn('slow')
        jQuery('.step-' + prev_step).removeClass('d-none')
        jQuery('.stepper').removeClass('active');
        jQuery('.menu-' + prev_step).addClass('active')
    })

     // modal 1 option start hear
     $(function(){
        $('.view-processor').on('click', function () {
            $('.modal_1').addClass('show');
        });
        $('.close').on('click', function () {
            $('.modal_1').removeClass('show');
        });
        $('.modal_1').on('click', function () {
            $('.modal_1').removeClass('show');
        });
    })


    // modal 2 option start hear
    $(function(){
        $('.view-processor').on('click', function () {
            $('.modal_2').addClass('show');
        });
        $('.pbwp-selec-hide').on('click', function () {
            $('.modal_2').removeClass('show');
        });
    })

    // zomm imge active
    $(function(){
        $(".img").jqZoom({
            selectorWidth: 60,
            selectorHeight: 60,
            viewerWidth: 400,
            viewerHeight: 300
        });

    })

    //product pagination
    $(function () {
        $('.pbwp-pr-btn').on('click', function() {
            let imgSrc = jQuery(this).attr('src')
            console.log(imgSrc)
            $('.pbwp-product-thumb-img').attr('src', imgSrc)
            $('.pbwp-pr-btn').removeClass("active");
            $(this).addClass("active");
        });
    })

    // jQuery('.show-select-products').on('click',function(){
    //     let DataItem = jQuery(this).attr('data-item')
    //     jQuery('.pbwp-select-products').hide() 
    //     jQuery('.pbwp-select-products-'+DataItem).show()
    // })

    // jQuery('.pbwp-selec-hide').on('click', function() {
    //     $('.pbwp-select-products').hide()
    // })

    // jquery ui accordion
    $("#accordion").accordion({collapsible: true});
    $('.js-accordion-title').on('click', function () {
      $(this).next().slideToggle(200);
    });

    // more option
    $(document).ready(function() {
      $('.more-option').click(function() {
        $('.more-option-item').toggleClass('show');
      })
    })

    // product radio 
    $(document).ready(function() {
      $('form.product-radio p').click(function() {
          $('form.product-radio p').removeClass('active');
          $(this).addClass('active');
      });
    });

     //Slick Slider
     $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      asNavFor: '.slider-nav',
      autoplay: 5000,
   });
   $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows:false,
      centerMode: false,
      focusOnSelect: true,
   });

    // quick link slider
    $('ul.quick-list').slick({
      dots: false,
      infinite: false,
      speed: 300,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false,
            arrows: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    // product details slider activation
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows : false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });


    // game slider activation
    $('.pbwp-game-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    });


    // product slider activation
    $('.product-slide').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows : true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    // search bar
    $('#searchButton').click( function() {
      $('#pbwSearch').toggleClass('active');
      $('.pbwp-header-icon').toggleClass('hide')
    });

})(jQuery);