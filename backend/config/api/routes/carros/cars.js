const express = require('express');
const pool = require('../../connection/database');

const router = express.Router();

router.get('/carros', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM carros');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar os carros cadastrados.');
    }
});

// Rota para buscar um carro por ID
router.get('/carros/:id_carro', async (req, res) => {
    const { id_carro } = req.params;
    try {
        const result = await pool.query('SELECT * FROM carros WHERE id_carro = $1', [id_carro]);
        if (result.rows.length === 0) {
            return res.status(404).send('Carro não encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar carro:', error);
        res.status(500).send('Erro no metodo get');
    }
});

// Rota para adicionar um novo carro
router.post('/carros', async (req, res) => {
    const { modelo, ano, cor, placa, preco_diaria, disponibilidade } = req.body;
    
    try {
        const result = await pool.query(
            'INSERT INTO carro (modelo, ano, cor, placa, preco_diaria, disponibilidade) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [modelo, ano, cor, placa, preco_diaria, disponibilidade]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao adicionar carro', error);
        res.status(500).send('Erro no metodo post');
    }
});

// Rota para atualizar um carro
router.put('/carros/:id_carro', async (req, res) => {
    const { id_carro } = req.params;
    const { modelo, ano, cor, placa, preco_diaria, disponibilidade } = req.body;
    
    try {
        const result = await pool.query(
            'UPDATE carro SET modelo = COALESCE($1, modelo), ano = COALESCE($2, ano), cor = COALESCE($3, cor), placa = COALESCE($4, placa), preco_diaria = COALESCE($5, preco_diaria), disponibilidade = COALESCE($6, disponibilidade) WHERE id_carro = $7 RETURNING *',
            [modelo, ano, cor, placa, preco_diaria, disponibilidade, id_carro]
        );
    
        if (result.rows.length === 0) {
            return res.status(404).send('Carro não encontrado');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar carro:', error);
        res.status(500).send('Erro ao atualizar o carro. Verifique se os dados estão corretos.');
    }
});

// Rota para deletar um carro
router.delete('/carros/:id_carro', async (req, res) => {
    const { id_carro } = req.params;
    try {
        const result = await pool.query('DELETE FROM carro WHERE id_carro = $1 RETURNING *', [id_carro]);
        if (result.rows.length === 0) {
            return res.status(404).send('Carro não encontrado');
        }
        res.send('Carro deletado com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao deletar carro');
    }
});

module.exports = router;