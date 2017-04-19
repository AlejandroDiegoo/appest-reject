require([
	'./vendor/jquery.min'
], function() {

	function onDeviceReady() {
		window.addEventListener('batterystatus', onBatteryStatus, false);
	}

	function onBatteryStatus(status) {
		if (status.isPlugged) {
			$('body > div').addClass('on');
			$('#unplugged').fadeOut();
		} else {
			$('#unplugged').fadeIn();
			$('body > div').removeClass('on');
		}
	}

	function drawLights() {

		var lightsSelector = '#lights';
		var lightsRowSelector = $(lightsSelector).find('.table-row');
		var lightsCellSelector = $(lightsSelector).find('.table-cell');

		for (i = 1; i < 20; i++) {
			var clone = lightsCellSelector.clone();
			clone.appendTo(lightsRowSelector);
		}

		for (i = 1; i < 10; i++) {
			var clone = lightsRowSelector.clone();
			clone.appendTo(lightsSelector);
		}

		lightsSize();

	};

	function lightsSize() {

		$('#lights span').addClass('hide');
		$('#lights span').css('width', Math.floor((($('#lights').parent('.table-cell').width()-2)/20)-2) + 'px');
		$('#lights span').css('height', Math.floor((($('#lights').parent('.table-cell').width()-2)/20)-2) + 'px');
		$('#lights span').removeClass('hide');

	};

	$(document).ready(function() {

		drawLights();

		$(window).resize(function() {
			lightsSize();
		});

		$('#preload').fadeOut();

		if (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1) {

			require(['./../cordova'], function() {

				document.addEventListener('deviceready', onDeviceReady, false);

			});

		} else {

			$('#unplugged').click(function() {
				$('#unplugged').fadeOut();
			});

			$('.led-green').click(function() {
				$('body > div').addClass('on');
			});

			$('.led-red').click(function() {
				$('body > div').removeClass('on');
			});

		}

	});

});
