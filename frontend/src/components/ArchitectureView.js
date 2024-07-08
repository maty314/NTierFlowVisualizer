import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArchitectureView = () => {
  const [architectureData, setArchitectureData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/architecture');
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
          <div key={index} className="component">
            <h3>{component.name}</h3>
            <p>{component.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureView;

