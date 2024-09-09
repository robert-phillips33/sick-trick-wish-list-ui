import './App.css';
import React, { useEffect, useState } from 'react';
import TrickCards from '../TrickCards/TrickCards';
import Form from '../Form/Form';

function App() {
  
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => setTricks(data))
      .catch(error => console.error('failed to fetch tricks, sry sk8r!:', error));
  }, []);

  const addTrick = (newTrick) => {
    setTricks((previousTricks) =>
      [...previousTricks, newTrick])
  };

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      <TrickCards tricks={tricks} />
    </div>
  );
};

export default App;
