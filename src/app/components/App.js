import React, { Component } from 'react';
import {} from 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello world from react-redux</p>
        { this.props.children }
      </div>
    );
  }
}

export default App;
