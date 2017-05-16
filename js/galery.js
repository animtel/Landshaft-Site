var count = 0, // счётчик картинок
	td, // контейнер для ячейки таблицы
	tr; // контейнер для строки

function loadImg() { 
	var table = document.getElementById('imgTable'); // получаем доступ к таблице
	if(count === 0 || count % 3 === 0) { // условие выполняется при запуске функции и каждой четвёртой картинке
			tr = document.createElement('tr'); // создаём новую строку
			table.appendChild(tr); // вставляем её в таблицу
	}

	count++; // переходим к следующему изображению
	td = document.createElement('td'); // создаём ячейку
	td.innerHTML = '<img src="img/' + count + '.jpg" style="width: 95%" id="img-'+ count +'"/>'; // записываем в ячейку тег изображения,
	// где src="папка с изображениями + номер изображения + расширение", по id далее проверяется, загрузилась ли картинка 
	tr.appendChild(td); // вставляем ячейку в строку таблицы

	document.getElementById('img-' + count).onload = loadImg; // если картинка загрузилась, то функция запускается вновь
	document.getElementById('img-' + count).onerror = function() { // если при загрузке возникла ошибка, то выполняется след. код
		
		td.innerHTML = '<img src="img/' + count + '.png" style="width: 95%" id="img-'+ count +'"/>'; // в ячейке меняем расширение изображения
		tr.appendChild(td); // обновляем ячейку в таблице
		
		document.getElementById('img-' + count).onload = loadImg; // если изображение загрузилось, то функция запускается снова
		document.getElementById('img-' + count).onerror = function() {tr.removeChild(td);} // если изображение не загрузилось, то удаляем ячейку, выполнение скрипта останавливается
	};
}