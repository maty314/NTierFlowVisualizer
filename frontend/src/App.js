import React from 'react';
import './App.css';
import ArchitectureView from './components/ArchitectureView'; // Importa ArchitectureView

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Arquitectura NTierFlowVisualizer</h1>
      </header>
      <main className="App-main">
        {/* Usa el componente ArchitectureView */}
        <ArchitectureView />
      </main>
    </div>
  );
}

export default App;

