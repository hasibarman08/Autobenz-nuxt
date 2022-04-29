function initialize() {
	'use strict';
	var mapOptions = {
		zoom: 15,
		scrollwheel: false,
		center: new google.maps.LatLng(46.19872880593636, 6.152220144951928)
	};

	var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

	var marker = new google.maps.Marker({
		position: map.getCenter(),
		animation: google.maps.Animation.BOUNCE,
		icon: 'img/logo/map-marker.png',
		map: map
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
