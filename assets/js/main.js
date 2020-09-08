/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

	$('.sl').slick({
		slidesToShow: 4,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

	$(function() {
			
			(function quantityProducts() {
				var $quantityArrowMinus = $(".quantity-arrow-minus");
				var $quantityArrowPlus = $(".quantity-arrow-plus");
				var $quantityNum = $(".quantity-num");
				
				$quantityArrowMinus.click(quantityMinus);
				$quantityArrowPlus.click(quantityPlus);
				
				function quantityMinus() {
					if ($quantityNum.val() > 1) {
						$quantityNum.val(+$quantityNum.val() - 1);
					}
				}
				
				function quantityPlus() {
					$quantityNum.val(+$quantityNum.val() + 1);
				}
			})();
			
		});
	
})(jQuery);