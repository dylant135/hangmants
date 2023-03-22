import React from 'react';
import './App.css';
import WordForm from './components/WordForm';
import WordProvider from './context/WordContex';

function App() {
  return (
    <div className="App">
      <WordProvider>
        <WordForm />
      </WordProvider>
    </div>
  );
}

export default App;
