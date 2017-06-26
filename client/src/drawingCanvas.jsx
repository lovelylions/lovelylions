import React from 'react';


class DrawingCanvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <canvas id='canvas' width='300' height='300'>
      </canvas>
      )
  }
}

export default DrawingCanvas;