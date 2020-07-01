const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// import routes

const welcomeRoute = require('./routes/welcome');
const productsRoute = require('./routes/products');
const contentsRoute = require('./routes/contents');
// const maxPriceProduct = require('./routes/maxPriceProduct');

app.use('/welcome', welcomeRoute);
app.use('/products', productsRoute);
app.use('/contents', contentsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));