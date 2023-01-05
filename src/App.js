import React from 'react';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Dictionary/>
          <footer>
          <a href="https://github.com/fwhoami/dictionary-project">
            Open source code</a>{" "}
            by fwhoami
           </footer>
        </main>
      </header>
    </div>
  );
}

export default App;
