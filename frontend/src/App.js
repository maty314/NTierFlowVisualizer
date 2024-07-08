import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Arquitectura NTierFlowVisualizer</h1>
      </header>
      <main className="App-main">
        <section className="component">
          <h2>Web Frontend</h2>
          <ul>
            <li>Servidor web (Nginx)</li>
            <li>React App (Frontend)</li>
          </ul>
        </section>

        <section className="component">
          <h2>Backend</h2>
          <ul>
            <li>Node.js (Express)</li>
            <li>MongoDB (Base de Datos)</li>
          </ul>
        </section>

        <section className="component">
          <h2>Servicios de Aplicación</h2>
          <ul>
            <li>App1</li>
            <li>App2</li>
            <li>App3</li>
          </ul>
        </section>

        <section className="component">
          <h2>Servidores de Base de Datos</h2>
          <ul>
            <li>Mongo1</li>
            <li>Mongo2</li>
            <li>Mongo3</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

