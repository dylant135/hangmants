import React from 'react';
import './App.css';
import Start from './components/Start';
import WordProvider from './context/WordContex';
import { Routes, Route} from 'react-router-dom'
import Game from './components/Game';
import Loss from './components/Loss';
import Win from './components/Win';

function App() {
  return (
    <div className="App">
      <h1 className='center'>Hangman</h1>
      <WordProvider>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/game' element={<Game />} />
          <Route path='/loss' element={<Loss />} />
          <Route path='/win' element={<Win />} />
        </Routes>
      </WordProvider>
    </div>
  );
}

export default App;
