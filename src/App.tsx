import React from 'react';
import './App.css';
import DisplayWord from './components/DisplayWord';
import WordForm from './components/WordForm';
import WordProvider from './context/WordContex';

function App() {
  return (
    <div className="App">
      <WordProvider>
        <WordForm />
        <DisplayWord />
      </WordProvider>
    </div>
  );
}

export default App;
