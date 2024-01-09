const express = require('express');
const mongoDB = require('./config/config');
const cors = require('cors');
const Todo = require('./models/todoSchema');
const todoRoute = require('./routes/todoRoutes');
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/todos', todoRoute);

mongoDB.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  console.log('Connected to MongoDB server');
});
