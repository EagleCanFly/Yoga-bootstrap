$(document).ready(function () {
	$("#slider-1").owlCarousel({
		center: true,
		items: 2,
		loop: true,
		margin: 200,
		responsive: {
			300: {
				items: 1,
				margin: 0,
			},
			600: {
				items: 1,
				margin: 100,
				center: false,
			},
			900: {
				items: 2,
				margin: 200,
				// center: false
			},
		},
	}),
		$("#slider-2").owlCarousel({
			center: true,
			items: 2,
			loop: true,
			margin: 200,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
					margin: 100,
					center: false,
				},
				900: {
					items: 2,
					margin: 200,
					// center: false
				},
			},
		}),
		$("#slider-3").owlCarousel({
			items: 1,
			loop: true,
			// margin: 50,
			autoplay: true
		}),
		$("#slider-4").owlCarousel({
			items: 1,
			loop: true,
			// margin: 50,
			autoplay: true
		}),
		$("#slider-5").owlCarousel({
			items: 1,
			loop: true,
			margin: 50,
			nav: true,
			navText: [
				"<img src='img/slider_images/slider-5-left-arrow.png'>",
				"<img src='img/slider_images/slider-5-right-arrow.png'>",
			],
			dots: true,
			lazyLoad: true,
			autoplay: true
		});
});
