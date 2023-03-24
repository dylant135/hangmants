import React from 'react';
import './App.css';
import Start from './components/Start';
import WordProvider from './context/WordContex';
import { Routes, Route} from 'react-router-dom'
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <h1 className='center'>Hangman</h1>
      <WordProvider>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </WordProvider>
    </div>
  );
}

export default App;
