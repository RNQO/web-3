const express = require('express');
const { sequelize, Categoria } = require('./db');
const app = express();
app.use(express.json());

app.delete('/categorias/:id', async (req, res) => {
  try {
    const cat = await Categoria.findByPk(req.params.id);
    if (!cat) return res.status(404).json({ message: 'No encontrado' });
    await cat.destroy();
    res.status(200).json({ message: 'Eliminado correctamente con cascada' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

sequelize.sync().then(() => app.listen(3000));