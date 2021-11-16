const express = require('express');
const env = require('dotenv');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require("./routes/user");


env.config();

//mongodb connection
// mongodb+srv://root:<password>@cluster0.ia9j1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ia9j1.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        //  useNewUrlParse:true,
        // useUnifiedTopology:true
        //useCreateIndex: true
    }
    ).then(()=>{
        console.log('Database Connected');
    });

app.use(express.json());



app.use('/api',userRoutes);


app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});