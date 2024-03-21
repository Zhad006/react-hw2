import React, { useState } from 'react';
import './App.css';


const List = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);


const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>My React App</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <List items={items} />
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
