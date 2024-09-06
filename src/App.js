import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare a state variable to track the number of clicks
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Display Hello, World! */}
        <h1>Hello, World!</h1>
        
        {/* Display the button and number of clicks */}
        <button onClick={handleClick}>Click me!</button>
        <p>Button clicked {count} times</p>
      </header>
    </div>
  );
}

export default App;
