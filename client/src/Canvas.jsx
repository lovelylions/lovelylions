import React from 'react';


class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.width = 300;
    this.height = 300;
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
    this.paint = false;
    this.scrollLeft = 0;
    this.scrollTop = 0;
  }

  draw(event) {
    this.paint = true;
    this.addToDrawingEvents(event.clientX - this.offsetLeft + this.scrollLeft, event.clientY - this.offsetTop + this.scrollTop);
    this.redraw();
  }

  endDraw(event) {
    this.paint = false;
  }

  drawing(event) {
    if (this.paint) {
      this.addToDrawingEvents(event.clientX - this.offsetLeft + this.scrollLeft, event.clientY - this.offsetTop + this.scrollTop, true);
      this.redraw();
    }
  }

  addToDrawingEvents(x, y, drag) {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(drag);
  }

  redraw() {
    for (var i = 0; i < this.clickX.length; i++) {
      this.context.beginPath();

      this.context.strokeStyle = "#000000";
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;

      if (this.clickDrag[i] && i) {
        this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
      } else {
        this.context.moveTo(this.clickX[i], this.clickY[i]);
      }
      this.context.lineTo(this.clickX[i], this.clickY[i]);
      this.context.closePath();
      this.context.stroke();
    }
  }

  clearCanvas(event) {
    this.context.clearRect(0, 0, this.width, this.height);
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
    this.context.save();
  }

  componentDidMount() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.offsetLeft = this.canvas.offsetLeft;
    this.offsetTop = this.canvas.offsetTop;
    document.addEventListener('scroll', (event) => {
      this.scrollLeft = document.body.scrollLeft;
      this.scrollTop = document.body.scrollTop;
    })
  }

  render () {
    return (
      <div>
        <input onClick={this.clearCanvas.bind(this)} type='click' value='Clear Canvas'></input>
        <canvas onMouseLeave={this.endDraw.bind(this)} 
        onMouseMove={this.drawing.bind(this)} onMouseDown={this.draw.bind(this)} 
        onMouseUp={this.endDraw.bind(this)} id='canvas' width={this.width} height={this.height}>
        </canvas>
      </div>
      )
  }
}

export default Canvas;