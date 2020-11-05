const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const  express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const expressValidator = require("express-validator");
const  connectDB =  require('./config/db');
require('dotenv').config()

const app = express();

// Import Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user');
const productRoutes = require("./routes/products");


// Connect Database
connectDB();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api" ,authRoutes);
app.use("/api" ,userRoutes);
app.use("/api" ,productRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

                 

 