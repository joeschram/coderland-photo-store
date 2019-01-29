import React, { Component } from 'react';
import '../styles/App.css';
import ProcessImage from './ProcessImage';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resultsHidden: true,
      overlaidImage: null
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>CompileDriver Photo Booth</h1>
          <p>
            Click the "Take Picture" button when ready...
          <div className="App">
            <ProcessImage />
          </div>
          </p>
        </header>
      </div>
    );
  }

}

export default App;
