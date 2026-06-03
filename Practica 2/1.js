const express = require('express');
const { sequelize, Categoria } = require('./db');
const app = express();
app.use(express.json());

app.post('/categorias', async (req, res) => {
  try {
    const nueva = await Categoria.create(req.body);
    res.status(201).json(nueva);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

sequelize.sync().then(() => app.listen(3000));