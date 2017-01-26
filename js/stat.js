'use strict';
window.renderStatistics = function (ctx, names, times) {

	// Высота гистограммы
  var histoHeight = 150;
  // Позиционирование по оси X
  var histoX = 155;
  // Вычитание высоты гистограмм
  var step = histoHeight / max;
  // Интервал между колонками
  var columnIndent = 90;
  var max = times[0];
	var curentColor = 'rgba(255, 0, 0, 1)';

  function drawRect(x1, y1, x2, y2, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x1, y1, x2, y2);
  }

  drawRect('rgba(0, 0, 0, 0.7)', 110, 20, 420, 270);
  drawRect('rgb(255, 255, 255)', 100, 10, 420, 270);

	ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  function writeStrokeText(text, color, x, y) {
    ctx.strokeStyle = color;
    ctx.strokeText(text, x, y);
  }

  function writeFillText(text, color, x, y) {
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  writeStrokeText('Ура, Вы победили!', 'darkblue', 230, 25);
  writeFillText('Список результатов:', '#000', 222, 45);

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = times[i];
    }
  }

  function colorGenerate() {
    return 'rgba(0, 0, ' + (Math.random() * 255).toFixed(0) + ', ' + (Math.random() * (1.5 - 0.5) + 0.5).toFixed(1) + ')';
  }

  for (i = 0; i < times.length; i++) {
    time = times[i];
    var name = names[i];
    var height = step * time;

    if (name !== 'Вы') {
      curentColor = colorGenerate();
    }

		drawRect(histoX + columnIndent * i, histoX - height, 40, height, curentColor);

		writeStrokeText(name + ':', 'black', histoX + columnIndent * i, histoHeight + 113);
    writeFillText(time.toFixed(0), 'black', histoX + columnIndent * i, histoX - height + 80);
  }
};
