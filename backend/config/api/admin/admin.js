import pool from '../connection/ConnectionDb.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro os usuario cadastrados');
    }
});

app.post('/usuarios', async (req, res) => {
  const {  } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nome) VALUES ($1) RETURNING *',
      [nome]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao criar o usuario', error);
    res.status(500).send('Erro no metodo post');
  }
});

  app.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome } = req.body;
  
    try {
      const result = await pool.query(
        'UPDATE usuarios SET nome = COALESCE($1, nome) RETURNING *',
        [ nome ]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).send('Usuario não encontrado');
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Erro ao encontrar usuario:', error);
      res.status(500).send('Erro ao criar o usuario. Verifique se os dados estão corretos.');
    }
  });

  app.delete('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    try {
      const result = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1 RETURNING *', [id_usuario]);
      if (result.rows.length === 0) {
        return res.status(404).send('Produto não encontrado');
      }
      res.send('Usuario deletado com sucesso');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao deletar usuario');
    }
  });
  