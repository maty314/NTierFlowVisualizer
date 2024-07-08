const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
});


// Nuevo endpoint para obtener datos de la arquitectura
app.get('/api/architecture', (req, res) => {
    const architectureData = [
        { name: 'Nginx', status: 'running' },
        { name: 'HAProxy', status: 'running' },
        { name: 'App1', status: 'running' },
        { name: 'App2', status: 'running' },
        { name: 'App3', status: 'running' },
        { name: 'MongoDB1', status: 'running' },
        { name: 'MongoDB2', status: 'running' },
        { name: 'MongoDB3', status: 'running' },
    ];
    res.json(architectureData);
});


app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});

