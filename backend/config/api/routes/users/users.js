const express = require('express');
const pool = require('../config/api/connection/database'); 

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM usuarios');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ erro: 'Erro ao buscar usuários' });
    }
  });
  
router.get('/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar os usuários cadastrados.');
    }
});

// Rota para buscar um usuário por ID
router.get('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [id_usuario]);
        if (result.rows.length === 0) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).send('Erro no metodo get');
    }
});

// Rota para criar um novo usuário
router.post('/usuarios', async (req, res) => {
    const { nome, login, senha, tipo } = req.body;
    
    try {
        const result = await pool.query(
            'INSERT INTO usuarios (nome, login, senha, tipo) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, login, senha, tipo]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao criar o usuário', error);
        res.status(500).send('Erro ao criar o usuário. Verifique se os dados estão corretos.');
    }
});

// Rota para atualizar um usuário
router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, login, senha, tipo } = req.body;
    
    try {
        const result = await pool.query(
            'UPDATE usuarios SET nome = COALESCE($1, nome), login = COALESCE($2, login), senha = COALESCE($3, senha), tipo = COALESCE($4, tipo) WHERE id_usuario = $5 RETURNING *',
            [nome, login, senha, tipo, id_usuario]
        );
    
        if (result.rows.length === 0) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).send('Erro ao atualizar o usuário. Verifique se os dados estão corretos.');
    }
});

// Rota para deletar um usuário
router.delete('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const result = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1 RETURNING *', [id_usuario]);
        if (result.rows.length === 0) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.send('Usuário deletado com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao deletar usuário');
    }
});

module.exports = router;