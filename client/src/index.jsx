import React from 'react';
import ReactDOM from 'react-dom'
import DrawingCanvas from './drawingCanvas.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>
      <DrawingCanvas />
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
