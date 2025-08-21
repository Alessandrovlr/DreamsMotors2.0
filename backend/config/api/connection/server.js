const express = require('express');
const cors = require('cors');
require('dotenv').config();

const usersRoutes = require('../routes/usuarios/users');
const carsRoutes = require('../routes/carros/cars');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', usersRoutes);    
app.use('/users', usersRoutes);
app.use('/cars', carsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}🚀`);
});