import React, {useState} from 'react';
import ReactDom from 'react-dom';

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