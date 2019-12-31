import React, { Component } from 'react';
import './App.css';

import Lottery from './Lottery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <Lottery /> 
        <Lottery title='Mini Daily' maxNum={10} numBalls={4} />
      </div>
     );
  }
}
 
export default App;