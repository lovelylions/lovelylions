import React from 'react';
<<<<<<< HEAD
import ExquisiteWriter from './components/ExquisiteWriter.jsx';
import DrawCanvas from './components/DrawCanvas.jsx';
import SignIn from './components/SignIn.jsx';
import Gallery from './components/Gallery.jsx';
import ReactDOM from 'react-dom';
=======
import ReactDOM from 'react-dom';
import ExquisiteWriter from './components/ExquisiteWriter.jsx';
import Navbar from './components/Navbar.jsx'
>>>>>>> Implement static front-end react mock-up

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: <DrawCanvas />,
      pics: [
        {head: 'paper.png', torso: 'paper.png', legs: 'paper.png', title: 'Title', artists: ['artist1', 'artist2', 'artist3']},
        {head: 'paper.png', torso: 'paper.png', legs: 'paper.png', title: 'Title', artists: ['artist1', 'artist2', 'artist3']},
        {head: 'paper.png', torso: 'paper.png', legs: 'paper.png', title: 'Title', artists: ['artist1', 'artist2', 'artist3']},
        {head: 'paper.png', torso: 'paper.png', legs: 'paper.png', title: 'Title', artists: ['artist1', 'artist2', 'artist3']},
        {head: 'paper.png', torso: 'paper.png', legs: 'paper.png', title: 'Title', artists: ['artist1', 'artist2', 'artist3']},
        {head: 'paper.png', torso: 'paper.png', legs: 'paper.png', title: 'Title', artists: ['artist1', 'artist2', 'artist3']}
      ]
    };
    this.switch = this.switch.bind(this);
  }

  switch(e) {
    e.preventDefault();
    var targetVal = e.target.innerText;
    if (targetVal === 'signIn') {
      this.setState({currentView: <SignIn />});
    } else if (targetVal === 'canvas') {
      this.setState({currentView: <DrawCanvas />});
    } else if (targetVal === 'myGallery') {
      this.setState({currentView: <Gallery pics={this.state.pics} />});
    }
  }


  render() {
    return (<div>
<<<<<<< HEAD
      <div className="foreground">
          <ExquisiteWriter />
          <div className="container">
            <div className="nav-bar">
              <h1>Exquisite Corpse</h1>
              <a href="#" onClick={this.switch}>canvas</a>
              <a href="#" onClick={this.switch}>myGallery</a>
              <a href="#" onClick={this.switch}>signIn</a>
            </div>
            {this.state.currentView}
          </div>
        </div>
=======
      <div className="container">
          <ExquisiteWriter />
          <div className="header">
            <Navbar />
          </div>
          <img className="stain" src="stained.png" />
          <div className="canvas">
          </div>
      </div>
>>>>>>> Implement static front-end react mock-up
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



<div className="nav-bar">
<h1>Exquisite Corpse</h1>
<a>myGallery</a>
<a>signIn</a>
</div>
