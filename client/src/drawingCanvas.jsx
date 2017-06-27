import React from 'react';


class DrawingCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.width = 300;
    this.height = 300;
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
    this.paint = false;
  }

  draw(event) {
    this.paint = true;
    console.log(event.clientX - this.offsetLeft + this.scrollLeft, event.clientY - this.offsetTop + this.scrollTop);
    this.addToEvents(event.clientX - this.offsetLeft + this.scrollLeft, event.clientY - this.offsetTop + this.scrollTop);
    this.redraw();
  }

  endDraw(event) {
    this.paint = false;
  }

  drawing(event) {
    if (this.paint) {
      this.addToEvents(event.clientX - this.offsetLeft + this.scrollLeft, event.clientY - this.offsetTop + this.scrollTop, true);
      this.redraw();
    }
  }

  addToEvents(x, y, drag) {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(drag);
  }

  redraw() {
    this.context.clearRect(0, 0, this.width, this.height);
    for (var i = 0; i < this.clickX.length; i++) {
      this.context.beginPath();

      this.context.strokeStyle = "#000000";
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;

      if (this.clickDrag[i] && i) {
        this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
      } else {
        this.context.moveTo(this.clickX[i] - 1, this.clickY[i]);
      }
      this.context.lineTo(this.clickX[i], this.clickY[i]);
      this.context.closePath();
      this.context.stroke();
    }
  }

  componentDidMount() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.offsetLeft = this.canvas.offsetLeft;
    this.offsetTop = this.canvas.offsetTop;
    this.scrollLeft = document.body.scrollLeft;
    this.scrollTop = document.body.scrollTop;
    document.addEventListener('scroll', (event) => {
      console.log(this.scrollLeft, this.scrollTop);
      this.scrollLeft = document.body.scrollLeft;
      this.scrollTop = document.body.scrollTop;
    })
  }

  render () {
    return (
      <canvas onMouseLeave={this.endDraw.bind(this)} onMouseMove={this.drawing.bind(this)} onMouseDown={this.draw.bind(this)} onMouseUp={this.endDraw.bind(this)} id='canvas' width={this.width} height={this.height}>
      </canvas>
      )
  }
}

export default DrawingCanvas;