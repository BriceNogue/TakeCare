const express = require ('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;
var cors = require('cors');

app.use(cors());

// MIDDLEWARE
app.use(express.json());
app.use('/api', userRoutes);

// ROUTES
app.get('/', (req,res) => {
    res.send("Welcome to TakeCare API");
});

//CONNECT TO MONGODB 
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error)) 

app.listen(port, () => console.log('server listening on port', port,"..."));