const express = require('express');

const router = express.Router();

const {
  getAllTodos,
  addTodo,
  deleteTodo,
} = require('../controllers/todoController');

router.get('/', getAllTodos);

router.post('/', addTodo);

router.delete('/:id', deleteTodo);

module.exports = router;
