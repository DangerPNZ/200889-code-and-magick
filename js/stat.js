'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.strokeText('Ура, Вы победили!', 230, 25);
  ctx.fillText('Список результатов:', 222, 45);
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
  for (i = 0; i < times.length; i++) {
    time = times[i];
    var name = names[i];
    var height = step * time;
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0,', ((Math.random() * 5) * 50).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join('');
    }
    // Отрисовка гистограммы (начальная точка по оси Х(x1) + интервал между колонками * индекс, Начальная точка У, ширина, (??? высота???))
    ctx.fillRect(histoX + columnIndent * i, (histoX - height + 100), 40, height);
    ctx.fillStyle = '#000';
    ctx.strokeText(name + ':', histoX + columnIndent * i, histoHeight + 113);
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, (histoX - height + 80));
  }
};
