import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(){
    super()

  }
  render(){
    return (
      <h1>App Component</h1>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'))