const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const  express = require("express");
const morgan = require("morgan");
const expressValidator = require("express-validator");
const  connectDB =  require('./config/db');
require('dotenv').config()

const app = express();

// Import Routes
const userRoutes = require('./routes/user')

// Connect Database
connectDB();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

// routes middleware
app.use("/api" ,userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
                 

 