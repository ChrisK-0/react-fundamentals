import './App.css';
import React, { Component } from 'react';
import Main from '../Main';

class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TV series List
          </h1>
          <Main />
        </header>
      </div>
    );
  }
}

export default App;
