const express = require('express');
const userController = require('./controller/userController.js');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello from server');
});
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUser);
app.post('/users', userController.createUser);
app.patch('/users/:id', userController.updateUser);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
