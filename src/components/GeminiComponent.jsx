import React, { useState } from 'react';
import axios from 'axios';
import './GeminiComponent.css';

function GeminiComponent() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://servergem.onrender.com/generate', { prompt });
      setResponse(response.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Pergunte alguma coisa!DÃÃÃ....');
    }
  };

  const handleClear = () => {
    setPrompt('');
    setResponse('');
  };

  return (
    <div className="gemini-component">
        
      <h2 className="gemini-component-title">Faça qualquer pergunta 🤖</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Digite algo no PROMPT 🤖'
        />
        <button className='button-primary' type="submit">Perguntar</button>
        
      </form>
      <div className='reposta'>
        {response ? (
          <p style={{color:'white'}}>{response}</p>
        ) : (
          <p className='piscando'>Aguardando informações...</p>
        )}
        <button className="button-secondary"  onClick={handleClear}>Limpar</button>
      </div>
      <div>
      
      </div>

      <h6>POWERED BY GEMINI</h6>
    </div>
    
  );
}

export default GeminiComponent;