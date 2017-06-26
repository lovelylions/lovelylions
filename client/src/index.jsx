import React from 'react';
import ReactDOM from 'react-dom';
import ExquisiteWriter from './components/ExquisiteWriter.jsx';
import Navbar from './components/Navbar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>
      <div className="container">
          <ExquisiteWriter />
          <div className="header">
            <Navbar />
          </div>
          <img className="stain" src="stained.png" />
          <div className="canvas">
          </div>
      </div>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



<div className="nav-bar">
<h1>Exquisite Corpse</h1>
<a>myGallery</a>
<a>signIn</a>
</div>
