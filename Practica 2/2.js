const express = require('express');
const { sequelize, Categoria } = require('./db');
const app = express();
app.use(express.json());

app.get('/categorias', async (req, res) => {
  try {
    const lista = await Categoria.findAll();
    res.status(200).json(lista);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

sequelize.sync().then(() => app.listen(3000));