const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(express.json());
//
app.use(express.static(path.join(__dirname, '../src')));

app.use('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

const taskRouter = require('./Routes/api');

//ROUTE HANDLERS DEFINED
app.use('/task', taskRouter);

//unknown route handler
app.use((req, res) => res.sendStatus(404));

//Make Global Error Handler
app.use((error, req, res, next) => {
  const defaultError = {
    log: 'unknown middleware error',
    status: 400,
    message: { error: 'An error ocurred' },
  };
  //declare var to store overwritten default error from the global error handler(we are not overwriting the gloal err handler but the default error within it)
  const errorObj = Object.assign({}, defaultError, error);
  //log error message will be overwritten by middleware
  console.log(errorObj.log);
  //return response to client parse body so client can see the message
  return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => {
  console.log(`Listening on Port:${PORT}!`);
});
