import './App.css';
import React, { Component } from 'react';
import Intro from '../intro';
import Series from '../../containers/series';


class App extends Component {



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TV series List
          </h1>

          <Intro message="Here you can find series" />
          
          <Series />

        </header>
      </div>
    );
  }
}

export default App;
