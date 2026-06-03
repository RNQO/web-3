const express = require('express');
const { sequelize, Categoria, Producto } = require('./db');
const app = express();
app.use(express.json());

app.get('/categorias/:id', async (req, res) => {
  try {
    const cat = await Categoria.findByPk(req.params.id, { include: [Producto] });
    if (!cat) return res.status(404).json({ message: 'No encontrado' });
    res.status(200).json(cat);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

sequelize.sync().then(() => app.listen(3000));