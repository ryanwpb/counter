import React, { Component } from 'react';
import Counter from '../src/components/Counter/counterButton';
import Display from '../src/components/Counter/counterDisplay';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  this.state = {count:0}
  }
  render() {
    return (
      <div className="App">
       <Display count = {this.state.count} />
       <Counter />
      </div>
    );
  }
}

export default App;
