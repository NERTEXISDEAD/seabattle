var topText = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К'];
var leftText = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

// функция нанесения надписей слева и справа от полей
// получает на вход left или right

function addTextToPositioning(id) {
	for (var i = 0; i < 10; i++) {
		$('#' + id + 'TextLeft').append('<span>' + leftText[i] + '</span>');
		$('#' + id + 'Text').append('<span>' + topText[i] + '</span>');
	}
}

// функция заполняет поле элементами span
// на вход подается поле(левое или правое)

function emptyCellsToField(field) {
	$(field).empty();
	for (var i = 0; i < 100; i++) {
		$(field).append('<span class="cell cellColor" id=cell' + i + '  oncontextmenu="blocker(' + i + ');return false" ></span>');
	}
};


emptyCellsToField('#leftField');
emptyCellsToField('#rightField');
addTextToPositioning('left');
addTextToPositioning('right');















