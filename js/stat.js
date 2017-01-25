'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  function strokeTextWrite(text, color, x, y) {
    ctx.strokeStyle = color;
    ctx.strokeText(text, x, y);
  }
  function fillTextWrite(text, color, x, y) {
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }
  strokeTextWrite('Ура, Вы победили!', 'darkblue', 230, 25);
  fillTextWrite('Список результатов:', '#000', 222, 45);
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
    ctx.fillStyle = ['rgba(0, 0,', ((Math.random() * 5) * 50).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join('');
  }
  function histoDraw(bottomLine, columnWidth) {
    // Отрисовка гистограммы (начальная точка по оси Х(x1) + интервал между колонками * индекс, Начальная точка У, ширина, (??? высота???))
    ctx.fillRect(histoX + columnIndent * i, (histoX - height + bottomLine), columnWidth, height);
  }
  function playerNameOutput(color, y) {
    ctx.strokeStyle = color;
    ctx.strokeText(name + ':', histoX + columnIndent * i, histoHeight + y);
  }
  function playerResultsOutput(color, y) {
    ctx.fillStyle = color;
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, (histoX - height + y));
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
    histoDraw(100, 40);
    playerNameOutput('black', 113);
    playerResultsOutput('black', 80);
  }
};
