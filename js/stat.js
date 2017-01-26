'use strict';
window.renderStatistics = function (ctx, names, times) {
  function drawCloud(color, x1, y1, x2, y2) {
    ctx.fillStyle = color;
    ctx.fillRect(x1, y1, x2, y2);
  }
  drawCloud('rgba(0, 0, 0, 0.7)', 110, 20, 420, 270);
  drawCloud('rgb(255, 255, 255)', 100, 10, 420, 270);
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
  var max = times[0];
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = times[i];
    }
  }
  // Высота гистограммы
  var histoHeight = 150;
  // Позиционирование по оси X
  var histoX = 155;
  // Вычитание высоты гистограмм
  var step = histoHeight / max;
  // Интервал между колонками
  var columnIndent = 90;
  function colorGenerate() {
    ctx.fillStyle = 'rgba(0, 0, ' + (Math.random() * 255).toFixed(0) + ', ' + (Math.random() * (1.5 - 0.5) + 0.5).toFixed(1) + ')';
  }
  function drawHisto(bottomLine, columnWidth) {
    // Отрисовка гистограммы (начальная точка по оси Х(x1) + интервал между колонками * индекс, Начальная точка У, ширина, (??? высота???))
    ctx.fillRect(histoX + columnIndent * i, (histoX - height + bottomLine), columnWidth, height);
  }
  for (i = 0; i < times.length; i++) {
    time = times[i];
    var name = names[i];
    var height = step * time;
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      colorGenerate();
    }
    drawHisto(100, 40);
    writeStrokeText(name + ':', 'black', histoX + columnIndent * i, histoHeight + 113);
    writeFillText(time.toFixed(0), 'black', histoX + columnIndent * i, histoX - height + 80);
  }
};
