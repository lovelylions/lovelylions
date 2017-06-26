window.onload = function () {
  ready();
}

var ready = function () {

  var test = function(event) {
    console.log('x-axis: ' + event.x, 'y-axis: ' + event.y)
    //event.x
    //event.y
  }
  var canvas = document.getElementById('canvas');


  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    canvas.addEventListener('click', test)
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    
  } else {
    var placeHolder = '<div>Please update your browser</div>';
    canvas.appendChild(placeHolder);
  }



}