const express = require('express');
const mongoose = require('mongoose');
const DataModel = require('./dataModel'); // Importar el modelo de datos

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Conexión a la base de datos MongoDB a través de HAProxy
mongoose.connect('mongodb://haproxy:27017/app2db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Rutas
app.get('/api/app2', (req, res) => {
    res.send('Hello from app2!');
});

app.post('/api/app2/data', async (req, res) => {
    const data = new DataModel(req.body);
    await data.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Data saved!');
        }
    });
});

app.get('/api/app2/data', async (req, res) => {
    const data = await DataModel.find();
    res.send(data);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`App2 server is running on port ${port}`);
});

