import React, { Component } from 'react';
import './App.css';

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}

const robin = new Developer('Robin', 'Wieruch');
console.log(robin.getName());

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {list.map(item => 
          <div>
            <span><a href={item.url}>{item.title}</a></span>
            &nbsp;
            <span>{item.author}</span>
            &nbsp;
            <span>{item.num_comments}</span>
            &nbsp;
            <span>{item.points}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
