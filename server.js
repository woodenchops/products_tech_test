const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// import routes

const productsRoute = require('./routes/products');
const productsMaxPrice = require('./routes/productsMaxPrice');

app.use('/products', productsRoute);
app.use('/products/maxPrice', productsMaxPrice);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));