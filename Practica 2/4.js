const express = require('express');
const { sequelize, Categoria } = require('./db');
const app = express();
app.use(express.json());

app.patch('/categorias/:id', async (req, res) => {
  try {
    const cat = await Categoria.findByPk(req.params.id);
    if (!cat) return res.status(404).json({ message: 'No encontrado' });
    await cat.update(req.body);
    res.status(200).json(cat);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

sequelize.sync().then(() => app.listen(3000));