import React from 'react';
import ExquisiteWriter from './components/ExquisiteWriter.jsx';
import DrawCanvas from './components/DrawCanvas.jsx';
import SignIn from './components/SignIn.jsx';
import Gallery from './components/Gallery.jsx';
import ReactDOM from 'react-dom';
import Composite from './components/Composite.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: <DrawCanvas generateImage={this.generateImage.bind(this)}/>,
      pics: [
        {title: 'Title', head: {path:'head.png', artist: 'artist1'}, torso: {path: 'torso.png', artist: 'artist2'}, legs: {path: 'legs.png', artist: 'artist3'}},
        {title: 'Title', head: {path:'paper.png', artist: 'artist1'}, torso: {path: 'paper.png', artist: 'artist2'}, legs: {path: 'paper.png', artist: 'artist3'}},
        {title: 'Title', head: {path:'paper.png', artist: 'artist1'}, torso: {path: 'paper.png', artist: 'artist2'}, legs: {path: 'paper.png', artist: 'artist3'}},
        {title: 'Title', head: {path:'paper.png', artist: 'artist1'}, torso: {path: 'paper.png', artist: 'artist2'}, legs: {path: 'paper.png', artist: 'artist3'}}
      ]
    };
    this.switch = this.switch.bind(this);
    this.generateImage = this.generateImage.bind(this);
  }

  componentDidMount() {
    // this.setState({currentView: <Composite pic={this.state.pics[0]} />});
  }

  switch(e) {
    e.preventDefault();
    var targetVal = e.target.innerText;
    if (targetVal === 'signIn') {
      this.setState({currentView: <SignIn />});
    } else if (targetVal === 'canvas') {
      this.setState({currentView: <DrawCanvas generateImage={this.generateImage.bind(this)}/>});
    } else if (targetVal === 'myGallery') {
      this.setState({currentView: <Gallery pics={this.state.pics} />});
    }
  }

  generateImage(userImage) {
    var userPart = Object.keys(userImage)[0];
    // TODO: ajax GET request to server with "param: userPart" path something like
    //    /generate/?Part=head
    // should return a pic object with complementing pieces

    // dummy ajax return vvvvvv
    var returnedImgObj = {title: 'Title', head: {path:'head.png', artist: 'artist1'}, torso: {path: 'torso.png', artist: 'artist2'}, legs: {path: 'legs.png', artist: 'artist3'}};
    // dummy ajax return ^^^^^^

    returnedImgObj[userPart] = userImage[userPart];
    this.setState({currentView: <Composite pic={returnedImgObj} userImage={userImage} generateImage={this.generateImage}/>});
  }

  render() {
    return (
      <div>
        <ExquisiteWriter />
        <div className="foreground">
          <div className="nav-bar">
            <h1>cadavre exquis</h1>
            <a href="#" onClick={this.switch}>canvas</a>
            <a href="#" onClick={this.switch}>myGallery</a>
            <a href="#" onClick={this.switch}>signIn</a>
          </div>
          {this.state.currentView}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
