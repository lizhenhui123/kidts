//获取一个随机的rgb格式的颜色
function random(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
  }

  function randomColor() {
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }