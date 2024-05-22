import React, { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [name, setName] = useState();

  const handleName = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.get('https://gr61110iti.execute-api.us-east-2.amazonaws.com/dev/prueba')
      setName(result.data.name)
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div>
      <h1>Hola, {name}</h1>
      <input placeholder='Digita tu nombre'/>
      <button onClick={handleName}>Enviar</button>
    </div>
  );
};

export default App;