'use strict';

function getMessage(a, b) {
	var message;

	if (typeof a === 'boolean') {
        if(a === true) {
			message = 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
		} else {
			message = 'Переданное GIF-изображение не анимировано';
		}
	}  

	if (typeof a === 'number') {
		message = 'Переданное SVG-изображение содержит ' + a + 'объектов и ' + b * 4 + ' атрибутов';
	}

	if (Array.isArray(a)) {
		if (Array.isArray(b)) {
			var n = Math.min(a.length, b.length);
			var artifactsSquare = 0;

			for (var i = 0; i < n; i++) {
      			artifactsSquare += a[i] * b[i];      
			}

			message = 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
		}
	} else {
		var amountOfRedPoints = a.reduce(function(a, b) {
        return a + b;
           }, 0);

		message = 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
	}

	return message;
}




