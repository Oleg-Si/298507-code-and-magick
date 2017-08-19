'use strict';

window.renderStatistics = function (ctx, names, times) {
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

  var columnWidth = 40;
  var columnHeight = 150;
  var columnSpace = 50;
  var columnPositionStartX = 150;
  var columnPositionStartY = 100;
  var namePositionStartY = 270;
  var timePositionStartY = 85;

  // Отключаем тень
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';

  // Рисуем столбики
  for (var i = 1; i <= names.length; i++) {
    // Красный столбик, мой
    if (names[i - 1] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(columnPositionStartX, columnPositionStartY, columnWidth, columnHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    // Рисуем имена
    ctx.fillText(names[i - 1], columnPositionStartX, namePositionStartY);
    // Рисуем время
    ctx.fillText(Math.floor(times[i - 1]), columnPositionStartX, timePositionStartY);
    // Правильно ли я округлил вреия???
    // Задаем точку X другого столбика
    columnPositionStartX = columnPositionStartX + columnSpace + columnWidth;
  }
};
