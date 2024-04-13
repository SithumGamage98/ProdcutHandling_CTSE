const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product.route');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://sithumgamage180:dwjk1l63C4UCQeE0@cluster0.tnmn3yf.mongodb.net/productDB'
);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Routes
app.use('/products', productRouter);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
