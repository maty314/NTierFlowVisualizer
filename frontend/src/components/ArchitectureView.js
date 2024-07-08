import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ArchitectureView.css';

const ArchitectureView = () => {
  const [architectureData, setArchitectureData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/architecture');
      setArchitectureData(response.data);
    } catch (error) {
      console.error('Error fetching architecture data:', error);
    }
  };

  return (
    <div className="architecture-view">
      <h2>Arquitectura de NTierFlowVisualizerV3</h2>
      <div className="architecture-diagram">
        {architectureData.map((component, index) => (
          <div key={index} className="component-card">
            <h3>{component.name}</h3>
            <p>Status: {component.status}</p>
            <p>{component.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureView;

