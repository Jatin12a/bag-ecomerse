const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const ownersRouter = require('./routes/ownersRouter')
const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')


const db = require('./config/mongoose-connection')

const app = express();

// View engine setup

app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/',(req,res)=>{
  res.send("hiii");
})
app.get('/owners', ownersRouter);
app.get('/users', usersRouter);
app.get('/products', productsRouter);

// Start server
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});