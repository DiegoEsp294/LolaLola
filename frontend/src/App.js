import React, { Component } from 'react';
import Routes from "./Routes";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  } 
  render() {
    const childProps = {};
    return (
      <div className="App">
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default App;