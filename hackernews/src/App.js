import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    function helloWorld(user) {
      return 'Welcome ' + user.firstname + ' ' + user.lastname + ' to the Road to Learn React';
    }
    const user = { 
      firstname: 'Harper',
      lastname: 'Perez'
    };
    return (
      <div className="App">
      <h2>{helloWorld(user)}</h2>
      </div>
    );
  }
}

export default App;
