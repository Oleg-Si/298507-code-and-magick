'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Переменные
  var columnWidth = 40;
  var timeMax = 0;
  var totalHeight = 0;
  var columnSpace = 50;
  var columnPositionStartX = 150;
  var columnPositionStartY = 250;
  var namePositionStartY = 270;
  var timePositionStartY = 85;

  // Рисуем тень облака
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 10;

  // Рисуем облако
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 25);
  ctx.fillText('Список результатов:', 110, 45);

  // Отключаем тень
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';

  // Находим максимальное время
  var getTimeMax = function () {
    for (var a = 0; a < times.length; a++) {
      var time = times[a];
      if (time > timeMax) {
        timeMax = time;
      }
    }
    return timeMax;
  };
  getTimeMax(times);

  // Находим высоту столбика, в зависимости от времени
  var getColumnHeight = function (timeNow) {
    if (timeNow === timeMax) {
      totalHeight = -150;
    }
    if (timeNow < timeMax) {
      totalHeight = timeNow * -150 / timeMax;
    }
    return totalHeight;
  };

  // Рисуем столбики, имена и время
  var drawColumn = function () {
    for (var i = 0; i < names.length; i++) {
      // Красный столбик, мой
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      }
      var timeNow = times[i];
      ctx.fillRect(columnPositionStartX, columnPositionStartY, columnWidth, getColumnHeight(timeNow));
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      // Рисуем имена
      ctx.fillText(names[i], columnPositionStartX, namePositionStartY);
      // Рисуем время
      ctx.fillText(Math.floor(times[i]), columnPositionStartX, timePositionStartY);
      // Задаем точку X другого столбика
      columnPositionStartX = columnPositionStartX + columnSpace + columnWidth;
    }
  };
  drawColumn(names);
};
