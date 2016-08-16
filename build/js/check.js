
function getMessage(a, b) {
	
	var message;
	if (typeof a == 'boolean') {

		if(a == true){
			message = 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
		} else {
			message = 'Переданное GIF-изображение не анимировано';
		}

	}  

	if (typeof a == 'number') {

		message = 'Переданное SVG-изображение содержит ' + a + 'объектов и ' + b * 4 + ' атрибутов';
	}



	if (a.constructor == 'Array') {
		

		var i;

		if(b.constructor == 'Array'){
					
			var n = a.length == b.length ? a.length : a.length < b.length ? a.length : b.length;
			var artifactsSquare = 0;
			for (i = 0; i<n; i++){
      			artifactsSquare += a[i] * b[i];      
			}
			message = 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
		}
	} else{
		var amountOfRedPoints = 0;
		for (i = 0; i < a.length; i++){
			amountOfRedPoints += a[i]; 
		}
		message = 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;

	}
	return message;
}


