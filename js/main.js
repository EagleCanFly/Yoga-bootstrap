$(document).ready(function () {
	$("#slider-1").owlCarousel({
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
				margin: 50,
			},
			900: {
				items: 2,
				margin: 200,
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
					margin: 50,
				},
				900: {
					items: 2,
					margin: 200,
				},
			},
		}),
		$("#slider-3").owlCarousel({
			items: 1,
			loop: true,
			margin: 50,
        }),
        $("#slider-4").owlCarousel({
			items: 1,
			loop: true,
			margin: 50,
        }),
        $("#slider-5").owlCarousel({
			items: 1,
			loop: true,
			margin: 50,
		});
});
