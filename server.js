const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// import routes

const productsRoute = require('./routes/products');
const userRoute = require('./routes/userRoute');

app.use('/products', productsRoute);
app.use('/signup', userRoute);


// will catch all urls that arent recognised
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});


// global error handler:  express will know that if there are 4 params, that it is an error middleware
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));