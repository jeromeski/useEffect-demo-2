import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

// UseEffect Demo - 1
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
    console.count('Effect fired');
  });

  console.count('App Component Rendered');

  return (
    <div className="container">
      <div className="row">
        <Button size="sm" color="danger" onClick={() => setCount(count - 1)}>
          -
        </Button>
        <h1>{count}</h1>
        <Button size="sm" color="success" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
    </div>
  );
}

export default App;
