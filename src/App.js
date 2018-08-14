import React, { Component } from 'react';
import Counter from '../src/components/Counter/counterButton';
import Display from '../src/components/Counter/counterDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Display />
       <Counter />
      </div>
    );
  }
}

export default App;
