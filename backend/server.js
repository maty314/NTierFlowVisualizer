const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
});

const checkHealth = async (url) => {
    try {
        const response = await axios.get(url);
        return response.status === 200 ? 'running' : 'down';
    } catch (error) {
        return 'down';
    }
};

app.get('/api/architecture', async (req, res) => {
    const architectureData = [
        { name: 'Nginx', url: 'http://nginx', description: 'Servidor web y balanceador de carga' },
        { name: 'HAProxy', url: 'http://haproxy', description: 'Balanceador de carga para las bases de datos' },
        { name: 'App1', url: 'http://app1:3000/health', description: 'Servidor de aplicaciones 1' },
        { name: 'App2', url: 'http://app2:3000/health', description: 'Servidor de aplicaciones 2' },
        { name: 'App3', url: 'http://app3:3000/health', description: 'Servidor de aplicaciones 3' },
        { name: 'MongoDB1', url: 'http://mongodb1:27017', description: 'Servidor de base de datos MongoDB 1' },
        { name: 'MongoDB2', url: 'http://mongodb2:27017', description: 'Servidor de base de datos MongoDB 2' },
        { name: 'MongoDB3', url: 'http://mongodb3:27017', description: 'Servidor de base de datos MongoDB 3' },
    ];

    const healthChecks = await Promise.all(architectureData.map(async component => {
        const status = await checkHealth(component.url);
        return { ...component, status };
    }));

    res.json(healthChecks);
});

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});

