// app/app1/server.js

const express = require('express');
const mongoose = require('mongoose');
const DataModel = require('./dataModel'); // Importar el modelo de datos

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Conexión a la base de datos MongoDB a través de HAProxy
mongoose.connect('mongodb://haproxy:27017/app1db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Rutas
app.post('/api/app1/data', (req, res) => {
    const newData = new DataModel({ data: req.body.data }); // Crear una nueva instancia del modelo
    newData.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Data saved!');
        }
    });
});

app.get('/api/app1/data', (req, res) => {
    DataModel.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`App 1 listening at http://localhost:${port}`);
});

