import React, {useState} from 'react';
import ReactDom from 'react-dom';

// class App extends React.Component {
//   constructor(){
//     super()

//   }
//   render(){
//     return (
//       <h1>App Component</h1>
//     )
//   }
// }

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </>
  )
}

ReactDom.render(<App/>, document.getElementById('app'))