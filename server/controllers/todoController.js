const Todo = require('../models/todoSchema');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

const addTodo = async (req, res) => {
  const todo = req.body.todo;
  if (todo.length === 0) return;
  try {
    const result = await Todo.create({
      todo: todo,
    });

    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTodos,
  addTodo,
  deleteTodo,
};
