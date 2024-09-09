import React from 'react';
import { useState } from 'react';
import './Form.css';


function Form({ addTrick }) {
  
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrick = {
      stance,
      name,
      obstacle,
      tutorial
    };
    addTrick(newTrick); 
    setStance('');        
    setName('');
    setObstacle('');
    setTutorial('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <select value={stance} onChange={(e) => setStance(e.target.value)}>
          <option value='Regular'>Regular</option>
          <option value='Switch'>Switch</option>
        </select>
      <label>
        name your trick, sk8r! :
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <label>
        choose the obstacle.. :
        <select value={obstacle} onChange={(e) => setObstacle(e.target.value)}>
          <option value='Flatground'>Flatground</option>
          <option value='Ledge'>Ledge</option>
          <option value='Rail'>Rail</option>
          <option value='Stairs'>Stairs</option>
          <option value='Pool'>Pool</option>
        </select>
      </label>

      <button type='submit'>SEND IT</button>
    </form>
  );
}

export default Form;