import pool from '../connection/ConnectionDb.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/carros', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM carros');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro os carro cadastrados');
    }
});

app.post('/carros', async (req, res) => {
  const {  } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO carros (nome) VALUES ($1) RETURNING *',
      [nome]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao adicionar carro', error);
    res.status(500).send('Erro no metodo post');
  }
});

  app.put('/carros/:id_carro', async (req, res) => {
    const { id_carro } = req.params;
    const { nome } = req.body;
  
    try {
      const result = await pool.query(
        'UPDATE carros SET nome = COALESCE($1, nome) RETURNING *',
        [ nome ]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).send('Carro não encontrado');
      }
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Erro ao encontrar carro:', error);
      res.status(500).send('Erro ao atualizar o carro. Verifique se os dados estão corretos.');
    }
  });

  app.delete('/carros/:id_carro', async (req, res) => {
    const { id_carro } = req.params;
    try {
      const result = await pool.query('DELETE FROM carros WHERE id_carro = $1 RETURNING *', [id_carro]);
      if (result.rows.length === 0) {
        return res.status(404).send('Produto não encontrado');
      }
      res.send('Carro deletado com sucesso');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao deletar carro');
    }
  });
  